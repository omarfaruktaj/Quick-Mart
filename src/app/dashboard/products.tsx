import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  brand: string;
  price: number;
  description: string;
  image_url: string;
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await axios("http://localhost:3000/produdcts");
      setProducts(data.data);
    };
    getProducts();
  }, []);

  const handleDeleteClick = (productId: number) => {
    setSelectedProduct(productId);
  };

  const handleConfirmDelete = async () => {
    // Filter out the selected product from the products list
    await axios.delete(`http://localhost:3000/produdcts/${selectedProduct}`);
    setProducts(products.filter((product) => product.id !== selectedProduct));

    toast.success("Product Deleted.");

    // Reset selectedProduct to null
    setSelectedProduct(null);
  };

  return (
    <div className="p-8 text-gray-200">
      <div className=" mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-200">Products</h2>
            <p className=" text-sm text-gray-400 py-2">All Products</p>
          </div>
          <div>
            <Link to="create" className="btn btn-secondary">
              Add Product
            </Link>
          </div>
        </div>
        <div className="w-full h-0.5 bg-gray-700 my-4"></div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Brand</th>
              <th>price</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map(({ id, image_url, brand, price, title }) => (
              <tr key={title}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={image_url} alt="product image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{title}</td>
                <td>{brand}</td>
                <td>${price}</td>
                <td>
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      to={`/dashboard/products/${id}`}
                      className="btn btn-outline"
                    >
                      Details
                    </Link>
                    <Link to={`edit/${id}`} className="btn btn-primary">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteClick(id)}
                      className="btn btn-error"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
      {selectedProduct && (
        <div>
          <dialog open className="modal modal-bottom sm:modal-middle">
            <div className="modal-box ">
              <h3 className="font-bold text-lg">
                Do you want to delete this product?
              </h3>
              <p className="py-4">This action cannot be undo.</p>
              <div className="modal-action gap-2">
                <button onClick={handleConfirmDelete} className="btn btn-error">
                  Confirm
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="btn"
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
}

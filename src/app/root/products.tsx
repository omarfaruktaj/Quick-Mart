import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../../components/product";

interface Product {
  id: number;
  title: string;
  brand: string;
  price: number;
  description: string;
  image_url: string;
}
export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await axios("http://localhost:3000/produdcts");
      setProducts(data.data);
    };
    getProducts();
  }, []);
  return (
    <div className="m-8">
      <h3 className="text-3xl font-bold text-center mb-8">Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

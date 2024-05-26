import axios from "axios";
import ProductForm from "../../components/product-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

interface ProductFormData {
  title: string;
  description: string;
  price: number;
  brand: string;
  image_url: string;
}

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleSubmit = async (data: ProductFormData) => {
    try {
      await axios.patch(`http://localhost:3000/produdcts/${id}`, {
        ...data,
      });
      navigate("/dashboard/products");
      toast.success("Product successfully updated.");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <div>
      <ProductForm productId={id} onSubmit={handleSubmit} />
    </div>
  );
}

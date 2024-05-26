import axios from "axios";
import ProductForm from "../../components/product-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface ProductFormData {
  title: string;
  description: string;
  price: number;
  brand: string;
  image_url: string;
}

export default function CreateProduct() {
  const navigate = useNavigate();
  const handleSubmit = async (data: ProductFormData) => {
    try {
      await axios.post("http://localhost:3000/produdcts", {
        ...data,
      });
      navigate("/dashboard/products");
      toast.success("Product successfully created.");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <div>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
}

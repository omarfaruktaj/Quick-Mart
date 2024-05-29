import axios from "axios";
import ProductForm from "../../components/product-form";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

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
      const result = await MySwal.fire({
        title: "Are you sure?",
        text: "Do you want to crate a new product?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, Create!",
        cancelButtonText: "No, cancel!",
      });

      if (result.isConfirmed) {
        await axios.post("http://localhost:3000/produdcts", {
          ...data,
        });
        navigate("/dashboard/products");
        toast.success("Product successfully created.");
      }
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

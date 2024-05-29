import axios from "axios";
import ProductForm from "../../components/product-form";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useNavigate, useParams } from "react-router-dom";

const MySwal = withReactContent(Swal);

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
      const result = await MySwal.fire({
        title: "Are you sure?",
        text: "Do you want to Update this prodcut?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, Update!",
        cancelButtonText: "No, cancel!",
      });
      if (result.isConfirmed) {
        await axios.patch(`http://localhost:3000/produdcts/${id}`, {
          ...data,
        });
        navigate("/dashboard/products");
        toast.success("Product successfully  updated.");
      }
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

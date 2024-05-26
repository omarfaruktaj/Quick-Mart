import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Product from "./product";
import { FaArrowLeft } from "react-icons/fa";

interface Product {
  id: number;
  title: string;
  brand: string;
  price: number;
  description: string;
  image_url: string;
}

export default function PorductDetails() {
  const [product, setProdcut] = useState<Product | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`http://localhost:3000/produdcts/${id}`);
      setProdcut(data.data);
    };
    fetchData();
  }, [id]);

  console.log(product);

  return (
    <div className="h-screen mt-16 ">
      <button className="btn btn-ghost my-4" onClick={() => navigate(-1)}>
        <div className="flex items-center justify-center gap-2">
          <FaArrowLeft className="h-5 w-5" />
          <p className="text-xl"> Back</p>
        </div>
      </button>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className=" max-w-full max-h-96 w-full h-full"
            src={product?.image_url}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.title}</h2>
          <p className="font-bold">{product?.brand}</p>
          <p>{product?.description}</p>
          <p> ${product?.price}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

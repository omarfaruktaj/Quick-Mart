// src/components/ProductForm.tsx
import axios from "axios";
import React, { useEffect, useState } from "react";

interface ProductFormProps {
  productId?: number;
  onSubmit: (data: ProductFormData) => void;
}

interface ProductFormData {
  title: string;
  description: string;
  price: number;
  brand: string;
  image_url: string;
}

const ProductForm = ({ productId, onSubmit }: ProductFormProps) => {
  const [formData, setFormData] = useState<ProductFormData>({
    title: "",
    description: "",
    price: 0,
    brand: "",
    image_url: "",
  });

  useEffect(() => {
    if (productId) {
      axios(`http://localhost:3000/produdcts/${productId}`).then((data) =>
        setFormData({
          title: data.data.title,
          description: data.data.description,
          price: data.data.price,
          brand: data.data.brand,
          image_url: data.data.image_url,
        })
      );
    }
  }, [productId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const confirmed = confirm(
      `Are you sure? Do you want to ${
        productId ? "update" : "create"
      } this product?`
    );
    if (!confirmed) {
      return;
    }

    onSubmit(formData);
  };

  return (
    <div>
      <h1 className=" p-4 text-3xl font-bold ">
        {productId ? "Edit Product" : "Create A New Product"}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="p-4  rounded shadow-md max-w-lg "
      >
        <div className="form-control mb-4">
          <label className="label" htmlFor="title">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label" htmlFor="description">
            <span className="label-text">Description</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>
        <div className="form-control mb-4">
          <label className="label" htmlFor="price">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label" htmlFor="brand">
            <span className="label-text">Brand</span>
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label" htmlFor="image_url">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">
            {productId ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;

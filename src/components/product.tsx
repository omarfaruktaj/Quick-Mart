interface Product {
  id: number;
  title: string;
  brand: string;
  price: number;
  description: string;
  image_url: string;
}
export default function Product({ product }: { product: Product }) {
  const { brand, description, title, image_url, price } = product;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="product image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="font-bold">{brand}</h2>
        <p>{description}</p>
        <p>${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
}

export default function PromotionalBanner() {
  return (
    <div className=" bg-base-200 rounded-2xl  text-white py-8 md:p-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Limited Time Offer!
          </h2>
          <p className="text-lg">Get up to 50% off on selected items.</p>
        </div>
        <div>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

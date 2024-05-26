export default function Banner() {
  return (
    <div className=" bg-base-200 mt-4 rounded-xl text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Welcome to our{" "}
            <span className="text-indigo-600">E-Commerce Store</span>
          </h1>
          <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Shop the latest trends in fashion, electronics, home decor, and
            more!
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <button className="btn btn-primary">Shop Now</button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

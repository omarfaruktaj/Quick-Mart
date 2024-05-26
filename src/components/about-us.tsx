export default function About() {
  return (
    <div className="bg-base-200 p-8 mb-6 rounded-2xl">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          {/* About Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-gray-400 mb-4">
              About Us
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We are a passionate team dedicated to providing top-notch
              solutions for our clients. Our journey began in 2010, and since
              then, we have been on a mission to innovate and exceed
              expectations.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              With a focus on user experience and cutting-edge technology, we
              strive to deliver products and services that make a difference in
              people's lives. Our commitment to quality and excellence drives
              everything we do.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              At our core, we believe in collaboration, integrity, and
              continuous improvement. We work closely with our clients to
              understand their needs and tailor solutions that address their
              unique challenges. Together, we can achieve great things.
            </p>
          </div>
          {/* About Image */}
          <div className=" order-1 md:order-2 flex md:justify-end">
            <img
              src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg?t=st=1716745439~exp=1716749039~hmac=1f950a7801d5bf527581972a5f095fbd82525ae75359dd71a32a0351b374d80d&w=826"
              alt="About Us"
              className="rounded-lg shadow-lg md:h-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import { FormEvent } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Login() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-md w-full rounded-md shadow-md p-6 space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login
        </h2>
      </div>
      <form className="mt-8  space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full space-y-6">
          <div>
            <label className="text-gray-600" htmlFor="email">
              Email:{" "}
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter you email"
              className="input input-bordered bg-inherit w-full max-w-md"
            />
          </div>
          <div>
            <label className="text-gray-600" htmlFor="password">
              Password:{" "}
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter you password"
              className="input input-bordered bg-inherit w-full max-w-md"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
      <div className="h-0.5 w-full bg-black"></div>

      <div className="flex flex-col gap-3">
        <button className="btn btn-accent">
          {" "}
          <FcGoogle className="h-5 w-5" />
          Continue with google
        </button>
        <button className="btn btn-outline">
          <FaGithub className="h-5 w-5" />
          Continue with github
        </button>
      </div>

      <div className="">
        New here?
        <Link to="/register" className="text-primary">
          {" "}
          Login
        </Link>
      </div>
    </div>
  );
}

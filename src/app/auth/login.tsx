import { FormEvent, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import SocialLogin from "../../components/layout/social-login";
import toast from "react-hot-toast";

export default function Login() {
  const auth = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    await auth?.login(email, password);

    toast.success("Successfull login");
  };
  useEffect(() => {
    if (auth?.user) {
      navigate(from, { replace: true });
    }
  }, [auth?.user, from, navigate]);

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

      <SocialLogin />

      <div className="">
        New here?
        <Link to="/register" className="text-primary">
          {" "}
          Register
        </Link>
      </div>
    </div>
  );
}

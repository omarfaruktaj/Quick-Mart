import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/use-auth";

export default function SocialLogin() {
  const auth = useAuth();
  return (
    <div className="flex flex-col gap-3">
      <button onClick={auth?.googleLogin} className="btn btn-accent">
        {" "}
        <FcGoogle className="h-5 w-5" />
        Continue with google
      </button>
      <button onClick={auth?.githubLogin} className="btn btn-outline">
        <FaGithub className="h-5 w-5" />
        Continue with github
      </button>
    </div>
  );
}

import toast from "react-hot-toast";
import useAuth from "../../hooks/use-auth";

export default function Header() {
  const auth = useAuth();

  const handleLogout = () => {
    auth?.logout();
    toast.success("Successfully logout.");
  };
  return (
    <header className="border-b border-b-gray-700 shadow p-4">
      <div className="flex justify-end items-center">
        <h1 className="text-2xl font-bold"></h1>
        <button onClick={handleLogout} className="btn btn-error ">
          Logout
        </button>
      </div>
    </header>
  );
}

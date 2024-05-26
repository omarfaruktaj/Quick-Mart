import useAuth from "../../hooks/use-auth";

export default function Dashboard() {
  const auth = useAuth();
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 p-6">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={auth?.user?.profilePicture}
          alt={auth?.user?.name}
        />
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">{auth?.user?.name}</h2>
          <p className="text-gray-600">{auth?.user?.email}</p>
          <p className="text-gray-600">{}</p>
        </div>
      </div>
    </div>
  );
}

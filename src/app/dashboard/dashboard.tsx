import { FaUserCircle } from "react-icons/fa";
import useAuth from "../../hooks/use-auth";

export default function Dashboard() {
  const auth = useAuth();

  const userName = auth?.user?.displayName;
  const email = auth?.user?.email;
  const profilePicture = auth?.user?.photoURL;

  return (
    <div className=" m-8 h-screen ">
      <h2 className=" text-3xl pb-2 text-gray-200 font-bold">Profile</h2>
      <div className="max-w-md rounded overflow-hidden shadow-lg  p-6">
        {profilePicture ? (
          <img
            className="w-24 h-24 rounded-full mx-auto"
            src={profilePicture}
            alt={userName || "User profile image"}
          />
        ) : (
          <FaUserCircle className="h-8 w-8 mx-auto" />
        )}
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">
            {userName ? userName : "Unname User"}
          </h2>
          <p className="text-gray-600">Email: {email}</p>
          <p className="text-gray-600">{}</p>
        </div>
      </div>
    </div>
  );
}

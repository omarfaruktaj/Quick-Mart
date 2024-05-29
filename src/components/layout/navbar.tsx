import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";

interface Routes {
  path: string;
  label: string;
  isPrivate?: boolean;
}
export default function Navbar() {
  const auth = useAuth();

  const handleLogout = async () => {
    await auth?.logout();
    toast.success("Successfull logout.");
  };
  const routes: Routes[] = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "products",
      label: "Products",
    },
    {
      path: "about-us",
      label: "About",
    },
    {
      path: "blogs",
      label: "Blogs",
    },

    {
      path: "dashboard",
      label: "Dashboard",
      isPrivate: !auth?.user,
    },
  ];
  const profilePicture = auth?.user?.photoURL;

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {routes.map(
              ({ path, label, isPrivate }) =>
                !isPrivate && (
                  <li key={path}>
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isActive ? "bg-gray-800" : isPending ? "" : ""
                      }
                      to={path}
                    >
                      {label}
                    </NavLink>
                  </li>
                )
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          QUICK MART
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {routes.map(
            ({ path, label, isPrivate }) =>
              !isPrivate && (
                <li key={path}>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive ? "bg-gray-800" : isPending ? "" : ""
                    }
                    to={path}
                  >
                    {label}
                  </NavLink>
                </li>
              )
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {auth?.user ? (
          <div className="flex items-center justify-center gap-4">
            {profilePicture ? (
              <img
                className="w-24 h-24 rounded-full "
                src={profilePicture}
                alt={"User profile image"}
              />
            ) : (
              <FaUserCircle className="h-8 w-8 " />
            )}
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

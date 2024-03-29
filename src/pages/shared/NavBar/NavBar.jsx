import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  console.log("Showing user in home page", user);

  const [toogle, setToogle] = useState(false);
  const navItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-yellow-400 " : ""
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/menu"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active  text-yellow-400" : ""
        }
      >
        Our Menu
      </NavLink>

      <NavLink
        to="/shop"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active  text-yellow-400" : ""
        }
      >
        Our Shop
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active  text-yellow-400" : ""
        }
      >
        DashBoard
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active  text-yellow-400" : ""
        }
      >
        Contact Us
      </NavLink>
    </>
  );

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        console.log("signout successfully");
        // notification
        Swal.fire({
          position: "center",
          icon: "success",
          title: "LogOut Successfull ",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("there is an error", error);
      });
  };

  return (
    <div className="fixed z-10 w-full">
      <nav className="flex justify-around items-center py-4 bg-black/70  gap-4 relative">
        {/* logo */}
        <div>
          <a className="flex gap-2 items-center   ">
            <img src={logo} alt="" />{" "}
            <span className="text-white logo text-2xl">Captain Culinay</span>
          </a>
        </div>
        {/* nav item */}
        <div className="list-none capitalize text-base flex gap-5 text-white">
          {navItems}
        </div>
        {/* for responsive */}
        <div
          onClick={() => setToogle(!toogle)}
          className="cursor-pointer text-3xl hidden"
        >
          {toogle ? <IoMdClose /> : <FaBars />}
        </div>
        {/* cart  */}
        <div className="text-3xl text-white">
          <IoCartOutline />
        </div>
        {/* login user */}
        <div className="flex gap-3 items-center">
          {user && <p className="text-white">hey,{user.email}</p>}
          <FaUserCircle className="text-2xl text-white" />
          {user?.email ? (
            <NavLink
              onClick={handleLogout}
              className="text-sm px-5 py-2 bg-yellow-400 font-medium  "
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className="text-sm px-5 py-2 bg-yellow-400 font-medium  "
            >
              Login
            </NavLink>
          )}
        </div>
        {toogle && (
          <div className="absolute top-20 flex flex-col bg-slate-500 w-full gap-3 py-2">
            {navItems}
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;

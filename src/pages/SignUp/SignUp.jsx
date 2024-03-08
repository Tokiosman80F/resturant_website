import login from "../../assets/Login/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  console.log("show from ");
  
  // form function
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((userCredential) => {
        console.log("signing up", userCredential.user);

        // notification
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Signed Up ",
          showConfirmButton: false,
          timer: 1500,
        });

        // ----redirecting
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 2000);
      })
      .catch((error) => {
        console.log("Error Message", error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "The email is already used",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="flex justify-evenly items-center h-screen">
      <div className="">
        <img src={login} alt="" />
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-[536px] ">
          <p className="text-[40px] text-center">Sign Up</p>

          {/* ---- Name--- */}
          <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-gray-700 capitalize">
              Name
            </label>
            <input
              type="text"
              {...register("userName", { required: true, maxLength: 20 })}
              className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500  w-full p-4"
              placeholder="Enter your name"
            />
            {errors.userName && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          {/* ---- Photo Url--- */}
          {/* <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-gray-700 capitalize">
              Photo Url
            </label>
            <input
              type="url"
              {...register("mail", { required: true })}
              className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500  w-full p-4"
              placeholder="Enter your photo url"
            />
          </div>   */}
          {/* ----Email--- */}
          <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-gray-700 capitalize">
              email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500  w-full p-4"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          {/* -------Password-------- */}
          <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-gray-700 capitalize">
              Your password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "This input is required",
                pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
                minLength: 6,
              })}
              className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500  w-full p-4"
              placeholder="Enter your password"
            />
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">password at least be 6 characters</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                should have at least one digit,one lower case, one upper case &
                one special symbol
              </p>
            )}
          </div>

          <input
            value="Sign In"
            type="submit"
            className={`text-white bg-[#D1A054] hover:bg-[#e2a953]  font-medium text-xl w-full py-3 text-center cursor-pointer`}
          />
        </form>
        {/* --------create new account link--------- */}
        <div className="text-center my-5">
          <label className="  text-sm font-medium text-gray-900">
            <Link to="/login" className="text-[#D1A054] hover:underline">
              Already registered? Go to log in
            </Link>
          </label>
        </div>
        {/* other sign in option */}
        <div></div>
        {/* google btn */}
        <div></div>
      </div>
    </div>
  );
};

export default SignUp;

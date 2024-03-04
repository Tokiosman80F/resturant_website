import { useEffect, useRef, useState } from "react";
import login from "../../assets/Login/login.png";
import { TiTickOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  
  const [loginDisable, setLoginDisable] = useState(true);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  
  // --CAPTCHA--
  const capchaRef = useRef(null);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleCapchaValidate = () => {
    const value = capchaRef.current.value;
    if (validateCaptcha(value) === true) {
      toast.success("Captcha Matched");
      setLoginDisable(false);
    } else {
      toast.error("Captcha did not Matched");
    }
  };

  return (
    <div className="flex justify-evenly items-center h-screen">
      <div className="">
        <img src={login} alt="" />
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-[536px] ">
          <p className="text-[40px] text-center">Login</p>

          {/* ----Email--- */}
          <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-gray-700 capitalize">
              email
            </label>
            <input
              type="email"
              {...register("mail", { required: true })}
              className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500  w-full p-4"
              placeholder="Enter your email"
              
            />
          </div>
          {/* -------Password-------- */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-lg font-medium text-gray-700 capitalize"
            >
              Your password
            </label>
            <input
              type="password"
              {...register("password")}
              className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500  w-full p-4"
              required
              placeholder="Enter your password"
            />
          </div>
          {/* capcha and reload a capcha */}
          <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-gray-700 capitalize">
              capcha
            </label>
            <div className="flex items-center gap-4">
              <LoadCanvasTemplate />
            </div>
          </div>
          {/* -----type the capcha and validate ----- */}
          <div className="mb-5">
            <label className="block mb-2 text-lg font-medium text-gray-700 capitalize">
              confirm capcha
            </label>
            <div className="flex items-center gap-4">
              <input
                className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500  w-full p-4"
                placeholder="Write the capch here"
                ref={capchaRef}
                required
              />
              {/* tick btn */}
              <div
                onClick={handleCapchaValidate}
                className=" text-white p-3 rounded-full bg-[#D1A054] hover:bg-[#e2a953] cursor-pointer "
              >
                <TiTickOutline className="text-2xl " />
              </div>
            </div>
          </div>
          <input
            value="Sign In"
            disabled={loginDisable}
            type="submit"
            className={`text-white bg-[#D1A054] hover:bg-[#e2a953] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-xl w-full py-3 text-center ${
              loginDisable ? "cursor-not-allowed opacity-50" : ""
            }`}
          />
        </form>
        {/* --------create new account link--------- */}
        <div className="text-center my-5">
          <label className="  text-sm font-medium text-gray-900">
            <span> New Here ? </span>
            <Link to="/signup" className="text-[#D1A054] hover:underline">
              Create A New Account
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

export default Login;

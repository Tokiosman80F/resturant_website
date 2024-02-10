import login from "../../assets/Login/login.png";
const Login = () => {
  return (
    <div className="flex justify-evenly items-center h-screen">
      <div className="">
        <img src={login} alt="" />
      </div>
      <form className="w-[536px] ">
        <p className="text-[40px] text-center">Login</p>
        <div className="mb-5">
          <label className="block mb-2 text-lg font-medium text-gray-700 capitalize">
            email
          </label>
          <input
            type="email"
            id="email"
            className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500  w-full p-4"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-lg font-medium text-gray-700 capitalize"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500  w-full p-4"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-lg font-medium text-gray-700 capitalize"
          >
            Repeat password
          </label>
          <input
            type="password"
            id="repeat-password"
            className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500  w-full p-4"
            required
          />
        </div>

        

        <button
          type="submit"
          className="text-white bg-[#D1A054] hover:bg-[#e2a953] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-xl w-full  py-3 text-center"
        >
          Sign In
        </button>
        <div className="text-center my-5">
        <label
          className="  text-sm font-medium text-gray-900"
        >
          New Here ?  
          <a href="#" className="text-[#D1A054] hover:underline">
               Create A New Account
          </a>
        </label>
        </div>
      </form>
    </div>
  );
};

export default Login;

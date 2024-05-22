import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row md:h-screen">
      {/* INFORMATION PANEL */}
      <div className="md:w-1/2 w-full bg-pink-600 flex items-center justify-center p-4 md:p-10">
        <div className="text-white md:max-w-sm">
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-1">
            Welcome Back!
          </h2>
          <p className="text-xs md:text-sm lg:text-lg">
            Please enter your details to reconnect with us.
          </p>
        </div>
      </div>

      {/* LOGIN PANEL */}
      <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-2 md:p-10">
        {/* SSO LOGIN */}
        <div className="w-full border-slate-300">
          <div>
            <h1 className="text-center p-2 font-bold text-lg md:text-2xl text-slate-600">
              Login using SSO
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-2 p-2 md:px-6 md:pb-6">
            <button className="bg-red-500 text-white rounded hover:bg-red-600 w-full">
              Sign in with Google
            </button>
            <button className="bg-black text-white rounded hover:bg-gray-900 w-full">
              Sign in with Apple
            </button>
            <button className="bg-purple-500 text-white rounded hover:bg-purple-600 w-full">
              Sign in with Yahoo
            </button>
            <button className="bg-blue-700 text-white rounded hover:bg-blue-800 w-full">
              Sign in with Facebook
            </button>
          </div>
        </div>

        <div className="relative w-4/5 flex justify-center my-5 md:pb-5 md:my-0">
          <div className="w-full border-t-2 absolute top-3 md:top-4 bg-white"></div>
          <h1 className="text-center text-base md:text-lg italic text-slate-600 bg-white absolute px-5">
            OR
          </h1>
        </div>

        {/* EMAIL LOGIN */}
        <div className="w-full bg-white border-slate-300">
          <div>
            <h1 className="text-center font-bold text-lg md:text-2xl mt-5 text-slate-600">
              Create an account
            </h1>
          </div>

          <div className="px-5 pb-6">
            {/* NAME */}
            <div className="mb-2 w-full">
              <label
                htmlFor="name"
                className="font-bold text-sm md:text-base lg:text-lg"
              >
                Name or Company
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your Name or Company Name"
                className="mt-1 p-1 md:p-2 lg:p-3 w-full border border-gray-300 rounded text-sm md:text-base lg:text-lg"
              />
            </div>

            {/* EMAIL AND PHONE */}
            <div className="mb-2 w-full">
              <label
                htmlFor="email"
                className="font-bold text-sm md:text-base lg:text-lg"
              >
                Contact Information
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="mt-1 p-1 md:p-2 lg:p-3 w-full border border-gray-300 rounded text-sm md:text-base lg:text-lg"
              />

              <input
                id="phone"
                type="tel"
                placeholder="Phone number"
                className="mt-1 p-1 md:p-2 lg:p-3 w-full border border-gray-300 rounded text-sm md:text-base lg:text-lg"
              />
            </div>

            {/* PASSWORD */}
            <div className="mb-4 w-full">
              <label
                htmlFor="password"
                className="font-bold text-sm md:text-base lg:text-lg"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="mt-1 p-1 md:p-2 lg:p-3 w-full border border-gray-300 rounded text-sm md:text-base lg:text-lg"
              />
              <input
                type="password"
                placeholder="Re-Enter Password"
                className="mt-1 p-1 md:p-2 lg:p-3 w-full border border-gray-300 rounded text-sm md:text-base lg:text-lg"
              />
            </div>

            {/* SIGN UP BUTTON */}
            <div className="text-center mt-4">
              <button
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded w-1/2"
                onClick={() => navigate("/RegiLocation")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

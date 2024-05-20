// import React from "react";

// function Login() {
//   return (
//     <div className="flex flex-col md:flex-row h-screen">
//       {/* INFORMATION PANEL */}
//       <div className="md:w-1/2 w-full bg-pink-600 flex items-center justify-center">
//         <div className="text-white p-4 md:p-10">
//           <h2 className="text-3xl md:text-4xl mb-2">Welcome Back!</h2>
//           <p className="text-lg md:text-xl">
//             Please enter your details to reconnect with us.
//           </p>
//         </div>
//       </div>

//       {/* LOGIN PANEL */}
//       <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-gray-100 p-4 md:p-10">
//         {/* EMAIL LOGIN */}
//         <div className="w-full flex flex-col p-4 bg-white rounded-lg shadow-md">
//           {/* NAME */}
//           <div className="mb-3 w-full">
//             <label htmlFor="name" className="text-sm font-bold">
//               Name or Company
//             </label>
//             <input
//               id="name"
//               type="text"
//               placeholder="Enter your Name or Company Name"
//               className="mt-1 p-2 w-full border border-gray-300 rounded"
//             />
//           </div>

//           {/* EMAIL AND PHONE */}
//           <div className="mb-3 w-full">
//             <label htmlFor="email" className="text-sm font-bold">
//               Email Address
//             </label>
//             <input
//               id="email"
//               type="email"
//               placeholder="Email Address"
//               className="mt-1 p-2 w-full border border-gray-300 rounded"
//             />

//             <label htmlFor="phone" className="text-sm font-bold mt-2">
//               Phone Number
//             </label>
//             <input
//               id="phone"
//               type="tel"
//               placeholder="Phone number"
//               className="mt-1 p-2 w-full border border-gray-300 rounded"
//             />
//           </div>

//           {/* PASSWORD */}
//           <div className="mb-3 w-full">
//             <label htmlFor="password" className="text-sm font-bold">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               className="mt-1 p-2 w-full border border-gray-300 rounded"
//             />
//             <input
//               type="password"
//               placeholder="Re-Enter Password"
//               className="mt-1 p-2 w-full border border-gray-300 rounded"
//             />
//           </div>
//         </div>

//         {/* SSO LOGIN */}
//         <div className="w-full flex flex-col p-4 bg-white rounded-lg shadow-md mt-4">
//           <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
//             Sign in with Google
//           </button>
//           <button className="p-2 bg-black text-white rounded hover:bg-gray-900 mt-2">
//             Sign in with Apple
//           </button>
//           <button className="p-2 bg-purple-500 text-white rounded hover:bg-purple-600 mt-2">
//             Sign in with Yahoo
//           </button>
//           <button className="p-2 bg-blue-700 text-white rounded hover:bg-blue-800 mt-2">
//             Sign in with Facebook
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

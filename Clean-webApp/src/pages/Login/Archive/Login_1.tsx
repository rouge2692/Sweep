// // // function Login() {
// // //   return (
// // //     <div className="flex">
// // //       {/* INFORMATION PANEL */}
// // //       <div className="w-1/2 bg-pink-600"></div>
// // //       {/* LOGIN PANEL */}
// // //       <div className="flex flex-col items-center justify-center w-1/2">
// // //         {/* NAME */}
// // //         <div className="mb-3">
// // //           <h1>Name</h1>
// // //           <input placeholder="Enter your Name or Company Name" />
// // //         </div>
// // //         {/* CONTACT */}
// // //         <div className="mb-3">
// // //           <h1>Contact</h1>
// // //           <div className="flex">
// // //             <input
// // //               className="mr-3"
// // //               placeholder="Enter an email for the admin of the account"
// // //             />
// // //             <div className="flex">
// // //               <select>
// // //                 <option>COUNTRY</option>
// // //               </select>
// // //               <input placeholder="Enter a number, we will need to send you a code" />
// // //             </div>
// // //           </div>
// // //         </div>
// // //         {/* PASS */}
// // //         <div>
// // //           <h1>Password</h1>
// // //           <input placeholder="Use capitals, lowercase, numbers, and special characters" />
// // //           <input placeholder="Re-Enter Password" />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Login;

// // import React, { useState } from "react";

// // function Login() {
// //   const [openAcc, setOpenAcc] = useState(false);
// //   return (
// //     <div className="flex flex-col md:flex-row h-screen">
// //       {/* INFORMATION PANEL */}
// //       <div className="md:w-1/2 w-full bg-blue-600 flex items-center justify-center">
// //         <div className="text-white p-4 md:p-10">
// //           <h2 className="text-3xl md:text-4xl mb-2">Welcome Back!</h2>
// //           <p className="text-lg md:text-xl">
// //             Please enter your details to reconnect with us.
// //           </p>
// //         </div>
// //       </div>

// //       {/* LOGIN PANEL */}
// //       {/* EMAIL LOGIN */}
// //       <div className="flex justify-between items-center">
// //         <h1>Email Login</h1>
// //         <h1>+</h1>
// //       </div>
// //       {/* HIDDEN CONTENT FOR EMAIL LOGIN */}
// //       <div
// //         className={`${
// //           openAcc
// //             ? "translate duration-200 md:w-1/2 w-full flex flex-col items-center justify-center bg-white p-4 md:p-10"
// //             : "hidden"
// //         } `}
// //       >
// //         {/* NAME */}
// //         <div className="mb-6 w-full">
// //           <label
// //             htmlFor="name"
// //             className="block text-gray-700 text-sm md:text-base font-bold mb-2"
// //           >
// //             Name or Company
// //           </label>
// //           <input
// //             id="name"
// //             type="text"
// //             placeholder="Enter your Name or Company Name"
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //           />
// //         </div>

// //         {/* CONTACT */}
// //         <div className="mb-6 w-full">
// //           <label
// //             htmlFor="email"
// //             className="block text-gray-700 text-sm md:text-base font-bold mb-2"
// //           >
// //             Email Address
// //           </label>
// //           <input
// //             id="email"
// //             type="email"
// //             placeholder="Enter an email for the admin of the account"
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //           />

// //           <div className="flex mt-4">
// //             <select className="block appearance-none w-1/3 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
// //               <option>COUNTRY</option>
// //             </select>
// //             <input
// //               type="tel"
// //               placeholder="Phone number"
// //               className="flex-1 ml-3 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             />
// //           </div>
// //         </div>

// //         {/* PASSWORD */}
// //         <div className="mb-6 w-full">
// //           <label
// //             htmlFor="password"
// //             className="block text-gray-700 text-sm md:text-base font-bold mb-2"
// //           >
// //             Password
// //           </label>
// //           <input
// //             id="password"
// //             type="password"
// //             placeholder="Use capitals, lowercase, numbers, and special characters"
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
// //           />
// //           <input
// //             type="password"
// //             placeholder="Re-Enter Password"
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //           />
// //         </div>
// //       </div>
// //       {/* GOOGLE APPLE YAHOO FACEBOOK LOGIN */}
// //       <div className="flex justify-between items-center">
// //         <h1>SSO Login</h1>
// //         <h1>+</h1>
// //       </div>
// //       {/* HIDDEN CONTENT FOR EMAIL LOGIN */}
// //       <div
// //         className={`${
// //           openAcc
// //             ? "translate duration-200 md:w-1/2 w-full flex flex-col items-center justify-center bg-white p-4 md:p-10"
// //             : "hidden"
// //         } `}
// //       >
// //         {/* NAME */}
// //         <div className="mb-6 w-full">
// //           <label
// //             htmlFor="name"
// //             className="block text-gray-700 text-sm md:text-base font-bold mb-2"
// //           >
// //             Name or Company
// //           </label>
// //           <input
// //             id="name"
// //             type="text"
// //             placeholder="Enter your Name or Company Name"
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //           />
// //         </div>

// //         {/* CONTACT */}
// //         <div className="mb-6 w-full">
// //           <label
// //             htmlFor="email"
// //             className="block text-gray-700 text-sm md:text-base font-bold mb-2"
// //           >
// //             Email Address
// //           </label>
// //           <input
// //             id="email"
// //             type="email"
// //             placeholder="Enter an email for the admin of the account"
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //           />

// //           <div className="flex mt-4">
// //             <select className="block appearance-none w-1/3 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
// //               <option>COUNTRY</option>
// //             </select>
// //             <input
// //               type="tel"
// //               placeholder="Phone number"
// //               className="flex-1 ml-3 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             />
// //           </div>
// //         </div>

// //         {/* PASSWORD */}
// //         <div className="mb-6 w-full">
// //           <label
// //             htmlFor="password"
// //             className="block text-gray-700 text-sm md:text-base font-bold mb-2"
// //           >
// //             Password
// //           </label>
// //           <input
// //             id="password"
// //             type="password"
// //             placeholder="Use capitals, lowercase, numbers, and special characters"
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
// //           />
// //           <input
// //             type="password"
// //             placeholder="Re-Enter Password"
// //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;

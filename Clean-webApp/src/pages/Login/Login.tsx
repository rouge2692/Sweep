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

// // import React from "react";

// // function Login() {
// //   return (
// //     <div className="flex h-screen">
// //       {/* INFORMATION PANEL */}
// //       <div className="w-1/2 bg-blue-600 flex items-center justify-center">
// //         <div className="text-white p-10">
// //           <h2 className="text-4xl mb-2">Welcome Back!</h2>
// //           <p className="text-xl">
// //             Please enter your details to reconnect with us.
// //           </p>
// //         </div>
// //       </div>

// //       {/* LOGIN PANEL */}
// //       <div className="w-1/2 flex flex-col items-center justify-center bg-white p-10">
// //         {/* NAME */}
// //         <div className="mb-6 w-full">
// //           <label
// //             htmlFor="name"
// //             className="block text-gray-700 text-sm font-bold mb-2"
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
// //             className="block text-gray-700 text-sm font-bold mb-2"
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
// //             className="block text-gray-700 text-sm font-bold mb-2"
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

// import React, { useState } from "react";

// function Login() {
//   const [openEmailLogin, setOpenEmailLogin] = useState(false);
//   const [openSSOLogin, setOpenSSOLogin] = useState(false);

//   return (
//     <div className="flex flex-col md:flex-row h-screen">
//       {/* INFORMATION PANEL */}
//       <div className="md:w-1/2 w-full bg-blue-600 flex items-center justify-center">
//         <div className="text-white p-4 md:p-10">
//           <h2 className="text-3xl md:text-4xl mb-2">Welcome Back!</h2>
//           <p className="text-lg md:text-xl">
//             Please enter your details to reconnect with us.
//           </p>
//         </div>
//       </div>

//       {/* LOGIN PANEL */}
//       <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-white p-4 md:p-10">
//         {/* EMAIL LOGIN ACCORDION */}
//         <div className="w-full">
//           <button
//             onClick={() => setOpenEmailLogin(!openEmailLogin)}
//             className="w-full py-2 text-left text-white bg-gray-800 hover:bg-gray-700 font-semibold rounded-lg"
//           >
//             Email Login {openEmailLogin ? "-" : "+"}
//           </button>
//           {openEmailLogin && (
//             <div className="flex flex-col p-4 bg-gray-200 rounded-lg mt-2">
//               {/* NAME */}
//               <div className="mb-3 w-full">
//                 <label htmlFor="name" className="text-sm font-bold">
//                   Name or Company
//                 </label>
//                 <input
//                   id="name"
//                   type="text"
//                   placeholder="Enter your Name or Company Name"
//                   className="mt-1 p-2 w-full"
//                 />
//               </div>

//               {/* EMAIL AND PHONE */}
//               <div className="mb-3 w-full">
//                 <label htmlFor="email" className="text-sm font-bold">
//                   Email Address
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   placeholder="Email Address"
//                   className="mt-1 p-2 w-full"
//                 />

//                 <label htmlFor="phone" className="text-sm font-bold mt-2">
//                   Phone Number
//                 </label>
//                 <input
//                   id="phone"
//                   type="tel"
//                   placeholder="Phone number"
//                   className="mt-1 p-2 w-full"
//                 />
//               </div>

//               {/* PASSWORD */}
//               <div className="mb-3 w-full">
//                 <label htmlFor="password" className="text-sm font-bold">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   placeholder="Password"
//                   className="mt-1 p-2 w-full"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Re-Enter Password"
//                   className="mt-1 p-2 w-full"
//                 />
//               </div>
//             </div>
//           )}
//         </div>

//         {/* SSO LOGIN ACCORDION */}
//         <div className="w-full mt-4">
//           <button
//             onClick={() => setOpenSSOLogin(!openSSOLogin)}
//             className="w-full py-2 text-left text-white bg-gray-800 hover:bg-gray-700 font-semibold rounded-lg"
//           >
//             SSO Login {openSSOLogin ? "-" : "+"}
//           </button>
//           {openSSOLogin && (
//             <div className="flex flex-col p-4 bg-gray-200 rounded-lg mt-2">
//               <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//                 Sign in with Google
//               </button>
//               <button className="p-2 bg-black text-white rounded hover:bg-gray-900 mt-2">
//                 Sign in with Apple
//               </button>
//               <button className="p-2 bg-blue-300 text-white rounded hover:bg-blue-400 mt-2">
//                 Sign in with Yahoo
//               </button>
//               <button className="p-2 bg-blue-700 text-white rounded hover:bg-blue-800 mt-2">
//                 Sign in with Facebook
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";

function Login() {
  const [openEmailLogin, setOpenEmailLogin] = useState(false);
  const [openSSOLogin, setOpenSSOLogin] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* INFORMATION PANEL */}
      <div className="md:w-1/2 w-full bg-pink-600 flex items-center justify-center">
        <div className="text-white p-4 md:p-10">
          <h2 className="text-3xl md:text-4xl mb-2">Welcome Back!</h2>
          <p className="text-lg md:text-xl">
            Please enter your details to reconnect with us.
          </p>
        </div>
      </div>

      {/* LOGIN PANEL */}
      <div className="md:w-1/2 w-full flex flex-col items-center justify-center bg-gray-100 p-4 md:p-10">
        {/* EMAIL LOGIN ACCORDION */}
        <div className="w-full">
          <button
            onClick={() => setOpenEmailLogin(!openEmailLogin)}
            className="w-full py-2 text-left text-white bg-pink-700 hover:bg-pink-800 font-semibold rounded-lg"
          >
            Email Login {openEmailLogin ? "-" : "+"}
          </button>
          {openEmailLogin && (
            <div className="flex flex-col p-4 bg-white rounded-lg mt-2 shadow-md">
              {/* NAME */}
              <div className="mb-3 w-full">
                <label htmlFor="name" className="text-sm font-bold">
                  Name or Company
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your Name or Company Name"
                  className="mt-1 p-2 w-full border border-gray-300 rounded"
                />
              </div>

              {/* EMAIL AND PHONE */}
              <div className="mb-3 w-full">
                <label htmlFor="email" className="text-sm font-bold">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="mt-1 p-2 w-full border border-gray-300 rounded"
                />

                <label htmlFor="phone" className="text-sm font-bold mt-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                  className="mt-1 p-2 w-full border border-gray-300 rounded"
                />
              </div>

              {/* PASSWORD */}
              <div className="mb-3 w-full">
                <label htmlFor="password" className="text-sm font-bold">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="mt-1 p-2 w-full border border-gray-300 rounded"
                />
                <input
                  type="password"
                  placeholder="Re-Enter Password"
                  className="mt-1 p-2 w-full border border-gray-300 rounded"
                />
              </div>
            </div>
          )}
        </div>

        {/* SSO LOGIN ACCORDION */}
        <div className="w-full mt-4">
          <button
            onClick={() => setOpenSSOLogin(!openSSOLogin)}
            className="w-full py-2 text-left text-white bg-pink-700 hover:bg-pink-800 font-semibold rounded-lg"
          >
            SSO Login {openSSOLogin ? "-" : "+"}
          </button>
          {openSSOLogin && (
            <div className="flex flex-col p-4 bg-white rounded-lg mt-2 shadow-md">
              <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
                Sign in with Google
              </button>
              <button className="p-2 bg-black text-white rounded hover:bg-gray-900 mt-2">
                Sign in with Apple
              </button>
              <button className="p-2 bg-purple-500 text-white rounded hover:bg-purple-600 mt-2">
                Sign in with Yahoo
              </button>
              <button className="p-2 bg-blue-700 text-white rounded hover:bg-blue-800 mt-2">
                Sign in with Facebook
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;

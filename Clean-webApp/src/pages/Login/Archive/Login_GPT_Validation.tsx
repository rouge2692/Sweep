// import { useNavigate } from "react-router-dom";
// import { postProfcuen } from "../../connections/HandleCuenta";
// import { useState } from "react";

// function Login() {
//   const navigate = useNavigate();

//   const [busName, setBusName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [rePass, setRePass] = useState("");

//   const handleSignUp = () => {
//     postProfcuen({
//       SP00D1001: busName,
//       SP00D1002: email,
//       SP00D1004: phone,
//       SP00D1005: password,
//     }).then(() => navigate("/RegiLocation"));
//   };

//   return (
//     <div className="flex flex-col md:flex-row md:h-screen">
//       {/* INFORMATION PANEL */}
//       <div className="md:w-1/2 w-full bg-pink-600 flex items-center md:justify-center p-4 md:p-10">
//         <div className="text-white md:max-w-sm">
//           <h2 className="text-xl md:text-2xl lg:text-3xl mb-1">
//             Welcome Back!
//           </h2>
//           <p className="text-xs md:text-sm lg:text-lg">
//             Please enter your details to reconnect with us.
//           </p>
//         </div>
//       </div>

//       {/* LOGIN PANEL */}
//       <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-2 md:p-10">
//         {/* SSO LOGIN */}
//         <div className="w-full border-slate-300">
//           <div>
//             <h1 className="text-center p-2 font-bold text-lg md:text-2xl text-slate-600">
//               Login using SSO
//             </h1>
//           </div>
//           <div className="grid grid-cols-2 gap-2 p-2 md:px-6 md:pb-6">
//             <button className="bg-red-500 text-white rounded hover:bg-red-600 w-full">
//               Sign in with Google
//             </button>
//             <button className="bg-black text-white rounded hover:bg-gray-900 w-full">
//               Sign in with Apple
//             </button>
//             <button className="bg-purple-500 text-white rounded hover:bg-purple-600 w-full">
//               Sign in with Yahoo
//             </button>
//             <button className="bg-blue-700 text-white rounded hover:bg-blue-800 w-full">
//               Sign in with Facebook
//             </button>
//           </div>
//         </div>
//         {/* SSO LOGIN */}

//         <div className="relative w-4/5 flex justify-center my-5 md:pb-5 md:my-0">
//           <div className="w-full border-t-2 absolute top-3 md:top-4 bg-white"></div>
//           <h1 className="text-center text-base md:text-lg italic text-slate-600 bg-white absolute px-5">
//             OR
//           </h1>
//         </div>

//         {/* EMAIL LOGIN */}
//         <div className="w-full bg-white border-slate-300">
//           <div>
//             <h1 className="text-center font-bold text-lg md:text-2xl mb-3 mt-5 text-slate-600">
//               Create an account
//             </h1>
//           </div>

//           <div className="px-5 pb-6">
//             {/* NAME */}
//             <div className="mb-2 w-full">
//               <label
//                 htmlFor="busname"
//                 className="font-bold text-sm md:text-base lg:text-lg"
//               >
//                 Name or Company
//               </label>
//               <input
//                 value={busName}
//                 onChange={(e) => setBusName(e.target.value)}
//                 id="busname"
//                 type="text"
//                 placeholder="Enter your Name or Company Name"
//                 className="mt-1 p-2 lg:p-3 w-full border border-gray-300 rounded text-base lg:text-lg"
//               />
//             </div>
//             {/* NAME */}
//             {/* EMAIL AND PHONE */}
//             <div className="mb-2 w-full">
//               <label
//                 htmlFor="email"
//                 className="font-bold text-sm md:text-base lg:text-lg"
//               >
//                 Contact Information
//               </label>
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 id="email"
//                 type="email"
//                 placeholder="Email Address"
//                 className="mt-1 p-2 lg:p-3 w-full border border-gray-300 rounded text-base lg:text-lg"
//               />

//               <input
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 id="phone"
//                 type="tel"
//                 placeholder="Phone number"
//                 className="mt-1 p-2 lg:p-3 w-full border border-gray-300 rounded text-base lg:text-lg"
//               />
//             </div>
//             {/* EMAIL AND PHONE */}
//             {/* PASSWORD */}
//             <div className="mb-4 w-full">
//               <label
//                 htmlFor="password"
//                 className="font-bold text-sm md:text-base lg:text-lg"
//               >
//                 Password
//               </label>
//               <input
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 id="password"
//                 type="password"
//                 placeholder="Password"
//                 className="mt-1 p-2 lg:p-3 w-full border border-gray-300 rounded text-base lg:text-lg"
//               />
//               <input
//               id="repass"
//               value={rePass}
//               onChange={(e) => setRePass(e.target.value)}
//                 type="password"
//                 placeholder="Re-Enter Password"
//                 className="mt-1 p-2 lg:p-3 w-full border border-gray-300 rounded text-base lg:text-lg"
//               />
//             </div>
//             {/* PASSWORD */}
//             {/* SIGN UP BUTTON */}
//             <div className="text-center mt-4">
//               <button
//                 className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded w-1/2"
//                 onClick={handleSignUp}
//               >
//                 Sign Up
//               </button>
//             </div>
//             {/* SIGN UP BUTTON */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

/////GPT 1//////
// import { useNavigate } from "react-router-dom";
// import { postProfcuen } from "../../connections/HandleCuenta";
// import { useState } from "react";
// import classNames from "classnames"; // For conditional classNames

// function Login() {
//   const navigate = useNavigate();

//   const [busName, setBusName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [rePass, setRePass] = useState("");

//   const [errors, setErrors] = useState<{key: string: any}>({});
//   const [successes, setSuccesses] = useState<{key: string: any}>({});

//   const validateEmail = (email: string) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePhone = (phone: string) => {
//     const phoneRegex = /^\d{10}$/;
//     return phoneRegex.test(phone);
//   };

//   const validatePassword = (password: string) => {
//     const passwordRegex = /^(?=.*[A-Z]).{10,}$/;
//     return passwordRegex.test(password);
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     const newSuccesses = {};

//     if (!validateEmail(email)) {
//       newErrors.email = "Please enter a valid email address.";
//     } else {
//       newSuccesses.email = true;
//     }

//     if (!validatePhone(phone)) {
//       newErrors.phone = "Please enter a valid phone number with 10 digits.";
//     } else {
//       newSuccesses.phone = true;
//     }

//     if (!validatePassword(password)) {
//       newErrors.password =
//         "Password must be at least 10 characters long and contain at least one uppercase letter.";
//     } else {
//       newSuccesses.password = true;
//     }

//     if (password !== rePass) {
//       newErrors.rePass = "Passwords do not match.";
//     } else if (rePass !== "") {
//       newSuccesses.rePass = true;
//     }

//     setErrors(newErrors);
//     setSuccesses(newSuccesses);

//     return Object.keys(newErrors).length === 0; // Returns true if no errors
//   };

//   const handleSignUp = () => {
//     if (validateForm()) {
//       postProfcuen({
//         SP00D1001: busName,
//         SP00D1002: email,
//         SP00D1004: phone,
//         SP00D1005: password,
//       }).then(() => navigate("/RegiLocation"));
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row md:h-screen">
//       {/* INFORMATION PANEL */}
//       <div className="md:w-1/2 w-full bg-pink-600 flex items-center md:justify-center p-4 md:p-10">
//         <div className="text-white md:max-w-sm">
//           <h2 className="text-xl md:text-2xl lg:text-3xl mb-1">
//             Welcome Back!
//           </h2>
//           <p className="text-xs md:text-sm lg:text-lg">
//             Please enter your details to reconnect with us.
//           </p>
//         </div>
//       </div>

//       {/* LOGIN PANEL */}
//       <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-2 md:p-10">
//         <div className="w-full bg-white border-slate-300">
//           <div>
//             <h1 className="text-center font-bold text-lg md:text-2xl mb-3 mt-5 text-slate-600">
//               Create an account
//             </h1>
//           </div>

//           <div className="px-5 pb-6">
//             {/* NAME */}
//             <div className="mb-2 w-full">
//               <label
//                 htmlFor="busname"
//                 className="font-bold text-sm md:text-base lg:text-lg"
//               >
//                 Name or Company
//               </label>
//               <input
//                 value={busName}
//                 onChange={(e) => setBusName(e.target.value)}
//                 id="busname"
//                 type="text"
//                 placeholder="Enter your Name or Company Name"
//                 className="mt-1 p-2 lg:p-3 w-full border border-gray-300 rounded text-base lg:text-lg"
//               />
//             </div>
//             {/* NAME */}

//             {/* EMAIL */}
//             <div className="mb-2 w-full">
//               <label
//                 htmlFor="email"
//                 className="font-bold text-sm md:text-base lg:text-lg"
//               >
//                 Contact Information
//               </label>
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 id="email"
//                 type="email"
//                 placeholder="Email Address"
//                 className={classNames(
//                   "mt-1 p-2 lg:p-3 w-full border rounded text-base lg:text-lg",
//                   {
//                     "border-red-500": errors.email,
//                     "border-green-500": successes.email,
//                   }
//                 )}
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm">{errors.email}</p>
//               )}
//               {successes.email && (
//                 <p className="text-green-500 text-sm">Valid email</p>
//               )}
//             </div>
//             {/* EMAIL */}

//             {/* PHONE */}
//             <div className="mb-2 w-full">
//               <input
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 id="phone"
//                 type="tel"
//                 placeholder="Phone number"
//                 className={classNames(
//                   "mt-1 p-2 lg:p-3 w-full border rounded text-base lg:text-lg",
//                   {
//                     "border-red-500": errors.phone,
//                     "border-green-500": successes.phone,
//                   }
//                 )}
//               />
//               {errors.phone && (
//                 <p className="text-red-500 text-sm">{errors.phone}</p>
//               )}
//               {successes.phone && (
//                 <p className="text-green-500 text-sm">Valid phone number</p>
//               )}
//             </div>
//             {/* PHONE */}

//             {/* PASSWORD */}
//             <div className="mb-4 w-full">
//               <label
//                 htmlFor="password"
//                 className="font-bold text-sm md:text-base lg:text-lg"
//               >
//                 Password
//               </label>
//               <input
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 id="password"
//                 type="password"
//                 placeholder="Password"
//                 className={classNames(
//                   "mt-1 p-2 lg:p-3 w-full border rounded text-base lg:text-lg",
//                   {
//                     "border-red-500": errors.password,
//                     "border-green-500": successes.password,
//                   }
//                 )}
//               />
//               {errors.password && (
//                 <p className="text-red-500 text-sm">{errors.password}</p>
//               )}
//               {successes.password && (
//                 <p className="text-green-500 text-sm">Valid password</p>
//               )}

//               <input
//                 id="repass"
//                 value={rePass}
//                 onChange={(e) => setRePass(e.target.value)}
//                 type="password"
//                 placeholder="Re-Enter Password"
//                 className={classNames(
//                   "mt-1 p-2 lg:p-3 w-full border rounded text-base lg:text-lg",
//                   {
//                     "border-red-500": errors.rePass,
//                     "border-green-500": successes.rePass,
//                   }
//                 )}
//               />
//               {errors.rePass && (
//                 <p className="text-red-500 text-sm">{errors.rePass}</p>
//               )}
//               {successes.rePass && (
//                 <p className="text-green-500 text-sm">Passwords match</p>
//               )}
//             </div>
//             {/* PASSWORD */}

//             {/* SIGN UP BUTTON */}
//             <div className="text-center mt-4">
//               <button
//                 className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded w-1/2"
//                 onClick={handleSignUp}
//               >
//                 Sign Up
//               </button>
//             </div>
//             {/* SIGN UP BUTTON */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

/// GPT 2///

import { useNavigate } from "react-router-dom";
import { postProfcuen } from "../../connections/HandleCuenta";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [busName, setBusName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successes, setSuccesses] = useState<{ [key: string]: boolean }>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z]).{10,}$/;
    return passwordRegex.test(password);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const newSuccesses: { [key: string]: boolean } = {};

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    } else {
      newSuccesses.email = true;
    }

    if (!validatePhone(phone)) {
      newErrors.phone = "Please enter a valid phone number with 10 digits.";
    } else {
      newSuccesses.phone = true;
    }

    if (!validatePassword(password)) {
      newErrors.password =
        "Password must be at least 10 characters long and contain at least one uppercase letter.";
    } else {
      newSuccesses.password = true;
    }

    if (password !== rePass) {
      newErrors.rePass = "Passwords do not match.";
    } else if (rePass !== "") {
      newSuccesses.rePass = true;
    }

    setErrors(newErrors);
    setSuccesses(newSuccesses);

    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSignUp = () => {
    if (validateForm()) {
      postProfcuen({
        SP00D1001: busName,
        SP00D1002: email,
        SP00D1004: phone,
        SP00D1005: password,
      }).then(() => navigate("/RegiLocation"));
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:h-screen">
      {/* INFORMATION PANEL */}
      <div className="md:w-1/2 w-full bg-pink-600 flex items-center md:justify-center p-4 md:p-10">
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
        <div className="w-full bg-white border-slate-300">
          <div>
            <h1 className="text-center font-bold text-lg md:text-2xl mb-3 mt-5 text-slate-600">
              Create an account
            </h1>
          </div>

          <div className="px-5 pb-6">
            {/* NAME */}
            <div className="mb-2 w-full">
              <label
                htmlFor="busname"
                className="font-bold text-sm md:text-base lg:text-lg"
              >
                Name or Company
              </label>
              <input
                value={busName}
                onChange={(e) => setBusName(e.target.value)}
                id="busname"
                type="text"
                placeholder="Enter your Name or Company Name"
                className="mt-1 p-2 lg:p-3 w-full border border-gray-300 rounded text-base lg:text-lg"
              />
            </div>
            {/* NAME */}

            {/* EMAIL */}
            <div className="mb-2 w-full">
              <label
                htmlFor="email"
                className="font-bold text-sm md:text-base lg:text-lg"
              >
                Contact Information
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="Email Address"
                className={`mt-1 p-2 lg:p-3 w-full border rounded text-base lg:text-lg ${
                  errors.email
                    ? "border-red-500"
                    : successes.email
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
              {successes.email && (
                <p className="text-green-500 text-sm">Valid email</p>
              )}
            </div>
            {/* EMAIL */}

            {/* PHONE */}
            <div className="mb-2 w-full">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                id="phone"
                type="tel"
                placeholder="Phone number"
                className={`mt-1 p-2 lg:p-3 w-full border rounded text-base lg:text-lg ${
                  errors.phone
                    ? "border-red-500"
                    : successes.phone
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
              {successes.phone && (
                <p className="text-green-500 text-sm">Valid phone number</p>
              )}
            </div>
            {/* PHONE */}

            {/* PASSWORD */}
            <div className="mb-4 w-full">
              <label
                htmlFor="password"
                className="font-bold text-sm md:text-base lg:text-lg"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                placeholder="Password"
                className={`mt-1 p-2 lg:p-3 w-full border rounded text-base lg:text-lg ${
                  errors.password
                    ? "border-red-500"
                    : successes.password
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
              {successes.password && (
                <p className="text-green-500 text-sm">Valid password</p>
              )}

              <input
                id="repass"
                value={rePass}
                onChange={(e) => setRePass(e.target.value)}
                type="password"
                placeholder="Re-Enter Password"
                className={`mt-1 p-2 lg:p-3 w-full border rounded text-base lg:text-lg ${
                  errors.rePass
                    ? "border-red-500"
                    : successes.rePass
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              {errors.rePass && (
                <p className="text-red-500 text-sm">{errors.rePass}</p>
              )}
              {successes.rePass && (
                <p className="text-green-500 text-sm">Passwords match</p>
              )}
            </div>
            {/* PASSWORD */}

            {/* SIGN UP BUTTON */}
            <div className="text-center mt-4">
              <button
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded w-1/2"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
            {/* SIGN UP BUTTON */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

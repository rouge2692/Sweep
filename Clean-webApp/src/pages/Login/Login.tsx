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
    const phoneRegex = /^\(\d{3}\) \d{3} - \d{4}$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z]).{10,}$/;
    return passwordRegex.test(password);
  };

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedPhoneNumber);
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
      newErrors.phone =
        "Please enter a valid phone number in the format (xxx) xxx - xxxx.";
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
                onChange={handlePhoneChange}
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

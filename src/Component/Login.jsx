import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validate = () => {
    let tempErrors = {};
    if (!email) tempErrors.email = "Email is required";
    if (!password) {
      tempErrors.password = "Password is required";
    } else if (password.length < 6 || password.length > 8) {
      tempErrors.password = "Password must be between 6 to 8 characters";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/overview");
    if (validate()) {
      console.log("Form is valid");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 lg:p-8 lg:shadow-lg w-full max-w-[45rem]">
        <form onSubmit={handleSubmit} className="space-y-10">
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-[#434343]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 block w-full px-4 placeholder:text-[#434343] py-3 bg-white bg-opacity-20 text-[#434343] rounded border border-[#D3D3D3] focus:ring focus:ring-opacity-50"
              placeholder="Enter your email address "
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
          <div className="relative ">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-[#434343]"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 block w-full px-4 py-3 placeholder:text-[#434343] bg-white bg-opacity-20  border border-[#D3D3D3] text-[#434343] rounded focus:ring focus:ring-opacity-50"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password}</p>
            )}
            <div
              className="absolute inset-y-0 -top-8 right-0 pr-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <AiOutlineEyeInvisible className="text-[#434343] text-2xl" />
              ) : (
                <AiOutlineEye className="text-[#434343] text-2xl" />
              )}
            </div>
            <nav className="pt-7">
              <Link
                to="/reset"
                className="font-bold text-[#434343] cursor-pointer hover:underline"
              >
                Forget password?
              </Link>
            </nav>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full lg:w-2/5 py-4 transition ease-out duration-300 transform hover:bg-blue-700 hover:scale-105 text-lg bg-[#5B5AFB]  text-white font-bold rounded-md shadow-md"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

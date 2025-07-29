import React, { useState } from "react";
import login from "../../assets/sign_in_logo.png";
import { Link } from "react-router";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const axiosSecure = useAxiosSecure()
  const handleForm = async(e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {
      email,
      password
    }
  console.log(user);
  //save user db
  const res =await axiosSecure.post('/api/auth/login', user, { withCredentials: true });  
console.log(res);
  };
  return (
    <div>
      <div className=" md:flex justify-center p-4 ">
        <div className=" bg-[#040612] min-h-[800px] flex items-center justify-center relative">
          <span className=" absolute -top-10 -left-10 w-40 h-60 rounded-full bg-[#60E5AE]/40 blur-3xl" />
          <span className=" absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#60E5AE]/40 blur-3xl" />
          <figure className="p-6">
            <img src={login} alt="" className="" />
          </figure>
        </div>
        <div className="bg-[#dfe6e3a4]  min-h-[800px] flex flex-col justify-center p-6">
          <h1 className="font-semibold text-[40px] text-center">Login</h1>
          <p className="text-center mb-6 ">
            WelcomeBack,Please Enter your Details to Log In.
          </p>

          {/* form */}
          <form onSubmit={handleForm}>
            {/* email field */}
            <label htmlFor="Email" className="font-semibold ">
              Email Adders
            </label>
            <br />
            <input
              className="border w-full border-gray-200 rounded-md p-2 shadow-md mt-2 mb-7"
              name="email"
              type="email"
              required
              placeholder="r2547@gmail.com"
            />

            {/* password field */}
            <label htmlFor="Password" className="font-semibold">
              Password
            </label>
            <br />
            <div className="relative">
              <input
                className="border w-full border-gray-200 rounded-md p-2 shadow-md mt-2"
                name="password"
                type={showPassword ? "text" : "password"}
                defaultValue="63546142"
                required
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-4 right-4"
              >
                {showPassword ? (
                  <FaRegEyeSlash size={24} />
                ) : (
                  <IoEyeOutline size={24} />
                )}
              </div>
            </div>
            <div className="flex justify-between mt-7">
              <label className="label">
                <input type="checkbox" className="checkbox" required />
                Remember me
              </label>
              <p>Forget Password ?</p>
            </div>
            <button
              type="submit"
              className="bg-[#60E5AE] w-full rounded-md p-2 mt-12 mb-6 font-plus"
            >
              Login
            </button>
          </form>
          <div className="divider">OR</div>
          <p className=" font-plus text-center mt-10">
            Don't have an account?
            <Link className="hover:underline hover:text-blue-500" to="/signUp">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

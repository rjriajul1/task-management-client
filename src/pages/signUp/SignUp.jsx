import React, { useState } from "react";
import signUp from "../../assets/sign_up_logo.png";
import { Link } from "react-router";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
const SignUp = () => {
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)
    const [showPassword,setShowPassword] = useState(false)
    const handleForm = (e) => {
         e.preventDefault()
         const form = e.target;
         const formData = new FormData(form)
         const info = Object.fromEntries(formData.entries())
         const {password,confirmPassword} = info;
         if(password !== confirmPassword){
         return alert('must be same pass')
         }
         console.log(info);
    }
  return (
    <div>
      <div className=" md:flex justify-center p-4 ">
        <div className=" bg-[#040612] min-h-[800px] flex items-center justify-center">
          <figure className="p-6">
            <img src={signUp} alt="" className="" />
          </figure>
        </div>
        <div className="bg-[#ebf0ee6c]  min-h-[800px] flex flex-col justify-center p-6">
          <h1 className="font-semibold text-[40px] text-center">Sign Up</h1>
          <p className="text-center mb-6 ">
           To Create Account, Please Fill in the From Below.
          </p>

          {/* form */}
          <form onSubmit={handleForm}>
            {/* name field */}
            <label htmlFor="full name" className="font-semibold ">
              Full Name
            </label>
            <br />
            <input
              className="border w-full border-gray-200 rounded-md p-2 shadow-md mt-2 mb-7"
              name="name"
              type="text"
              required
              placeholder="Enter your full name"
            />

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
              type={showPassword ? 'text': 'password'}
              defaultValue="63546142"
              required
            />
            <div onClick={()=>setShowPassword(!showPassword)} className="absolute top-4 right-4">
                {showPassword ? <FaRegEyeSlash size={24} />: <IoEyeOutline size={24} /> } 
            </div>
            </div>
            {/* confirm Password */}
             <label htmlFor="Password" className="font-semibold">
              Password
            </label>
            <br />
            <div className="relative">
                <input
              className="border w-full border-gray-200 rounded-md p-2 shadow-md mt-2"
              name="confirmPassword"
              type={showConfirmPassword ? 'text': 'password'}
              defaultValue="63546142"
              required
            />
            <div onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className="absolute top-4 right-4">
                {showConfirmPassword ? <FaRegEyeSlash size={24} />: <IoEyeOutline size={24} /> } 
            </div>
            </div>

            <button type="submit" className="bg-[#60E5AE] w-full rounded-md p-2 mt-12 mb-6 font-plus">Login</button>
          </form>
           <div className="divider">OR</div>
           <p className=" font-plus text-center mt-10">Don't have an account?<Link className="hover:underline hover:text-blue-500" to="/signUp">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

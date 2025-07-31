import React, { use, useState } from "react";
import signUp from "../../assets/sign_up_logo.png";
import { Link, useNavigate } from "react-router";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

import Swal from "sweetalert2";
import successImg from "../../assets/success_img.png";
import { toast } from "react-toastify";
import imageUpload from "../../utils/imageUpload";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../context/AuthContext";
const SignUp = () => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { loadUser } = use(AuthContext);
  const [email, setEmail] = useState(null);

  const handleForm = async (e) => {
    setError("");
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.files[0];
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      return setError("Must be match this password");
    }

    const image = await imageUpload(photo);

    const user = {
      name,
      email,
      password,
      photo: image,
    };
    console.log(user);

    // //save user db
    try {
      const res = await axiosSecure.post("/api/auth/register", user, {
        withCredentials: true,
      });
      console.log(res);
      if (res.data.message) {
        Swal.fire({
          position: "top-center",
          title: "Registration successful! Welcome aboard",
          imageUrl: successImg,
          imageWidth: 300,
          imageHeight: 300,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/taskList");
        setLoading(false);
        localStorage.setItem("userEmail", email);
        await loadUser(email);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className=" md:flex justify-center p-4 ">
        <div className=" bg-[#040612] relative min-h-[800px] flex items-center justify-center">
          <span className=" absolute -top-10 -left-10 w-40 h-60 rounded-full bg-[#60E5AE]/40 blur-3xl" />
          <span className=" absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#60E5AE]/50 blur-3xl" />
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
            {/* photo */}
            <label htmlFor="photo" className="font-semibold ">
              Photo
            </label>
            <br />
            <input
              className="border w-full border-gray-200 rounded-md p-2 shadow-md mt-2 mb-7"
              name="photo"
              type="file"
              required
            />

            {/* email field */}
            <label htmlFor="Email" className="font-semibold ">
              Email Adders
            </label>
            <br />
            <input
              className="border w-full border-gray-200 rounded-md p-2 shadow-md mt-2 mb-7"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                className="border w-full mb-7 border-gray-200 rounded-md p-2 shadow-md mt-2"
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
            {/* confirm Password */}
            <label htmlFor="confirmPassword" className="font-semibold">
              Confirm Password
            </label>
            <br />
            <div className="relative">
              <input
                className="border w-full border-gray-200 rounded-md p-2 shadow-md mt-2"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                defaultValue="63546142"
                required
              />
              <p className="text-red-500 text-center mt-3">{error}</p>
              <div
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-4 right-4"
              >
                {showConfirmPassword ? (
                  <FaRegEyeSlash size={24} />
                ) : (
                  <IoEyeOutline size={24} />
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#60E5AE] w-full rounded-md p-2 mt-12 mb-6 font-plus"
            >
              {loading ? "loading....." : "SignUp"}
            </button>
          </form>
          <div className="divider">OR</div>
          <p className=" font-plus text-center mt-10">
            Already have an account?
            <Link className="hover:underline hover:text-blue-500" to="/login">
              log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

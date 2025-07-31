import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const axiosSecure = useAxiosSecure();


  const loadUser = async (email) => {
    try {
      const res = await axiosSecure.get(`/api/user/${email}`);
      setUser(res.data);
    } catch (err) {
      console.error("User load failed:", err.message);
    }
  };

    useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
      loadUser(savedEmail);
    }
  }, []);
  const data = {
    user,
    setUser,
    loadUser,
  };
  return <AuthContext value={data}>{children}</AuthContext>;
};

export default AuthProvider;

import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(user);
  const axiosSecure = useAxiosSecure();
  const [loading,setLoading] = useState(true)


  const loadUser = async (email) => {
    setLoading(true)
    try {
      const res = await axiosSecure.get(`/api/user/${email}`);
      setUser(res.data);
      
    } catch (err) {
      console.error("User load failed:", err.message);
    }finally{
        setLoading(false)
    }
  };

    useEffect(() => {
        setLoading(true)
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
      loadUser(savedEmail);
      
    }else{
        setLoading(false)
    }
  }, []);
  const data = {
    user,
    setUser,
    loadUser,
    loading
  };
  return <AuthContext value={data}>{children}</AuthContext>;
};

export default AuthProvider;

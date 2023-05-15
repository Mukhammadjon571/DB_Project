import React from "react";
const initialState = null;

const useAuth = () => {
  if (initialState) return initialState;
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  if (user && token) initialState = { user, token };
  return { user, token };
};

export default useAuth;

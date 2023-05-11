import React from "react";
import { useAuthStore } from "../store";

const useAuth = () => {
  const { isLogged } = useAuthStore();
  return <div>useAuth</div>;
};

export default useAuth;

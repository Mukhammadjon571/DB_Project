import React from "react";
import { loginImage } from "../../assets/images";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://192.168.29.220:9000");
    if (res.ok) {
      navigate("dashboard");
    } else {
      alert("Please chech again!");
    }
  };
  return (
    <div className="flex justify-stretch w-screen h-screen">
      <img
        src={loginImage}
        className="w-[40%] translate-x-[100px]"
        alt="login"
      />
      <div className="w-[60%] bg-white h-full grow rounded-tl-3xl rounded-bl-3xl flex justify-center items-center text-primary">
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center justify-center gap-20"
        >
          <div className="text-[100px]">Login</div>
          <div className="flex flex-col gap-10">
            <input
              type="text"
              placeholder="username"
              className="text-4xl border-b border-gray-dark focus:outline-none placeholder:text-primary"
            />
            <input
              type="text"
              placeholder="password"
              className="text-4xl border-b border-gray-dark focus:outline-none placeholder:text-primary"
            />
          </div>
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
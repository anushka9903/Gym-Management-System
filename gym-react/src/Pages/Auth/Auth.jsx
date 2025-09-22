import React, { useState } from "react";
import "./Auth.css";
import RegisterForm from "./RegisterForm";
import { Avatar } from "@mui/material";
import { orange } from "@mui/material/colors";
import LoginForm from "./LoginForm";

const Auth = () => {
  const [loginPage, setLoginPage] = useState(true);
  const handleChangePage = () => setLoginPage(!loginPage);

  return (
    <div className="authContainer h-screen w-full text-white">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 h-screen">
        <section className="flex justify-center items-center w-full lg:w-[50%]">
          <div className="w-[80%] lg:w-[50%] bg-gradient-to-b from-[#151515] to-[#080808] rounded-md p-8 py-10 flex flex-col items-center">
            <Avatar
              className="bg-orange-500"
              sx={{ width: "5rem", height: "5rem", bgcolor: "#cad5e2" }}
            >
              <i className="fas fa-running text-5xl text-orange-500"></i>
            </Avatar>
            {loginPage ? <LoginForm/> : <RegisterForm />}
            

            <div className="flex gap-5 items-center mt-10">
              <span>
                {loginPage ?  "Don't Have Account" : "Have Already Account"}?
              </span>
            
              <button onClick={handleChangePage} className="text-orange-500">
                {loginPage ?  "SIGNUP" : "LOGIN"}
              </button>
            </div>
          </div>
        </section>
        <section className="hidden lg:w-[50%]  lg:flex flex-col justify-center ">
          <div className="bg-black bg-opacity-10 p-10 rounded-md w-[75%] shadow-2xl shadow-white blur-background">
            <p className="text-center">
              <span className="font-semibold text-2xl text-orange-500">
                {" "}
                Fuel Your Fitness{" "}
              </span>
              <span className="block font-bold text-4xl">
                {" "}
                Discover Your <strong>Strength </strong> and Endurance Here
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Auth;

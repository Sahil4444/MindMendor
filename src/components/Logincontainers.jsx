import React from "react";
import "./css/logincontainer.css";

function Logincontainers() {
  return (
    <div className="bg-[#212121] text-white px-40 py-10">
      <p className="font-semibold text-3xl text-center mb-9">
        You can login or <span className="text-[#1479EA]">register</span> here
      </p>
      <div className="container my-3 flex justify-center gap-56 items-center text-center">
        <div className="login-container">
          <p className="login-heading text-2xl font-semibold mb-4">
            For <span className="text-[#1479EA]">User</span>
          </p>
          <div className="relative drop-shadow-xl w-48 h-60 overflow-hidden rounded-xl bg-[#212121]">
            <div className="absolute flex items-center justify-around py-5 flex-col gap-5 text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#212121]">
              <button className="authenticate-btn">Login</button>
              <button className="authenticate-btn">Register</button>
            </div>
            <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute w-56 h-48 bg-white blur-[50px] -right-1/2 -bottom-1/2"></div>
          </div>
        </div>

        <div className="login-container">
          <p className="login-heading text-2xl font-semibold mb-4">
            For <span className="text-[#1479EA]">Therapist</span>
          </p>
          <div className="relative drop-shadow-xl w-48 h-60 overflow-hidden rounded-xl bg-[#212121]">
            <div className="absolute flex items-center justify-around py-5 flex-col gap-5 text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#212121]">
              <button className="authenticate-btn">Login</button>
              <button className="authenticate-btn">Register</button>
            </div>
            <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            <div className="absolute w-56 h-48 bg-white blur-[50px] -right-1/2 -bottom-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logincontainers;

import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <section className="mb-20 mt-32">
        <div className="md:w-[55%] w-full p-10 mx-auto flex justify-center bg-hero bg-cover bg-center rounded-lg">
          <div className=" text-slate-500">
            <p className="mb-5 text-3xl">Account Log In</p>
            <div className="flex flex-col">
              <label htmlFor="">User Name :</label>
              <input
                className="py-3 px-20 rounded-lg border-none mb-6"
                type="text"
                placeholder="enter your username"
              />
              <label htmlFor="">Password :</label>
              <input
                className="py-3 px-20 w-150 rounded-lg border-none mb-6"
                type="password"
                placeholder="enter your password"
              />
            </div>
            <button className="py-2 px-5 bg-[#4b0082] rounded-lg text-white mb-6">
              Log In
            </button>{" "}
            <span className=" ml-14 underline font-bold text-[#4b0082]">
              <a href="/">Forget password?</a>
            </span>
            <p className="mb-1">Don't have an Account?</p>
            <p className="text-[#4b0082] text-xl underline font-bold">
              <span className=" cursor-pointer">
                <Link to="/join">Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignIn;

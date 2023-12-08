import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <section className=" mb-20 mt-32">
        <div className="md:w-[55%] w-full p-10 mx-auto flex justify-center bg-hero bg-cover bg-center rounded-lg shadow-lg hover:shadow-2xl">
          <div className=" text-slate-500">
            <p className="mb-5 text-3xl">Account Sign Up</p>
            <div className="flex flex-col">
              <label htmlFor="">Full Name :</label>
              <input
                className="py-3 px-20 rounded-lg border-none mb-6"
                type="text"
                placeholder="enter your full name"
              />
              <label htmlFor="">Email Address :</label>
              <input
                className="py-3 px-20 rounded-lg border-none mb-6"
                type="text"
                placeholder="enter your email address"
              />
              <label htmlFor="">Password :</label>
              <input
                className="py-3 px-20 w-150 rounded-lg border-none mb-6"
                type="password"
                placeholder="enter your password"
              />
              <label htmlFor="">Confirm Password :</label>
              <input
                className="py-3 px-20 w-150 rounded-lg border-none mb-6"
                type="password"
                placeholder="confirm password"
              />
            </div>
            <button className="py-2 px-5 bg-[#4b0082] rounded-lg text-white mb-6">
              Sign Up
            </button>{" "}
            <p className="mb-1">Have an Account?</p>
            <p className="text-[#4b0082] text-xl underline font-bold">
              <span className="cursor-pointer">
                <Link to='/signin'>Log In</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;

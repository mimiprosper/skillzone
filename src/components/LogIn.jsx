import React from "react";

const LogIn = () => {
  return (
    <section className=" mb-20">
      <div className="md:w-[55%] w-full p-10 mx-auto flex justify-center bg-hero bg-cover bg-center rounded-lg shadow-lg hover:shadow-2xl ">
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
            <a href="/">Sign Up</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogIn;

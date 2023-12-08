import React from "react";

const CreateAccount = () => {
  return (
    <section className=" mb-20">
      <div className="md:w-[55%] w-full p-10 mx-auto flex justify-items-center justify-center bg-hero bg-cover bg-center rounded-lg shadow-lg hover:shadow-2xl">
        <div className="text-slate-500">
          <p className="mb-5 text-3xl">Create an Account</p>
          <p className="mb-5">
            Already have an account?{" "}
            <a className="text-[#4b0082] text-xl underline font-bold" href="/">
              <span className="ml-4"> Sign In</span>
            </a>
          </p>
          <div>
            <button className="flex space-x-4 border-2 px-6 rounded-md border-[#4b0082] w-[330px] mb-5">
              <img src="" alt="google" />
              <span>Continue with Google</span>
            </button>
            <button className="flex space-x-4 border-2 px-6 rounded-md border-[#4b0082] w-[330px] mb-5">
              <img src="" alt="email" />
              <span>Continue with Email</span>
            </button>
            <button className="flex space-x-4 border-2 px-6 rounded-md border-[#4b0082] w-[330px] mb-5">
              <img src="" alt="facebook" />
              <span>Continue with facebook</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;

// import React from 'react'

import Button from "../components/Button";
import man from '../assets/services/man.png'

const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="w-full mx-auto flex lg:flex-row flex-col justify-center min-h-screen gap-10 overflow-x-hidden"
      >
        <div className="relative pl-10 lg:w-[50%] flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
          <h1 className="mt-14 font-palanquin xl:text-[100px] lg:text-8xl text-[80px] leading-[72px] font-bold">
            {/* First caption  */}
            <span className="md:bg-[#4b0082] md:whitespace-nowrap relative z-10 pr-5 pl-5 rounded-xl">
              <span className=" md:bg-pale-blue">Freelancers</span>{" "}
              <span className="md:text-white text-[#4b0082]">Zone</span>
            </span>
          </h1>
          <p className="font-montserrat text-slate-gray text-xl leading-8 mt-20 mb-14 sm:max-w-sm">
            Get the perfect freelancer for your dream project and have that
            dream come to life.
          </p>

          {/* search for freelancer  */}
          <div className=" w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full shadow-sm md:hover:shadow-2xl">
            <input
              type="text"
              placeholder="Get the service you want..."
              className="input"
            />
            <div className="flex max-sm:justify-end items-center max-sm:w-full">
              <Button label="Search" fullWidth="" />
            </div>
          </div>
        </div>

        <div className="relative flex-1  flex justify-center items-center xl:min-h-screen max-xl:py-30 bg-primary bg-hero bg-cover bg-center">
          <img
            src={man}
            alt="service"
            width={510}
            height={502}
            className="object-contain relative z-10 left-[68px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;

import React from "react";
import freelancer from "../assets/services/freelancer.jpeg";
// import customer from "../assets/services/customer2.svg";
import { customer2 } from "../assets/images";

const Profile = () => {
  return (
    <section className=" font-montserrat text-slate-500 mb-20">
      <div className="bg-white pt-5 rounded-lg shadow-2xl hover:shadow-3xl flex justify-center items-center flex-col text-center mb-16 h-[500px] md:w-[60%] w-full mx-auto bg-hero bg-cover bg-center">
        <img
          className="rounded-full"
          src={freelancer}
          width={150}
          alt="designer"
        />
        <p className="text-2xl">Sergio Ramos</p>
        <p>Experienced FullStack Web Developer, Youtuber and Teacher</p>
        <p>Based in Florida, USA</p>
        <p>2348023709157</p>
        <button className="bg-[#4b0082] text-white py-4 px-6 rounded-lg mt-10 mb-10">
          Contact Me
        </button>
      </div>
      <div className="md:w-[60%] mx-auto pl-10 pr-10">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima ea ex
          eveniet neque labore aliquid? Accusantium, debitis eaque a, ad
          mollitia, quas laborum eligendi ex obcaecati nulla ipsam nihil
          consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Minima ea ex eveniet neque labore aliquid? Accusantium, debitis eaque
          a, ad mollitia, quas laborum eligendi ex obcaecati nulla ipsam nihil
          consectetur.
        </p>
      </div>
      <div className="flex flex-wrap md:w-[50%] mx-auto pl-10 pr-10 space-x-5 space-y-1 mt-2 text-white">
        <span className=" bg-blue-500 py-1 px-6 rounded-2xl">React</span>
        <span className=" bg-blue-500 py-1 px-6 rounded-2xl">HTML</span>
        <span className=" bg-blue-500 py-1 px-6 rounded-2xl">CSS</span>
        <span className=" bg-blue-500 py-1 px-6 rounded-2xl">JS</span>
        <span className=" bg-blue-500 py-1 px-6 rounded-2xl">NodeJS</span>
        <span className=" bg-blue-500 py-1 px-6 rounded-2xl">ExpressJS</span>
        <span className=" bg-blue-500 py-1 px-6 rounded-2xl">FireBase</span>
        <span className=" bg-blue-500 py-1 px-6 rounded-2xl">REST API</span>
        <span className=" bg-blue-500 py-1 px-6 rounded-2xl">Git</span>
        <span className=" bg-blue-500 py-1 px-6 rounded-2xl">Django</span>
      </div>
      <div className="md:w-[60%] mx-auto pl-10 pr-10 pt-10">
        <textarea
          className="w-full h-[200px] border border-blue-500 outline-none rounded-lg p-2"
          placeholder="make your comments..."
        ></textarea>
        <button className="bg-[#4b0082] text-white py-4 px-6 rounded-lg mt-2 mb-10">
          Comments
        </button>
      </div>
      <div className="flex justify-items-center gap-x-2 md:w-[60%] mx-auto pl-10 pr-10 pt-10">
        <div>
          <img src={customer2} width={100} alt="" />
        </div>
        <div>
          <p className=" text-xl">Chioma Okoro</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            iusto omnis soluta, recusandae debitis saepe rem, sapiente
            aspernatur ea in exercitationem, repellat assumenda commodi sequi
            voluptates vitae necessitatibus architecto vel?
          </p>
        </div>
      </div>
      <div className="flex justify-items-center gap-x-2 md:w-[60%] mx-auto pl-10 pr-10 pt-10">
        <div>
          <img className=" rounded-full" src={freelancer} width={100} alt="" />
        </div>
        <div>
          <p className=" text-xl">Emeka Agunwa</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            iusto omnis soluta, recusandae debitis saepe rem, sapiente
            aspernatur ea in exercitationem, repellat assumenda commodi sequi
            voluptates vitae necessitatibus architecto vel?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;

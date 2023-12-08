import React from "react";
import freelancer from "../assets/services/freelancer.jpeg";
import projecta from "../assets/services/projectA.png";
// import projectb from '../assets/services/project-b.png'
import projectc from "../assets/services/project-c.png";

const MyAccount = () => {
  return (
    <section className=" mb-20 font-palanquin">
      <div className="lg:flex justify-betwee overflow-x-hidden space-x-8 pl-10 pr-10">
        {/* right side starts */}
        <div className="bg-white pt-5 rounded-lg shadow-2xl flex justify-center items-center flex-col text-center mb-10 h-[600px]">
          <button className="py-1 px-4 bg-yellow-500 text-white rounded-2xl mb-20 mt-10">
            Edit Profile
          </button>
          <img
            className="rounded-full mb-5"
            src={freelancer}
            width={150}
            alt="designer"
          />
          <p className=" text-2xl mb-5">Sergio Ramos</p>
          <p>Experienced FullStack Web Developer, Youtuber and Teacher</p>
          <p>Based in Florida, USA</p>
          <p>2348023709157</p>
          <button className="bg-[#4b0082] text-white py-4 px-6 rounded-lg mt-10 mb-10">
            Send Message
          </button>
        </div>
        {/* right side ends  */}

        {/* left side starts  */}
        <div className=" lg:w-full">
          <div>
            {/* about me start */}
            <div className=" mb-10 pl-3">
              <div className="flex justify-between mb-8">
                <span className=" text-2xl">About Me</span>
                <button className="bg-green-500 py-1 px-4 text-white rounded-2xl">
                  Add Me
                </button>
              </div>
              <div className=" bg-lime-100 p-10 rounded-lg mb-2">
                <div className="flex justify-between mb-1">
                  <span>Imma Rojo</span>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                  impedit unde sequi ipsa inventore aut tenetur corporis?
                  Perspiciatis doloremque, ullam aut numquam quisquam aspernatu.
                </p>
                <div className="mt-5 space-x-2">
                  <button className="py-1 px-4 bg-yellow-500 text-white rounded-2xl">
                    Edit
                  </button>
                  <button className="py-1 px-4 bg-red-500 text-white rounded-2xl">
                    Delete
                  </button>
                </div>
              </div>
            </div>
            {/* add skills  */}
            <div className=" flex justify-between mb-6 pl-3">
              <span className=" text-2xl">Skills</span>
              <button className="bg-green-500 py-1 px-4 text-white rounded-2xl">
                Add Skills
              </button>
            </div>

            <div className="  bg-lime-100 p-10 rounded-lg mb-2">
              <div className="flex justify-between mb-1">
                <span>JavaScript</span>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                impedit unde sequi ipsa inventore aut tenetur corporis?
                Perspiciatis doloremque, ullam aut numquam quisquam aspernatur
                ipsam tempora officia est! Autem, blanditiis.
              </p>
              <div className="mt-5 space-x-2">
                <button className="py-1 px-4 bg-yellow-500 text-white rounded-2xl">
                  Edit
                </button>
                <button className="py-1 px-4 bg-red-500 text-white rounded-2xl">
                  Delete
                </button>
              </div>
            </div>

            <div className="bg-lime-100 p-10 rounded-lg mb-2">
              <div className="flex justify-between mb-1">
                <span>React</span>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                impedit unde sequi ipsa inventore aut tenetur corporis?
                Perspiciatis doloremque, ullam aut numquam quisquam aspernatur
                ipsam tempora officia est! Autem, blanditiis.
              </p>
              <div className="mt-5 space-x-2">
                <button className="py-1 px-4 bg-yellow-500 text-white rounded-2xl">
                  Edit
                </button>
                <button className="py-1 px-4 bg-red-500 text-white rounded-2xl">
                  Delete
                </button>
              </div>
            </div>
          </div>
          {/* product start*/}
          <div className=" mt-10">
            <div className="flex justify-between mb-8">
              <span className=" text-2xl">Products</span>
              <button className="bg-green-500 py-1 px-4 text-white rounded-2xl">
                Add Product
              </button>
            </div>
            <div className=" bg-lime-100 p-10 rounded-lg mb-2">
              <div className="flex justify-between mb-1">
                <span>Portfolio Design</span>
              </div>
              <div className="flex gap-x-4 mb-5">
                <div>
                  <img src={projecta} width={650} height={250} alt="project" />
                </div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                  impedit unde sequi ipsa inventore aut tenetur corporis?
                  Perspiciatis doloremque, ullam aut numquam quisquam aspernatur
                  ipsam tempora officia est! Autem, blanditiis.
                </div>
              </div>
              <div className=" space-x-3">
                <button className="py-1 px-4 bg-yellow-500 text-white rounded-2xl">
                  Edit
                </button>
                <button className="py-1 px-4 bg-red-500 text-white rounded-2xl">
                  Delete
                </button>
              </div>
            </div>
            <div className="bg-lime-100 p-10 rounded-lg mb-2">
              <div className="flex justify-between mb-1">
                <span>UI/UX Design</span>
              </div>
              <div className="flex gap-x-4 mb-5">
                <div>
                  <img src={projectc} width={650} height={250} alt="project" />
                </div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                  impedit unde sequi ipsa inventore aut tenetur corporis?
                  Perspiciatis doloremque, ullam aut numquam quisquam aspernatur
                  ipsam tempora officia est! Autem, blanditiis.
                </div>
              </div>
              <div className=" space-x-3">
                <button className="py-1 px-4 bg-yellow-500 text-white rounded-2xl">
                  Edit
                </button>
                <button className="py-1 px-4 bg-red-500 text-white rounded-2xl">
                  Delete
                </button>
              </div>
            </div>
            <div className="bg-lime-100 p-10 rounded-lg mb-2">
              <div className="flex justify-between mb-1">
                <span>BlockChain API</span>
              </div>
              <div className="flex gap-x-4 mb-5">
                <div>
                  <img src={projecta} width={650} height={250} alt="project" />
                </div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                  impedit unde sequi ipsa inventore aut tenetur corporis?
                  Perspiciatis doloremque, ullam aut numquam quisquam aspernatur
                  ipsam tempora officia est! Autem, blanditiis.
                </div>
              </div>
              <div className=" space-x-3">
                <button className="py-1 px-4 bg-yellow-500 text-white rounded-2xl">
                  Edit
                </button>
                <button className="py-1 px-4 bg-red-500 text-white rounded-2xl">
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* product ends  */}
        </div>
        {/* left side ends  */}
      </div>
    </section>
  );
};

export default MyAccount;

import { useState } from "react";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
// import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  // const navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-0 bg-[#4b0082] w-full z-50 py-5 shadow-lg">
        <div className=" flex items-center justify-around text-white">
          <div className="text-3xl bg-white text-[#4b0082] rounded-md px-3 font-montserrat ">
            <a href="/">SkillZone</a>
          </div>

          {/* nav links */}

          <ul className="xl:flex hidden text-lg font-montserrat space-x-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}

            {/* <li>
              <Link to="/">Home</Link>
            </li>
            <li
              className=" cursor-pointer"
              // onClick={() => navigate("about-us")}
            >
              <Link to='about'>About Us</Link>
            </li>
            <li
              className=" cursor-pointer"
              onClick={() => navigate("services")}
            >
              Freelancer Service
            </li> */}
          </ul>

          {/* nav buttons */}
          <div className="xl:flex hidden space-x-9 font-montserrat">
            <span
              // onClick={() => navigate("signin")}
              className=" cursor-pointer border-2 p-2 rounded-md"
            >
              Sign In
            </span>
            <span
              // onClick={() => navigate("join")}
              className=" cursor-pointer border-2 py-2 px-4 rounded-md"
            >
              Join
            </span>
          </div>

          {/* hamburger icon */}
          <div
            className="xl:hidden cursor-pointer duration-1000"
            onClick={() => setOpen(!open)}
          >
            <img src={hamburger} alt="icon" width={28} />
          </div>
        </div>

        {/* mobile view */}
        <div>
          <ul
            className={`
        xl:hidden bg-white bg-hero bg-cover bg-center fixed w-full top-0  bottom-0 py-24 pl-4
        duration-1000 ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            <div className="flex justify-evenly items-center mt-[-85px] mb-20">
              <div className=" text-center font-montserrat text-3xl bg-[#4b0082] text-white w-[30%] mx-aut rounded-md">
                SkillZone
              </div>
              <div
                className="text-xl text-white bg-[#4b0082] px-3 rounded-lg cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                X
              </div>
            </div>
            <div className=" ml-6">
              {navLinks.map((link) => (
                <li
                  className="mt-9"
                  key={link.href}
                  onClick={() => setOpen(!open)}
                >
                  <a
                    className="text-[#4b0082] text-2xl font-bold font-palanquin"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </div>
            <div className="py-10 space-x-2 ml-6">
              <span className=" cursor-pointer border-2 p-2 bg-[#4b0082] text-white rounded-md font-montserrat">
                Sign In
              </span>
              <span className="border-2 py-2 px-4 bg-[#4b0082] text-white rounded-md font-montserrat">
                Join
              </span>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;

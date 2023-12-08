import React from "react";


const AboutUs = () => {
  return (
    <>
      <section id="about-us" className="pt-20 pb-20 bg-green-50 font-montserrat text-slate-gray text-xl leading-8">
        <div className="w-[90%] mx-auto space-y-4">
          <p>
            <h2 className="text-4xl font-palanquin font-bold">
              <span className="text-[#4b0082]">Who We are </span>
            </h2>
          </p>
          <p>
            We are about
            <span className="text-[#4b0082] font-bold">
              {" "}
              Technology, Opportunity, and People.{" "}
            </span>
            We are the product of Imo State Government vision to make the state
            the silicon valley of Africa. We are passionate about using
            technology to create a better future for everyone. We believe that
            technology has the power to solve some of the world's most pressing
            problems, and we are committed to using our expertise to make a
            positive impact.
          </p>

          <p>
            Our Values are constantly pushing the boundaries of what is possible
            with technology. We believe that the best ideas come from working
            together. We are committed to making a positive difference in the
            world.
          </p>
          <p>
            Our product,{" "}
            <span className="text-[#4b0082] font-bold">SkillZone</span> is a
            talent market-zone where businesses and freelancers can connect and
            collaborate on projects.
          </p>
        </div>
      </section>
     
    </>
  );
};

export default AboutUs;

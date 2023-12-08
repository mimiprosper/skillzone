
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer id="#contact-us" className=" pt-20 pr-10 pl-10 pb-5 bg-black">
      <div className=" flex justify-center items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <p>
            <a
              className="text-white-400 font-montserrat text-3xl leading-normal font-medium"
              href="/#"
            >
              SkillZone
            </a>
          </p>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get the talents, get the resources, get team you need and watch your
            dream come to life.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12  bg-white-400 rounded-full"
                key={icon.alt}
              >
                <img
                  className="hover:text-slate-400 cursor-pointer"
                  src={icon.src}
                  alt="social media icon"
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap text-white-400">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className=" font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li className="mt-3" key={link}>
                    <a href="/#" className="hover:text-slate-400">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-8">
        <p className="text-white-400 text-center rounded-md">Copy Right 2023, SkillZone</p>
      </div>
    </footer>
  );
};

export default Footer;

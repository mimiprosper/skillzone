import camera from "../assets/services/camera.png";
import business from "../assets/services/business.png";
import coding from "../assets/services/coding.png";
import data from "../assets/services/data.png";
import design from "../assets/services/design.png";
import digMkt from "../assets/services/digital-marketing.png";
import lifeStyle from "../assets/services/lifestyle.png";
import writing from "../assets/services/writing.png";
import video from "../assets/services/video.png";
import music from "../assets/services/music.png";
import PM from "../assets/services/PM.png";
import phone from "../assets/services/phone.png";
import ai from "../assets/services/AI.png";
import blockchain from "../assets/services/blockchain.png";
import cctv from "../assets/services/cctv.png";
import PopularProductsCard from "../components/PopularProductsCard";


const PopularProducts = () => {
  return (
    <>
      <section id="products" className=" bg-yellow-50 p-20">
        <div className="flex flex-col justify-start gap-5 ">
          <h2 className="text-4xl font-palanquin font-bold">
            Our <span className="text-[#4b0082]"> Popular </span> Services
          </h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray text-xl leading-8">
            Experience top-notch quality work with our sought-after Freelancers.
            Get value for your time and money.
          </p>
        </div>
        <div className="items-center justify-items-center grid md:grid-cols-5 grid-cols-2 mx-auto gap-20 mt-10">
          <PopularProductsCard imgURL={camera} text="Photography" />
          <PopularProductsCard imgURL={business} text="Business" />
          <PopularProductsCard imgURL={coding} text="Software & Tech." />
          <PopularProductsCard imgURL={design} text="Designer" />
          <PopularProductsCard imgURL={digMkt} text="Digital Marketing" />
          <PopularProductsCard imgURL={lifeStyle} text="Life Style" />
          <PopularProductsCard imgURL={writing} text="Content Creator" />
          <PopularProductsCard imgURL={video} text="Video Editing" />
          <PopularProductsCard imgURL={music} text="Music" />
          <PopularProductsCard imgURL={blockchain} text="BlockChain" />
          <PopularProductsCard imgURL={cctv} text="CCTV" />
          <PopularProductsCard imgURL={phone} text="Phone Repair" />
          <PopularProductsCard imgURL={ai} text="AI" />
          <PopularProductsCard imgURL={PM} text="PM" />
          <PopularProductsCard imgURL={data} text="Data" />
        </div>
      </section>
    
    </>
  );
};

export default PopularProducts;

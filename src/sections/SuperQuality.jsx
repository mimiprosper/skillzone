import handyman from '../assets/services/handyman.jpg'
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
     
      className="flex justify-between items-center max-lg:flex-col gap-10 bg-cyan-50  mx-auto mb-20 p-20"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We also Provide You
          <span className="text-[#4b0082]"> Super </span>
          <span className="text-[#4b0082]">Quality </span> Professionals
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Apart from the gig services, We also have a large pool of artisans,
          craftmen, bakers, phone engineers, cctv technicians and lots of handymen. We have a team of professionals with many years of experience in the skill workforce.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="Explore now" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={handyman}
          alt="handyman"
          width={600}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;

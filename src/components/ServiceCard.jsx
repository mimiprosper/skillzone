const ServiceCard = ({ imgURL, label, subtext, short }) => {
  return (
    <div className="flex-1 w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-[#4b0082] rounded-full md:flex-col-reverse">
        <img
          src={imgURL}
          alt={label}
          width={24}
          height={24}
          className="w-20 h-20 object-contain"
        />
      </div>
      <div className="mt-1 text-slate-gray italic">{short}</div>

      <h3 className="mt-3 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className=" mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;

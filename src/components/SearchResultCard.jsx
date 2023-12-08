import React from "react";

const SearchResultCard = ({ img, title, name, votes }) => {
  return (
    <div className=" font-palanquin shadow-lg hover:shadow-2xl p-5 rounded-lg cursor-pointer">
      <img className=" mb-6" src={img} width={240} alt="" />
      <h3 className=" text-2xl">{title}</h3>
      <p className=" italic">{name}</p>
      <p className=" mb-4">Positive Feedback ({votes})</p>
      <div className="flex flex-wrap space-y-1 space-x-1 lg:w-[25px] w-[40px]">
        <span className="text-white bg-blue-500 py-0 px-4 rounded-2xl">
          React
        </span>
        <span className="text-white bg-blue-500 py-0 px-4 rounded-2xl">
          HTML
        </span>
        <span className="text-white bg-blue-500 py-0 px-4 rounded-2xl">JS</span>
      </div>
    </div>
  );
};

export default SearchResultCard;

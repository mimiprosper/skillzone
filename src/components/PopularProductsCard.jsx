import React from 'react'

const PopularProductsCard = ({imgURL, text}) => {
  return (
    <div>
      <div className=" w-40 shadow-lg hover:shadow-2xl cursor-pointer rounded-md ">
        <img src={imgURL} alt='business' width={150} />
        <h1 className="text-[#4b0082] text-center font-montserrat font-bold">
          {text}
        </h1>
      </div>
    </div>
  );
}

export default PopularProductsCard
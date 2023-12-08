import React from "react";
import SearchResultCard from "../components/SearchResultCard";
import card from "../assets/services/projectA.png";
// import PaginationCard from "../components/PaginationCard";

const SearchResults = () => {
  return (
    <section className=" mb-20">
      <div className=" bg-fuchsia-100 grid lg:grid-cols-4 grid-cols-2 mb-2 p-10 justify-items-center lg:gap-8 gap-10">
        <div>
          <SearchResultCard
            img={card}
            title="Website Designer"
            name="Samuel Ajayi"
            votes={45}
            skill="React"
          />
        </div>
        <div>
          <SearchResultCard
            img={card}
            title="Website Designer"
            name="Samuel Ajayi"
            votes={45}
            skill="React"
          />
        </div>
        <div>
          <SearchResultCard
            img={card}
            title="Website Designer"
            name="Samuel Ajayi"
            votes={45}
            skill="React"
          />
        </div>
        <div>
          <SearchResultCard
            img={card}
            title="Website Designer"
            name="Samuel Ajayi"
            votes={45}
            skill="React"
          />
        </div>
        <div>
          <SearchResultCard
            img={card}
            title="Website Designer"
            name="Samuel Ajayi"
            votes={45}
            skill="React"
          />
        </div>
        <div>
          <SearchResultCard
            img={card}
            title="Website Designer"
            name="Samuel Ajayi"
            votes={45}
            skill="React"
          />
        </div>
        <div>
          <SearchResultCard
            img={card}
            title="Website Designer"
            name="Samuel Ajayi"
            votes={45}
            skill="React"
          />
        </div>
        <div>
          <SearchResultCard
            img={card}
            title="Website Designer"
            name="Samuel Ajayi"
            votes={45}
            skill="React"
          />
        </div>
      </div>
      <div className=" mt-1 m-5 w-[40%] mx-auto flex justify-between">
        <h1 className=" bg-gray-400 text-white px-5 py-3 rounded-lg">Pre </h1>
        <h1 className=" bg-gray-700 text-white px-5 py-3 rounded-lg">1 </h1>
        <h1 className=" bg-gray-400 text-white px-5 py-3 rounded-lg">2 </h1>
        <h1 className=" bg-gray-400 text-white px-5 py-3 rounded-lg">3 </h1>
        <h1 className=" bg-gray-400 text-white px-5 py-3 rounded-lg" >4 </h1>
        <h1 className=" bg-gray-400 text-white px-5 py-3 rounded-lg">5 </h1>
        <h1 className="bg-gray-400 text-white px-5 py-3 rounded-lg">Next </h1>
      </div>
    </section>
  );
};

export default SearchResults;

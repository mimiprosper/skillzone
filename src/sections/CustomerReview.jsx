import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReview = () => {
  return (
    <section className="max-container bg-pale-blue pt-10 pb-10 mb-16">
      <h3 className=" font-palanquin text-center text-4xl font-bold">
        What Our
        <span className=" text-[#4b0082]"> Customers </span>
        Say?
      </h3>
      <p className=" info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={reviews.length} {...review} />
        ))}
      </div>
    </section>
  );
}

export default CustomerReview
import React from "react";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import PopularProducts from "./PopularProducts";
import SuperQuality from "./SuperQuality";
import Services from "./Services";
import CustomerReview from "./CustomerReview";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <AboutUs />
        <PopularProducts />
        <SuperQuality />
        <Services />
        <CustomerReview />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Home;

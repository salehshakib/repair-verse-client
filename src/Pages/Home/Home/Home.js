import React from "react";
import Hero from "../Hero/Hero";
import OurServices from "../OurServices/OurServices";
import Reviews from "../Reviews/Reviews";
import JoinUs from "../JoinUs/JoinUs";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <WhyUs></WhyUs>
      <OurServices></OurServices>
      <JoinUs></JoinUs>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;

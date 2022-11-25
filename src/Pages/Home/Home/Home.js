import React from "react";
import Hero from "../Hero/Hero";
import OurServices from "../OurServices/OurServices";
import Reviews from "../Reviews/Reviews";
import Pricing from "..//Pricing/Pricing";
import JoinUs from "../JoinUs/JoinUs";
import Suggestion from "../Suggestion/Suggestion";
import Faq from "../Faq/Faq";
import WhyUs from "../WhyUs/WhyUs";
// import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      {/* <Banner></Banner> */}
      <WhyUs></WhyUs>
      <OurServices></OurServices>
      <JoinUs></JoinUs>
      <Reviews></Reviews>
      {/* <Pricing></Pricing> */}

      {/* <Suggestion></Suggestion>
      <Faq></Faq> */}
    </div>
  );
};

export default Home;

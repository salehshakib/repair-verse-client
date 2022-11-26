import React from "react";
import ServiceItem from "../Home/OurServices/ServiceItem";

const Services = () => {
  return (
    <div className="bg-base-200 pt-20">
      <section className="text-5xl py-20 max-w-screen-xl mx-auto">
        <div className="w-5/6 mx-auto">
          <p className="text-3xl font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
            Our Services
          </p>
          <div className="flex mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-[#2564eb] rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-[#2564eb] rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-[#07b4d5] rounded-full"></span>
          </div>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-3 my-10">
            <ServiceItem></ServiceItem>
            <ServiceItem></ServiceItem>
            <ServiceItem></ServiceItem>
            <ServiceItem></ServiceItem>
            <ServiceItem></ServiceItem>
            <ServiceItem></ServiceItem>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

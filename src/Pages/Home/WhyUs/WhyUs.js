import React from "react";
import satisfaction from "./../../../assets/images/whyus/handshake.png";
import availability from "./../../../assets/images/whyus/availability.png";
import payment from "./../../../assets/images/whyus/cash-payment.png";
import highquality from "./../../../assets/images/whyus/high-quality.png";

const WhyUs = () => {
  return (
    <section className="text-5xl bg-white py-20 max-w-screen-xl mx-auto">
      <div className="w-5/6 mx-auto">
        <p className="text-3xl font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
          Why Choose Repair Verse
        </p>
        <div className="flex mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-[#2564eb] rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-[#2564eb] rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-[#07b4d5] rounded-full"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 my-10">
          <div className="flex flex-col justify-center w-5/6 mx-auto">
            <img src={satisfaction} alt=".." className="mx-auto" />

            <p className="text-2xl font-semibold py-5">
              Satisfaction Guaranteed
            </p>
            <p className="text-base">
              We offer services that can satisfy all your home repair needs.
            </p>
          </div>
          <div className="flex flex-col justify-center w-5/6 mx-auto">
            <img src={availability} alt=".." className="mx-auto" />
            <p className="text-2xl font-semibold py-5">24/7 Services</p>
            <p className="text-base">
              We offer 24/7 all time service. You can call us any time.
            </p>
          </div>

          <div className="flex flex-col justify-center w-5/6 mx-auto">
            <img src={payment} alt=".." className="mx-auto" />
            <p className="text-2xl font-semibold py-5">Easy Payments</p>
            <p className="text-base">
              No Hassle in payment. Pay with cash, credit, bkash, nagad.
            </p>
          </div>
          <div className="flex flex-col justify-center w-5/6 mx-auto">
            <img src={highquality} alt=".." className="mx-auto" />
            <p className="text-2xl font-semibold py-5">High Quality Work</p>
            <p className="text-base">
              We offer high quality work on a proffesional level. No damage will
              be done to your precious home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

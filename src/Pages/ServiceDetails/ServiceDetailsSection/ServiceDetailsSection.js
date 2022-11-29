import React from "react";

const ServiceDetailsSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#2564eb] to-[#07b4d5] pt-20 ">
      <section className="text-5xl pt-20 max-w-screen-xl mx-auto">
        <div className="w-5/6 mx-auto">
          <p className="text-3xl font-semibold text-white capitalize xl:text-5xl lg:text-4xl dark:text-white">
            Service Details
          </p>
          <div className="flex mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-base-200 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-base-300 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-base-300 rounded-full"></span>
          </div>

          <div className="grid md:grid-cols-layout grid-cols-mobile_layout pt-20 gap-9">
            <div className="cursor-pointer">
              <form>
                <div className="mb-6">
                  <textarea
                    id="details"
                    name="serviceDetails"
                    required
                    className="border-2 h-24 border-[#2564eb] focus:ring-border-[#2564eb] focus:border-border-[#2564eb] rounded-lg block w-full p-3  focus:outline-none  focus:ring-1 "
                    placeholder="Write your review"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  {" "}
                  <button
                    type="submit"
                    className=" btn w-full lg:w-[100px] bg-[#1e3a8a] rounded-full border-none text-white hover:text-white hover:bg-[#152863]"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {/* <PhotoProvider>
                <PhotoView src={services.serviceURL}>
                  <img
                    className="w-full h-auto rounded-lg shadow-xl"
                    src={services.serviceURL}
                    alt=""
                  />
                </PhotoView>
              </PhotoProvider> */}
            </div>
            <div className="border-2 lg:mx-5 bg-white shadow-lg rounded-2xl">
              <div className="flex flex-col justify-start py-10 px-5">
                <h2 className="lg:text-6xl text-3xl font-pacific text-[#1e3a8a] pb-7">
                  {/* {services.serviceName} */}hello
                </h2>
                <h2 className="pb-7">
                  <span className="text-gray-700 text-2xl font-bold ">
                    Price:
                  </span>{" "}
                  <span className="text-gray-500 text-2xl font-bold">
                    {/* {services.servicePrice} BDT */} 20 koti
                  </span>
                </h2>
                <h2 className="text-[17px] italic text-gray-600">
                  {/* {services.serviceDetails} */} onk ajaira pechal
                </h2>
              </div>
            </div>
          </div>

          {/* <div className="mt-10"></div> */}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsSection;

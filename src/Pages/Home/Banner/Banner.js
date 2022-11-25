import React from "react";

const Banner = () => {
  return (
    <div className="relative top-1/2 translate">
      <div className="mx-auto container py-12 px-6 xl:px-0 flex justify-center items-center flex-col">
        <div className="flex justify-between bg-gray-50 items-stretch flex-row">
          <div className="flex items-center bg-gray-800 justify-center">
            <p className="transform flex flex-shrink-0 -rotate-90 text-2xl font-semibold tracking-wide leading-normal text-white">
              50% OFF
            </p>
          </div>
          <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5">
            <div>
              <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">
                Act before it’s too late!
              </p>
            </div>
            <div className="xl:mt-4 mt-2">
              <p className="text-base xl:text-xl leading-7 text-gray-600 pr-4">
                You can pay in installments now.
              </p>
              <p>
                <strong>For Any Service greater than BDT 5,000</strong>
              </p>
            </div>
          </div>
          <div className="hidden md:block h-44 md:h-60 xl:h-72">
            <img
              className="hidden h-full xl:block"
              src="https://thumbs.dreamstime.com/b/art-illustration-241983393.jpg"
              alt="pexels-dmitry-zvolskiy-2082090-1"
            />
            <img
              className="xl:hidden h-full"
              src="https://thumbs.dreamstime.com/b/art-illustration-241983393.jpg"
              alt="pexels-dmitry-zvolskiy-2082090-1-1"
            />
          </div>
        </div>
        <div className="md:hidden mt-6 w-full">
          <img
            src="https://thumbs.dreamstime.com/b/art-illustration-241983393.jpg"
            alt="pexels-dmitry-zvolskiy-2082090-1"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

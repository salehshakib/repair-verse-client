import React from "react";
import { Link } from "react-router-dom";
import ReviewItem from "./ReviewItem";
const Reviews = () => {
  return (
    <div className="bg-base-200">
      <section className="text-5xl py-20 max-w-screen-xl mx-auto">
        <div className="w-5/6 mx-auto">
          <p className="text-3xl font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
            customer reviews
          </p>
          <div className="flex mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-[#2564eb] rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-[#2564eb] rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-[#07b4d5] rounded-full"></span>
          </div>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-3 my-10">
            <ReviewItem></ReviewItem>
            <ReviewItem></ReviewItem>
            <ReviewItem></ReviewItem>
          </div>
          {/* <div className="w-full flex justify-end">
            
            <button className="btn border-none bg-[#1e3a8a] hover:bg-[#152863] flex items-center justify-end">
              Add a Review
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Reviews;

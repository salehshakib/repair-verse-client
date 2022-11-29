import React from "react";
import ReviewItem from "../../Home/Reviews/ReviewItem";

const ReviewSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#2564eb]  to-[#07b4d5] min-h-[90vh] pt-20 ">
      <section className="text-5xl py-20 max-w-screen-xl mx-auto">
        <div className="w-5/6 mx-auto">
          <p className="text-3xl font-semibold text-white capitalize xl:text-5xl lg:text-4xl dark:text-white">
            Add a Review
          </p>
          <div className="flex mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-base-200 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-base-300 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-base-300 rounded-full"></span>
          </div>
          {/* <div className="grid gap-5 grid-cols-1 md:grid-cols-3 my-10">
            <ServiceItem></ServiceItem>
            <ServiceItem></ServiceItem>
            <ServiceItem></ServiceItem>
          </div> */}
          <div className="mt-10">
            {/* <form onSubmit={handleServiceAdd}> */}
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
          </div>
          <div>
            <p className="text-3xl font-semibold text-white capitalize xl:text-5xl lg:text-4xl dark:text-white pt-20">
              What others say
            </p>
            <div className="flex mx-auto mt-6">
              <span className="inline-block w-40 h-1 bg-base-200 rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-base-300 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-base-300 rounded-full"></span>
            </div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3 my-10">
              <ReviewItem></ReviewItem>
              <ReviewItem></ReviewItem>
              <ReviewItem></ReviewItem>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;

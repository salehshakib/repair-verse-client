import React from "react";

const AddService = () => {
  return (
    <div className="bg-gradient-to-r from-[#2564eb]  to-[#07b4d5] min-h-[90vh] pt-20 ">
      <section className="text-5xl py-20 max-w-screen-xl mx-auto">
        <div className="w-5/6 mx-auto">
          <p className="text-3xl font-semibold text-white capitalize xl:text-5xl lg:text-4xl dark:text-white">
            Add a new Service
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
              <div className="flex lg:flex-row flex-col lg:justify-between">
                <div className="mb-6 lg:w-1/2 w-full pr-3">
                  <label
                    for="name"
                    className="block text-xl mb-2 font-medium text-gray-900"
                  >
                    Service Name
                  </label>
                  <input
                    type="text"
                    name="serviceName"
                    id="name"
                    className=" border-2 border-[#2564eb] focus:ring-border-[#2564eb] focus:border-border-[#2564eb] rounded-lg block w-full p-2.5  focus:outline-none  focus:ring-1 "
                    placeholder="Service Name"
                    required
                  />
                </div>
                <div className="mb-6 lg:w-1/2 w-full lg:pl-3">
                  <label
                    for="price"
                    className="block text-xl mb-2 font-medium text-gray-900"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="servicePrice"
                    id="price"
                    className=" border-2 border-[#2564eb] focus:ring-border-[#2564eb] focus:border-border-[#2564eb] rounded-lg block w-full p-2.5  focus:outline-none  focus:ring-1 "
                    placeholder="Service Price"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  for="url"
                  className="block text-xl mb-2 font-medium text-gray-900"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="url"
                  name="serviceURL"
                  className=" border-2 border-[#2564eb] focus:ring-border-[#2564eb] focus:border-border-[#2564eb] rounded-lg block w-full p-2.5  focus:outline-none  focus:ring-1 "
                  placeholder="Service Price"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  for="details"
                  className="block text-xl mb-2 font-medium text-gray-900"
                >
                  Service Details
                </label>
                <textarea
                  id="details"
                  name="serviceDetails"
                  required
                  className="border-2 h-24 border-[#2564eb] focus:ring-border-[#2564eb] focus:border-border-[#2564eb] rounded-lg block w-full p-3  focus:outline-none  focus:ring-1 "
                  placeholder="Service description"
                ></textarea>
              </div>
              <button
                type="submit"
                className=" btn w-full lg:w-[100px] bg-[#07b4d5] border-none text-white hover:text-white hover:bg-[#152863]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddService;

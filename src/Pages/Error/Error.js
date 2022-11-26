/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Error = () => {
  return (
    <>
      <Header></Header>
      <section className="bg-gradient-to-r from-[#2564eb]  to-[#07b4d5] min-h-[90vh]">
        <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
          <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
            <div class="relative">
              <div class="absolute">
                <div class="">
                  <h1 class="my-2 text-gray-800 font-bold text-2xl">
                    Looks like you've found the doorway to the great nothing
                  </h1>
                  <p class="my-2 text-gray-800">
                    Sorry about that! Please visit our hompage to get where you
                    need to go.
                  </p>
                  <Link to="/">
                    <button class="sm:w-full lg:w-auto my-2 border border-none rounded md py-4 px-8 text-center bg-neutral text-white focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:ring-opacity-50 hover:bg-[#1e3a8a]">
                      Want to go Home! Click me!
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
              </div>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Error;

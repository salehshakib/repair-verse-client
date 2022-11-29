/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="md:text-5xl tex-2xl font-semibold tracking-tight text-gray-700 sm:text-4xl dark:text-white">
          Join us and get our services <br /> from anywhere
        </h2>

        <div className="mt-6 sm:-mx-2">
          <div className="inline-flex w-full sm:w-auto sm:mx-2">
            <Link
              to="/register"
              className="inline-flex items-center justify-center w-full px-5 py-2 text-white bg-[#1e3a8a] rounded-lg hover:bg-[#152863] focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Join us Now
            </Link>
          </div>

          <div className="inline-flex w-full mt-4 sm:w-auto sm:mx-2 sm:mt-0">
            <Link
              to="/services"
              className="inline-flex items-center justify-center w-full px-5 py-2 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-[#1e3a8a] hover:text-white dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80"
            >
              Add a review
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;

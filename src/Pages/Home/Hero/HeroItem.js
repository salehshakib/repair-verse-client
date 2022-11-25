import React from "react";
import "./HeroItem.css";

const HeroItem = ({ slide }) => {
  const { image, id, prev, next } = slide;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img
          src={image}
          alt=".."
          className="object-cover w-screen object-center h-[30em] md:h-[50em]"
        />
      </div>
      <div className="">
        <div className="absolute flex transform -translate-y-1/2 left-12 md:left-32 top-1/4 md:w-1/2 w-5/6">
          <h1 className="text-3xl pb-5 md:text-6xl font-bold text-white ">
            {" "}
            <span className="bg-gradient-to-r from-[#2564eb]  to-[#07b4d5] text-transparent bg-clip-text md:text-7xl text-4xl">
              Repair Verse
            </span>{" "}
            Offers The <br />
            Best Home Services.
          </h1>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 md:left-32 left-12 top-1/2 md:w-2/5 w-5/6">
          <p className="text-white md:text-xl text-base pt-10 md:pt-0">
            We offer the best home services for you.
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 md:left-32 left-12 top-3/4 w-2/5">
          <button className="btn bg-[#07b4d5] hover:bg-[#1e3a8a] text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            Contact Us
          </button>
        </div>
      </div>
      <div className="absolute flex justify-end md:justify-between transform -translate-y-1/2 md:left-10 md:right-10 md:top-1/2 left-5 right-5 bottom-0 md:bottom-auto">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle bg-[#1e3a8a] hover:bg-white hover:text-black border-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle bg-[#1e3a8a] hover:bg-white hover:text-black border-none ml-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroItem;

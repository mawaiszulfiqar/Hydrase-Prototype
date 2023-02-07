import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 flex flex-col justify-center items-center overflow-hidden z-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        display="block"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="32"
          fill="none"
          stroke="#38ade3"
          strokeDasharray="50.26548245743669 50.26548245743669"
          strokeLinecap="round"
          strokeWidth="8"
        >
          <animateTransform
            attributeName="transform"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
        <circle
          cx="50"
          cy="50"
          r="23"
          fill="none"
          stroke="#ffe85c"
          strokeDasharray="36.12831551628262 36.12831551628262"
          strokeDashoffset="36.128"
          strokeLinecap="round"
          strokeWidth="8"
        >
          <animateTransform
            attributeName="transform"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 50;-360 50 50"
          ></animateTransform>
        </circle>
      </svg>
      <p className="font-bold text-3xl text-white mt-16 text-center">
        Good things are worth the wait {":)"}
      </p>
    </div>
  );
};

export default Loader;

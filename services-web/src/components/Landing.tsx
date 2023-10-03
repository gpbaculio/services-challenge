import Image from "next/image";
import React from "react";

function Landing() {
  return (
    <div className="pt-20 w-full bg-blue-100 flex items-center justify-center">
      <div className="text-center my-10">
        <h1 className="text-3xl text-gray-800  font-bold">
          THINKING ABOUT HVAC
        </h1>
        <h2 className="text-xl mt-3 text-gray-700  font-semibold">
          WE ARE HERE FOR YOU
        </h2>
        <button className="text-l text-white px-4 bg-blue-600 rounded py-2 my-4 hover:bg-blue-500">
          REQUEST
        </button>
        <Image
          className="mt-3"
          src="/landing-bg.png"
          width={380}
          height={233}
          alt=""
        />
      </div>
    </div>
  );
}

export default Landing;

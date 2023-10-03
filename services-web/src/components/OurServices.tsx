import Image from "next/image";
import React from "react";

function OurServices() {
  return (
    <div id="services" className="w-full p-10">
      <h1 className="text-gray-800 text-center text-2xl font-semibold">
        OUR SERVICES
      </h1>
      <div className="w-full flex items-center justify-center mt-4">
        <h3 className="text-gray-500 md:w-1/3   text-center self-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
          molestiae dolore ipsam, eum debitis sit perferendis.
        </h3>
      </div>
      <div className="flex flex-wrap w-full mt-6">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className=" border-blue-100 border shadow rounded p-4">
            <div className="flex items-center mb-2">
              <Image src="/hvac.png" width={23} height={27} alt="" />
              <h2 className="text-lg font-semibold text-blue-800 ml-4">
                Other
              </h2>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className=" border-blue-100 border shadow rounded p-4">
            <div className="flex items-center mb-2">
              <Image src="/solar.png" width={31} height={31} alt="" />
              <h2 className="text-lg font-semibold text-blue-800 ml-4">
                Other
              </h2>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className=" border-blue-100 border shadow rounded p-4">
            <div className="flex items-center mb-2">
              <Image src="/ac.png" width={27} height={27} alt="" />
              <h2 className="text-lg font-semibold text-blue-800 ml-4">
                Other
              </h2>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className=" border-blue-100 border shadow rounded p-4">
            <div className="flex items-center mb-2">
              <Image src="/plumbing.png" width={27} height={27} alt="" />
              <h2 className="text-lg font-semibold text-blue-800 ml-4">
                Other
              </h2>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className=" border-blue-100 border shadow rounded p-4">
            <div className="flex items-center mb-2">
              <Image src="/fan.png" width={30} height={30} alt="" />
              <h2 className="text-lg font-semibold text-blue-800 ml-4">
                Other
              </h2>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className=" border-blue-100 border shadow rounded p-4">
            <div className="flex items-center mb-2">
              <Image src="/other.png" width={30} height={30} alt="" />
              <h2 className="text-lg font-semibold text-blue-800 ml-4">
                Other
              </h2>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;

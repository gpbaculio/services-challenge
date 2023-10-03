import React from "react";

import Image from "next/image";

import Header from "@/components/Header";

function page() {
  return (
    <div className="min-h-screen w-full bg-blue-100 ">
      <Header />
      <div className="bg-blue-100 px-10 pt-20">
        <h1 className="text-3xl text-gray-800  font-bold text-center mt-6">
          SERVICES LIST
        </h1>
        <div className="flex flex-wrap w-full mt-2">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className=" border-blue-100 border h-full shadow rounded p-4 flex flex-col bg-white">
              <Image
                src="/service-hvac.png"
                width={285}
                height={151}
                alt=""
                className="self-center"
              />
              <div className="mb-4 flex items-center mt-2 mx-9 sm:mx-2 md:mx-3  flex-wrap justify-between">
                <div>
                  <h1 className="text-gray-700 font-semibold text-xl">HVAC</h1>
                  <h4 className="text-gray-500 font-semibold text-l">60 Min</h4>
                </div>
                <h2 className="text-gray-700 font-bold text-xl mb-auto">$45</h2>
              </div>
              <button className="mt-auto text-white bg-blue-500 hover:bg-blue-400 font-medium py-2 mx-9 sm:mx-2 md:mx-3 rounded shadow">
                Book
              </button>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className=" border-blue-100 border shadow rounded p-4 flex flex-col bg-white">
              <Image
                src="/solarpanel-service.png"
                width={285}
                height={151}
                alt=""
                className="self-center"
              />
              <div className="mb-4 flex items-center mt-2 mx-9 sm:mx-2 md:mx-3 justify-between">
                <div>
                  <h1 className="text-gray-700 font-semibold text-xl">
                    SOLAR PANEL CLEANING
                  </h1>
                  <h4 className="text-gray-500 font-semibold text-l">60 Min</h4>
                </div>
                <h2 className="text-gray-700 font-bold text-xl mb-auto">$75</h2>
              </div>
              <button className="text-white bg-blue-500 hover:bg-blue-400 font-medium py-2 mx-9 sm:mx-2 md:mx-3 rounded shadow mt-auto">
                Book
              </button>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className=" border-blue-100 border shadow rounded p-4 flex flex-col bg-white">
              <Image
                src="/acmaintenance-service.png"
                width={285}
                height={151}
                alt=""
                className="self-center"
              />
              <div className="mb-4 flex items-center mt-2 mx-9 sm:mx-2 md:mx-3 justify-between">
                <div>
                  <h1 className="text-gray-700 font-semibold text-xl">
                    AC MAINTENANCE
                  </h1>
                  <h4 className="text-gray-500 font-semibold text-l">60 Min</h4>
                </div>
                <h2 className="text-gray-700 font-bold text-xl mb-auto">$55</h2>
              </div>
              <button className="mt-auto text-white bg-blue-500 hover:bg-blue-400 font-medium py-2 mx-9 sm:mx-2 md:mx-3 rounded shadow">
                Book
              </button>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className=" border-blue-100 border shadow rounded p-4 flex flex-col bg-white">
              <Image
                src="/plumbing-service.png"
                width={285}
                height={151}
                alt=""
                className="self-center"
              />
              <div className="flex items-center mt-2 mx-9 sm:mx-2 md:mx-3 justify-between mb-4">
                <div>
                  <h1 className="text-gray-700 font-semibold text-xl">
                    PLUMBING
                  </h1>
                  <h4 className="text-gray-500 font-semibold text-l">60 Min</h4>
                </div>
                <h2 className="text-gray-700 font-bold text-xl mb-auto">$60</h2>
              </div>
              <button className="text-white bg-blue-500 hover:bg-blue-400 font-medium py-2 mx-9 sm:mx-2 md:mx-3 rounded shadow mt-auto">
                Book
              </button>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className=" border-blue-100 border shadow rounded p-4 flex flex-col bg-white">
              <Image
                src="/fan-service.png"
                width={285}
                height={151}
                alt=""
                className="self-center"
              />
              <div className="mb-4 flex items-center mt-2 mx-9 sm:mx-2 md:mx-3 justify-between">
                <div>
                  <h1 className="text-gray-700 font-semibold text-xl">
                    FAN SERVICES
                  </h1>
                  <h4 className="text-gray-500 font-semibold text-l">60 Min</h4>
                </div>
                <h2 className="text-gray-700 font-bold text-xl mb-auto">$80</h2>
              </div>
              <button className="text-white bg-blue-500 hover:bg-blue-400 font-medium py-2 mx-9 sm:mx-2 md:mx-3 rounded shadow mt-auto">
                Book
              </button>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className=" border-blue-100 border shadow rounded p-4 flex flex-col bg-white">
              <Image
                src="/other-service.png"
                width={285}
                height={151}
                alt=""
                className="self-center"
              />
              <div className="mb-4 flex items-center mt-2 mx-9 sm:mx-2 md:mx-3 justify-between">
                <div>
                  <h1 className="text-gray-700 font-semibold text-xl">OTHER</h1>
                  <h4 className="text-gray-500 font-semibold text-l">60 Min</h4>
                </div>
                <h2 className="text-gray-700 font-bold text-xl mb-auto">$70</h2>
              </div>
              <button className="text-white bg-blue-500 font-medium hover:bg-blue-400 py-2 mx-9 sm:mx-2 md:mx-3 rounded shadow mt-auto">
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

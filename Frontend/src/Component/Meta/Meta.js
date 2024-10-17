import React from "react";
import homeLogo from "../Assets/home-main.svg";
import Type from "./Effect";
import { Link } from "react-router-dom";


export default function MetaData() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mt-28 md:mt-40 mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-left sm:text-center lg:text-left">
              <h1 className="text-2xl tracking-tight font-medium flex flex-col text-gray-900 sm:text-4xl md:text-4xl">
                <span className="flex flex-row justify-start sm:justify-center lg:justify-start">Hi There!   <span className="ml-2 animate-wave"> 👋🏻  </span></span>
                <span className="block mt-4 xl:inline uppercase">i'm <span className="text-second font-bold">rahul rajput</span></span>
              </h1>
              <div className="font-bold text-lg sm:text-3xl md:text-3xl mt-8 sm:mt-16 text-main">
                <Type />
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                {/* <div className="rounded-md shadow">
                  <a
                    href="about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-second hover:bg-main md:py-4 md:text-lg md:px-10"
                  >
                    Read More
                  </a>
                </div> */}
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/projects"
                    className="w-full flex items-center bg-second text-white justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
                  >
                    My Projects
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center">
        <img
          className="h-48 w-full sm:h-60 md:h-96 lg:w-full lg:h-94"
          src={homeLogo}
          alt=""
        />
      </div>
    </div>
  )
}

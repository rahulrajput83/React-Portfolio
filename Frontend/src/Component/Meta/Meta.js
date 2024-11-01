import React from "react";
import { Link } from "react-router-dom";


export default function MetaData() {
  return (
    //     <section className="px-4 overflow-hidden md:px-10 flex w-full justify-center items-center">
    //   <div className="px-4  w-full max-w-7xl sm:px-6 lg:px-8">
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
    //       <div>
    //         <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
    //           Hey <span className="ml-2 animate-wave">👋</span> I'm
    //           <br className="block sm:hidden" />
    //           Rahul Rajput
    //         </h2>
    //         <p className="mt-3 text-lg md:mt-8 font-medium">
    //           A dedicated Software Engineer specializing in full-stack web
    //           development with hands-on experience in building robust, scalable
    //           solutions. My expertise spans across frontend and backend
    //           technologies, with proficiency in TypeScript, JavaScript, NextJS,
    //           ReactJS, NodeJS, and more. I'm passionate about delivering
    //           user-friendly experiences and crafting clean, efficient code that
    //           drives results.
    //         </p>
    //         <Link
    //           to="/projects"
    //           className="mt-4 flex items-center bg-second md:w-fit w-full text-white justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md hover:bg-white hover:text-second transition-all duration-100"
    //         >
    //           My Projects
    //         </Link>
    //       </div>

    //       <div className="relative flex justify-center md:justify-end">
    //         <img
    //           className="absolute -bottom-20 md:bottom-0 md:-translate-x-1/2 left-1/2 md:w-3/4 lg:w-full max-w-sm"
    //           src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
    //           alt="Blob Shape Background"
    //         />
    //         <img
    //           className="relative w-full md:w-3/5 xl:max-w-md xl:mx-auto z-10"
    //           src="https://res.cloudinary.com/dewxmgs8r/image/upload/v1730225385/bkuqd7ysl1fzxohpw8bc.png"
    //           alt="Rahul Rajput"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <div className="flex flex-col">
      <section className="overflow-hidden pt-10 sm:pt-16 md:pt-0 2xl:pt-16 md:mt-24 mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 grid-cols-1 items-center md:grid-cols-2">
            <div className="z-10 md:order-1 order-2">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Hey <span className="animate-wave inline-block">👋</span>, I'm
                <span className=""> </span>
                Rahul Rajput
              </h2>


              <p className="mt-3 text-lg md:mt-8 font-medium">
                A dedicated Software Engineer specializing in full-stack web
                development with hands-on experience in building robust, scalable
                solutions. My expertise spans across frontend and backend
                technologies, with proficiency in TypeScript, JavaScript, NextJS,
                ReactJS, NodeJS, and more. I'm passionate about delivering
                user-friendly experiences and crafting clean, efficient code that
                drives results.
              </p>

              <Link
                to="/projects"
                className="mt-4 mb-32 min-[320px]:mb-0 flex items-center bg-second md:w-fit w-full text-white justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md hover:bg-white hover:text-second transition-all duration-100"
              >
                My Projects
              </Link>
            </div>

            <div className="relative  md:order-2 order-1">
              <img className="absolute inset-x-0 max-w-xl min-[550px]:max-w-2xl md:max-w-lg bottom-0 left-1/2 -mb-48 -translate-x-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

              <img className="relative w-full xl:mx-auto xl:max-w-sm 2xl:origin-bottom" src="https://res.cloudinary.com/dewxmgs8r/image/upload/v1730225385/bkuqd7ysl1fzxohpw8bc.png" alt="Rahul Rajput" />
            </div>
          </div>
        </div>
      </section>
    </div>


    // <div className="relative bg-white overflow-hidden w-full">
    //   {/* <Transition className="max-w-7xl mt-28 md:mt-40 mx-auto">
    //     <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

    //       <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
    //         <div className="text-left sm:text-center lg:text-left">
    //           <h1 className="text-2xl tracking-tight font-medium flex flex-col text-gray-900 sm:text-4xl md:text-4xl">
    //             <span className="flex flex-row justify-start sm:justify-center lg:justify-start">Hi There!   <span className="ml-2 animate-wave"> 👋🏻  </span></span>
    //             <span className="block mt-4 xl:inline uppercase">i'm <span className="text-second font-bold">rahul rajput</span></span>
    //           </h1>
    //           <div className="font-bold text-lg sm:text-3xl md:text-3xl mt-8 sm:mt-16 text-main">
    //             <Type />
    //           </div>
    //           <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
    //             <div className="rounded-md shadow">
    //               <a
    //                 href="about"
    //                 className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-second hover:bg-main md:py-4 md:text-lg md:px-10"
    //               >
    //                 Read More
    //               </a>
    //             </div>
    //             <div className="mt-3 sm:mt-0 sm:ml-3">
    //               <Link
    //                 to="/projects"
    //                 className="w-full flex items-center bg-second text-white justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
    //               >
    //                 My Projects
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //       </main>
    //     </div>
    //   </Transition>
    //   <Transition className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center">
    //     <div class="relative">
    //       <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />
    //       <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://res.cloudinary.com/dewxmgs8r/image/upload/v1730225385/bkuqd7ysl1fzxohpw8bc.png" alt="" />
    //     </div>
    //     <img
    //       className="h-48 w-full sm:h-60 md:h-96 lg:w-full lg:h-94"
    //       src={homeLogo}
    //       alt=""
    //     />
    //   </Transition> */}
    // </div>
  )
}

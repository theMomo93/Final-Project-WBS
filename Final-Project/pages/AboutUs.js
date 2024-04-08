import BreadCrumbs from "@/Components/BreadCrumbs";
import Image from "next/image";
import Aboutus from "../img/Aboutus.png";
import React from "react";
import Footer from "@/Components/Footer";


export default function AboutUs() {
  const breadCrumbs = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/aboutus" },
  ];

  return (
    <div>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <section className="flex items-center bg-gradient-to-r from-amber-400 to-blue-950 text-black xl:h-screen font-poppins dark:bg-gray-800 my-24 mx-24 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="relative lg:max-w-md">
                <Image
                  src={Aboutus}
                  alt="about"
                  className="relative z-10 object-cover w-full rounded h-4/5"
                />

                <div className="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-yellow-500 rounded shadow dark:border-yellow-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                  <p className="text-lg font-semibold md:w-72">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bg-opacity-80 absolute top-0 left-0 w-16 h-16 text-yellow-700 dark:text-gray-300 opacity-30"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                    </svg>{" "}
                    Successfully connecting people and providing safe space.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="pl-4 mb-6 border-l-4 border-yellow-500 ">
                <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
                  Welcome!
                </span>
                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                  Let&apos;s talk about this project!
                </h1>
              </div>
              <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                This project started out of personal experience. Having to deal
                with administration alone in various subjects made me realize
                that I need help. I reached out to the international community
                and I found my solutions! This website is created to give people
                a friendly space to discuss and find solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

import Link from "next/link";
import BreadCrumbs from "@/Components/BreadCrumbs";
import { FiChevronsRight } from "react-icons/fi";
import React from "react";
import Footer from "@/Components/Footer";


export default function Information() {
  const breadCrumbs = [
    { name: "Home", url: "/" },
    { name: "Information", url: "/Information" },
  ];
  return (
  
      <>
        <BreadCrumbs breadCrumbs={breadCrumbs} />
  
  <div className="mx-auto p-4 sm:p-12 h-auto px-2 sm:px-16 flex flex-wrap align-center justify-center">
  <div class="mx-auto p-4 sm:p-12 lg:p-16 xl:p-20 px-2 sm:px-8 lg:px-16 xl:px-24">
  <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold mx-4 sm:mx-auto lg:mx-28 mb-2 sm:mb-4 text-center">
    Welcome, to our Information Page, choose a category:
  </h1>

  <p class="text-lg lg:text-xl mb-4 sm:mb-8 mx-4 sm:mx-auto lg:mx-52 xl:mx-auto text-center">
    New to Germany and not quite sure how everything works? Our topics may offer you useful
    information about living, working and staying in Germany.
  </p>
</div>


    <section className="flex items-center lg:h-screen/2 font-poppins dark:bg-gray-50 pb-24">
      <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
        <div className="flex flex-wrap justify-center mx-3 pt-11">
          <div className="w-full px-3 mb-6 lg:px-2">
            <Link href="Information/Language">
              <a className="block p-4 bg-white rounded-b shadow-md transition-transform transform hover:scale-105 hover:bg-blue-50 duration-300">
                <h2 className="text-3xl font-semibold text-black">Language Courses</h2>
                <p className="mt-2 text-l text-gray-700">
                  Explore language courses to adapt quickly and discover your possibilities.
                </p>
                <div className="flex items-center mt-2">
                  <span className="mr-2">Learn More</span>
                  <FiChevronsRight />
                </div>
              </a>
            </Link>
          </div>

          <div className="w-full px-3 mb-6 lg:px-2">
            <Link href="Information/Work">
              <a className="block p-4 bg-white rounded-b shadow-md transition-transform transform hover:scale-105 hover:bg-blue-50 duration-300">
                <h2 className="text-3xl font-semibold text-black">Work</h2>
                <p className="mt-2 text-l text-gray-700">
                  Discover whether to look for jobs, your prospects and opportunities in Germany.
                </p>
                <div className="flex items-center mt-2">
                  <span className="mr-2">Learn More</span>
                  <FiChevronsRight />
                </div>
              </a>
            </Link>
          </div>

          <div className="w-full px-3 mb-6 lg:px-2">
            <Link href="Information/Healthcare">
              <a className="block p-4 bg-white rounded-b shadow-md transition-transform transform hover:scale-105 hover:bg-blue-50 duration-300">
                <h2 className="text-3xl font-semibold text-black">Health Insurance</h2>
                <p className="mt-2 text-l text-gray-700">
                  Here you will find information on healthcare and healthcare providers and healthcare costs.
                </p>
                <div className="flex items-center mt-2">
                  <span className="mr-2">Learn More</span>
                  <FiChevronsRight />
                </div>
              </a>
            </Link>
          </div>

          <div className="w-full px-3 mb-6 lg:px-2">
            <Link href="Information/Housing">
              <a className="block p-4 bg-white rounded-b shadow-md transition-transform transform hover:scale-105 hover:bg-blue-50 duration-300">
                <h2 className="text-3xl font-semibold text-black">Housing</h2>
                <p className="mt-2 text-l text-gray-700">
                  Find information on where to look for Apartments and what is necessary to get one.
                </p>
                <div className="flex items-center mt-2">
                  <span className="mr-2">Learn More</span>
                  <FiChevronsRight />
                </div>
              </a>
            </Link>
              </div>

             
            </div>
          </div>
        </section>
      </div>
<Footer/>
    </>
  );
}

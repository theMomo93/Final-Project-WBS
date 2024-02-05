import Footer from "@/components/Footer";
import Link from 'next/link';
import { useRouter } from 'next/router';


const Home = () => {
  return (
    <div>
      <div className="bg-white min-h-screen flex flex-col">
        <title>Immigrant Assistance</title>

        <main className="flex-1">
          <section className="mt-8 mb-8 bg-gradient-to-r from-cyan-300 to-blue-400 text-black text-center py-16 flex flex-col md:flex-row md:items-center">
            <div className="w-full md:w-3/5 flex flex-col justify-center items-center">
              <img
                src="https://picsum.photos/500/300?grayscale"
                alt="people holding hands"
                className="rounded-xl"
              />
            </div>
            <div className="w-full md:w-2/5 text-center md:text-left mt-4 md:mt-0">
              <h1 className="text-4xl font-bold mb-4 ">Immigration</h1>
              <p className="text-xl flex align-left mr-12 mb-8 mt-4">
                Your guide to navigating life in Germany. Here you will find
                information that will help you reach your hsahsdfbfdsj j jjasgsa
                jdh assd.
              </p>
              <div className="flex flex-col md:flex-row items-center md:mt-4">
                <Link href="/register" className=" register mb-2 md:mb-0 mr-0 md:mr-2 btn btn-intermediate">
                 Register
                </Link>
                <Link href="/login" className=" login mb-2 md:mb-0 mr-0 md:mr-2 btn btn-intermediate">
                  Login
                </Link>
              </div>
            </div>
          </section>
          <div class="container mx-auto my-8 p-8 bg-white rounded-md ">
  <h1 class="text-5xl text-blue-900 font-bold text-center">Some Information that might be helpful:</h1>
  <p class="text-sm text-gray-500 text-center">Disclaimer: This website is a Final project for WBS course for Fullstack Development.</p>
</div>
          <section className="flex items-center lg:h-screen/2 font-poppins dark:bg-white-100 mb-16">
            
            <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
              <div className="flex flex-wrap justify-center -mx-3 pt-11 ">
                <div className="w-full px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3">
                  <div className="p-4 bg-white rounded-b shadow-md transition-transform transform hover:scale-105 hover:bg-gray-100 duration-300">
                    <h2 className="text-xl font-semibold text-black">
                      Language Courses
                    </h2>
                    <p className="mt-2 text-sm text-gray-700">
                      Explore language courses to adapt quickly and discover
                      your possibilities.
                    </p>
                    <a
                      href="/language"
                      className="flex items-center mt-2 text-sm font-semibold text-amber-600 hover:text-blue-600"
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="ml-1 bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="w-full px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3">
                  <div className="p-4 bg-white rounded-b shadow-md transition-transform transform hover:scale-105 hover:bg-gray-100 duration-300">
                    <h2 className="text-xl font-semibold text-black">
                      Employment
                    </h2>
                    <p className="mt-2 text-sm text-gray-700">
                      Discover whete to look for jobs, your prospects and opportunities in Germany .
                    </p>
                    <a
                      href="work"
                      className="flex items-center mt-2 text-sm font-semibold text-amber-600 hover:text-blue-600"
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="ml-1 bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="w-full px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3">
                  <div className="p-4 bg-white rounded-b shadow-md transition-transform transform hover:scale-105 hover:bg-gray-100 duration-300">
                    <h2 className="text-xl font-semibold text-black">
                      Health Insurance
                    </h2>
                    <p className="mt-2 text-sm text-gray-700">
                      Read about information on healthcare and healthcare
                      providers.
                    </p>
                    <a
                      href="healthcare"
                      className="flex items-center mt-2 text-sm font-semibold text-amber-600 hover:text-blue-600"
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="ml-1 bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="w-full px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3">
                  <div className="p-4 bg-white rounded-b shadow-md transition-transform transform hover:scale-105 hover:bg-gray-100 duration-300">
                    <h2 className="text-xl font-semibold text-black">
                      Housing
                    </h2>
                    <p className="mt-2 text-sm text-gray-700">
                      Find information on where to look for Apartments and what
                      is necessary to get one.
                    </p>
                    <a
                      href="/housing"
                      className="flex items-center mt-2 text-sm font-semibold text-amber-600 hover:text-blue-600"
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="ml-1 bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="w-full px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3">
                  <div className="p-4 bg-white rounded-b shadow-md transition-transform transform hover:scale-105 hover:bg-gray-100 duration-300">
                    <h2 className="text-xl font-semibold text-black">
                      Integration
                    </h2>
                    <p className="mt-2 text-sm text-gray-700">
                      Learn about integration programs and where to find social
                      events.
                    </p>
                    <a
                      href="/integration"
                      className="flex items-center mt-2 text-sm font-semibold text-amber-600 hover:text-blue-600"
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="ml-1 bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

import Link from "next/link";
import Footer from "@/components/Footer";
import BreadCrumbs from "@/components/BreadCrumbs";

export default function information() {
  const breadCrumbs =[
    {name: "Home", url: "/"},
    {name: "Information", url: "/information"},
    
  ]
  return (
    <>
    <BreadCrumbs breadCrumbs={breadCrumbs}/>
    <div className="mx-auto p-12 h-auto px-16 flex flex-wrap align-center justify-center">
      <div className=" mx-auto p-12 h-auto px-16 ">
        <h1 className="text-4xl font-bold mx-28 mb-4 text-center">
          Welcome, to our Information Page, choose a category you are interested in.
        </h1>

        <p className="text-lg mb-8 mx-96 text-center">
          New to Germany and not quite sure how everything works? Our topics may
          offer you useful information about living and working, staying in
          Germany.
        </p>
</div>
        <section className="flex items-center lg:h-screen/2 font-poppins dark:bg-white-100 pb-24 ">
            
            <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
              <div className="flex flex-wrap justify-center -mx-3 pt-11 ">
                <div className="w-full px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3">
                  <Link href="/language">
                  <div className="p-4 bg-white rounded-b shadow-md transition-transform transform hover:scale-105 hover:bg-gray-100 duration-300">
                    <h2 className="text-3xl font-semibold text-black">
                      Language Courses
                    </h2>
                    <p className="mt-2 text-l text-gray-700">
                      Explore language courses to adapt quickly and discover
                      your possibilities.
                    </p>
                   </div>
                  </Link>
                </div>

                <div className="w-full px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3">
                <Link href="/work">
                  <div className="p-4 bg-white rounded-b shadow-md transition-transform transform hover:scale-105 hover:bg-gray-100 duration-300">
                    <h2 className="text-3xl font-semibold text-black">
                      Work
                    </h2>
                    <p className="mt-2 text-l text-gray-700">
                      Discover whether to look for jobs, your prospects and opportunities in Germany .
                    </p>
                    
                  </div>
                  </Link>
                </div>

                <div className="w-full px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3">
                <Link href="/healthcare">
                  <div className="p-4 bg-white rounded-b shadow-md transition-transform transform hover:scale-105 hover:bg-gray-100 duration-300">
                    <h2 className="text-3xl font-semibold text-black">
                      Health Insurance
                    </h2>
                    <p className="mt-2 text-l text-gray-700">
                      Read about information on healthcare and healthcare
                      providers.
                    </p>
                    
                  </div>
                  </Link>
                </div>

                <div className="w-full px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3">
                <Link href="/housing">
                  <div className="p-4 bg-white rounded-b shadow-md transition-transform transform hover:scale-105 hover:bg-gray-100 duration-300">
                    <h2 className="text-3xl font-semibold text-black">
                      Housing
                    </h2>
                    <p className="mt-2 text-l text-gray-700">
                      Find information on where to look for Apartments and what
                      is necessary to get one.
                    </p>
                    
                  </div>
                  </Link>
                </div>

                <div className="w-full px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3">
                <Link href="/integration">
                  <div className="p-4 bg-white rounded-b shadow-md transition-transform transform hover:scale-105 hover:bg-gray-100 duration-300">
                    <h2 className="text-3xl font-semibold text-black">
                      Integration
                    </h2>
                    <p className="mt-2 text-l text-gray-700">
                      Learn about integration programs and where to find social
                      events.
                    </p>
                    
                  </div>
                  </Link>
                </div>
              
              </div>
            </div>
          </section>
      </div>
      <Footer />
    </>
  );
}

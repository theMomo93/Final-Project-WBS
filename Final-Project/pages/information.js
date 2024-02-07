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
      <div className="container mx-auto p-12 h-auto px-16">
        <h1 className="text-4xl font-bold mx-16 mb-4">
          Welcome, choose your Category.
        </h1>

        <p className="text-lg mb-8 mx-16">
          New to Germany and not quite sure how everything works? Our topics may
          offer you useful information about living and working, staying in
          Germany.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mx-16 mb-12 mt-12 ">
          {/* Category 1 */}
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Language Courses </h2>{" "}
            <svg
              className="h-10 w-10 text-amber-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />{" "}
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
            <p className="text-lg mb-6 mt-4">Explore language courses to help you adapt quickly.</p>
            <Link
              href="/language"
              className="text-lg text-black hover:bg-amber-400 rounded  px-4 py-2"
            >
              More
            </Link>
          </div>

          {/* Category 2 */}
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Integration </h2>
            <svg
              className="h-10 w-10 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

            <p className="text-lg mb-6 mt-4">Learn about integration programs for a smooth transition.</p>
            <Link href="/integration" className="text-lg text-black hover:bg-amber-400 rounded  px-4 py-2">
              More
            </Link>
          </div>

          {/* Category 3 */}
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Employment </h2>
            <svg
              className="h-10 w-10 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          
            <p className="text-lg mb-6 mt-4">Discover job prospects and opportunities in Germany.</p> 
             <Link href="/work" className="text-lg text-black hover:bg-amber-400 rounded  px-4 py-2">
              More
            </Link>
          </div>

          {/* Category 4 */}
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Housing</h2>
            <svg
              className="h-10 w-10 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>

            <p className="text-lg mb-6 mt-4">Find guidance on looking for a place to live in Germany.</p>
            <Link href="/housing" className="text-lg text-black hover:bg-amber-400 rounded  px-4 py-2">
              More
            </Link>
          </div>

          {/* Category 5 */}
          <div className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Healthcare </h2>
            <svg
              className="h-10 w-10 text-amber-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <line x1="3" y1="21" x2="21" y2="21" />{" "}
              <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />{" "}
              <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />{" "}
              <line x1="10" y1="9" x2="14" y2="9" />{" "}
              <line x1="12" y1="7" x2="12" y2="11" />
            </svg>
            <p className="text-lg mb-6 mt-4">Here you can get more information on healthcare.</p>
            <Link
              href="/healthcare"
              className="text-lg text-black hover:bg-amber-400 rounded  px-4 py-2"
            >
              More
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

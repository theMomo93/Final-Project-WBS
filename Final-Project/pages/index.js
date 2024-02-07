import Footer from "@/components/Footer";
import Link from 'next/link';
import BreadCrumbs from "@/components/BreadCrumbs";

const Home = () => {
  const breadCrumbs =[
    {name: "Home", url: "/"}
  ]
     
  return (
    <>
    <BreadCrumbs breadCrumbs={breadCrumbs}/>
    <div>
      <div className="bg-white min-h-screen flex flex-col">
       

        <main className="flex-1">
          <section className="">
          <div className="flex  px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
    <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-1/2 lg:pr-24">
            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">There is no 
                            better way to get information.</h2>
            <h3
                className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                <span className="font-semibold">Port Germany</span> is designed with immigrants in mind. Provide information and forum to
                deliver helpful content right where people need it, all in one place, all for You.
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                <button className=" mb-2 md:mb-0 mr-0 md:mr-2 btn btn-intermediate">Register</button>
                <button className="mb-2 md:mb-0 mr-0 md:mr-2 btn btn-intermediate">Login</button>
            </div>
        </div>
        <div className="w-2/5 md:w-1/2 flex justify-center md:justify-end rounded">
            <img 
            className="py-16"
            src="https://img.freepik.com/free-photo/rearview-diverse-people-hugging-each-other_53876-105340.jpg?w=740&t=st=1707314724~exp=1707315324~hmac=3a36b8c16d902d63099713f65bf22324058e463800de0b3b7ea06408b95c827e"/>
        </div>
    </div>
</div>
          </section>
          <div>
          <h1 className="text-5xl text-blue-900 leading-tight font-bold text-center my-8">Our Goal and what we offer:</h1>
          
          </div>
          <div className="container mx-auto  p-24 bg-white rounded-md bg-orange-50 ">
  <h1 className="text-3xl text-blue-950 font-bold text-center">Disclaimer:</h1>
  <p className=" pt-4 text-sm text-gray-500 text-center mx-28"> The content presented on this website has been compiled
   and created as a final project for the WBS course in Fullstack Development by a student. While efforts have been made 
   to ensure accuracy and completeness, it is important to note that the information provided may be subject to errors 
   or inaccuracies. This website is not intended to serve as professional advice, and users are encouraged to independently 
   verify any information before relying on it.</p>
</div>
          
        </main>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Home;

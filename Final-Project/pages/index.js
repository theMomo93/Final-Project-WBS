import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import BreadCrumbs from "@/components/BreadCrumbs";
import Image from "next/image";
import homePage from "../img/homePageYellow.png";

const Home = () => {
  const breadCrumbs = [{ name: "Home", url: "/" }];

  const router = useRouter();
  function handleRegister() {
    router.push("/register");
  }
  function handleLogin() {
    router.push("/login");
  }
  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />

      <div>
        <div className="bg-gray-50 min-h-screen flex flex-col">
          <main className="flex-1">
            
            <section className="bg-gray-50">
            <div className="w-full text-center px-8 sm:px-16 md:px-24 lg:px-32 xl:px-48">
                <h1 className="text-6xl text-gray-900 font-bold mt-24">
                  Register. Login. Connect.
                </h1>
              </div>
              <div className="flex px-8 md:px-20  items-center justify-center md:h-screen overflow-hidden">
                
                <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl p-8 ">
                  <div className="w-full md:w-1/2 lg:pr-24 ">
                    <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
                      Gateway to Information and Community Support.
                    </h2>
                    <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                      At{" "}
                      <span className=" text-2xl font-semibold">
                        Port Germany,
                      </span>{" "}
                      we're dedicated to creating a welcoming space for
                      immigrants. Our platform is designed to make your journey
                      in a new country smoother. With a one-stop solution, we
                      offer valuable information and a vibrant community forum,
                      catering to the diverse needs of immigrants and travelers.
                    </h3>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                      <button
                        onClick={handleRegister}
                        className="mb-2 md:mb-0 mr-0 md:mr-2 text-white bg-amber-400 py-4 px-8 hover:text-black rounded text-xl font-semibold"
                      >
                        Register
                      </button>
                      <button
                        onClick={handleLogin}
                        className="mb-2 md:mb-0 mr-0 md:mr-2 text-white bg-amber-400 py-4 px-12 hover:text-black rounded text-xl font-semibold"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                  <div className="w-2/5 md:w-1/2 flex justify-center md:justify-end rounded ">
                    <Image priority={true}
                     className="border-solid border-black border-1"
                     src={homePage} alt="group of people holding hands" />
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col items-center justify-center  w-full">
              

              <div className="w-full max-w-4xl px-24 pb-12 text-center mt-8  border-solid border-slate-800 border-x-2">
                <h1 className="text-5xl text-blue-900 leading-tight font-bold my-8">
                  Our Goal: Centralized Information for Easy Integration
                </h1>
                <p className="text-gray-700">
                  At Port Germany, our primary goal is to consolidate valuable
                  information in one accessible place, making it effortless for
                  immigrants and travelers to conduct research, seek guidance,
                  and engage with the community. We understand that every
                  question matters, and every piece of information contributes
                  to a smoother transition into a new chapter of life.
                </p>

                <h1 className="text-5xl text-blue-900 leading-tight font-bold my-8">
                  What We Offer: Your Comprehensive Resource Hub
                </h1>
                <p className="text-gray-700">
                  Our user-friendly platform invites you to register and join
                  our community, where you can connect with like-minded
                  individuals and access a wealth of resources at your
                  fingertips.
                </p>

                <h1 className="text-5xl text-blue-900 leading-tight font-bold my-8">
                  Together, We Build Bridges
                </h1>
                <p className="text-gray-700">
                  Port Germany is more than a platform; it's a community that
                  understands the importance of unity in diversity. Our
                  commitment is to empower you with the knowledge and support
                  needed to thrive in your new environment. Register today and
                  embark on a journey where information meets community,
                  creating a seamless integration experience for all. Welcome to
                  Port Germany – Where Your Journey Begins!
                </p>
              </div>

              <div className="w-full p-8 bg-white rounded-md shadow-md mt-16">
                <h1 className="text-3xl text-blue-900 font-bold text-center mb-4">
                  Disclaimer:
                </h1>
                <p className="text-sm text-gray-500 text-center p-8 m-">
                  The content presented on this website has been compiled and
                  created as a final project for the WBS course in Fullstack
                  Development by a student. While efforts have been made to
                  ensure accuracy and completeness, it is important to note that
                  the information provided may be subject to errors or
                  inaccuracies. This website is not intended to serve as
                  professional advice, and users are encouraged to independently
                  verify any information before relying on it.
                </p>
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

import { useState } from "react";
import Footer from '@/components/Footer';
import axios from 'axios';
import BreadCrumbs from "@/components/BreadCrumbs";
import { useRouter } from 'next/router';

export default function login() {
  
  const [email, setEmail]= useState("");
  const [password, setPassword]=useState("");
  const router = useRouter();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
  
      if (response.data) {
        console.log(response.data);
        console.log("ID", response.data.user._id);
  
        // Store user ID in local storage
        localStorage.setItem("userId", response.data.user._id);
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Store the entire user object if needed
        router.push(`/profile/${response.data.user._id}`);
      } else {
        console.log("Login failed. Additional details:", response.data.message);
        // Handle unsuccessful login (e.g., display an error message to the user)
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle other error scenarios
    }
  };

  const breadCrumbs =[
    {name: "Home", url: "/"},
    {name: "Log in", url: "/login"} 
    
  ]
  return (
   
      
    
      <div>
        <BreadCrumbs breadCrumbs={breadCrumbs}/>
        <section className="bg-white-100 dark:bg-white-800">
          <a
            href="#"
            className="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-black justify-center mt-16"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Warm hearts and open minds
          </a>
  
          <div className="flex flex-row items-center justify-around px-16 py-18 mx-auto md:h-screen lg:py-0 w-fit shadow-xl">
            <img
              className="hidden md:block"
              src="https://picsum.photos/450/440"
            ></img>
  
            <div className="w-full bg-white  shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className=" p-6 space-y-4 md:space-y-6 sm:p-8 bg-gradient-to-r from-cyan-600 to-blue-700 text-black text-left ">
                <h1 className=" text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-black">
                  Login here:
                </h1>
                <form  method="post" className="space-y-2 md:space-y-6" onSubmit={handleLogin}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                      type="password"
                      name="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{" "}
                        <a
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Login to an account
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-300">
                    You don't have an account? Join us!{" "}
                    <a
                      href="/register"
                      className="font-medium text-primary-00 hover:underline dark:text-primary-500"
                    >
                      Register!
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

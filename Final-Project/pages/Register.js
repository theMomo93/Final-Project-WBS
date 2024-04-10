import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
import Link from "next/link";
import React from "react";
import Footer from "@/Components/Footer";


export default function Register() {
  const [username, setUsername]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const router = useRouter();

  const errorToast=(message)=>{
    toast.error(message, {
      style:{
        borderLeft: '15px solid #960018'
      }
    })
   }
    const successToast = (message) => {
      toast.success(message, {
        style: {
          borderLeft: '15px solid #28a745'
        },
      });
    };

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted"); // Check if the form submission is triggered
  
    try {
      const response = await axios.post("https://portgermanyserver.onrender.com/users/register", {
        username,
        email,
        password,
      });
  
      if (response.data.success) {
        console.log("Response", response.data);
        successToast("Registration was successful!")
        router.push('/login');
      } else {
        // Handle unsuccessful registration
        console.log('Registration failed:', response.data.message);
        errorToast("Registration failed.!")
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      errorToast('Error during registration:', error.message);
    }
  }
  return (
    <div>
      <section className="bg-white-100 dark:bg-white-800">
        <a
          href="#"
          className="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-black justify-center mt-16"
        >
          <img
            className="w-10 h-10 mr-2 rounded-full"
            src="https://images.unsplash.com/photo-1630475338242-339bd74c449d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo blue background and yellow anchor"
          />
          Warm hearts and open minds
        </a>
        <div className="flex">
        <h1 className="m-auto text-xl ">
            Log in to access features such as Forum and Event
            Sharing!
          </h1>
         </div> 
        <div className="flex flex-row items-center justify-around px-16 py-18 mx-auto md:h-screen lg:py-0 w-fit shadow-xl">
          <img 
          className="hidden md:block custom-Image2"
           src="https://images.unsplash.com/photo-1607000975574-0b425df6975a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="writing -go for it in wooden scrabble piece" />

          <div className="w-full bg-white shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-gradient-to-r from-cyan-600 to-blue-700 text-black text-left">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-black">
                Register here:
              </h1>
              <form method="post" className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
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
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{' '}
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
                  className="w-full text-white bg-amber-400 hover:bg-amber-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-300">
                  Do you already have an account?{' '}
                  <Link
                    href="/Login"
                    className="font-medium text-primary-00 hover:underline dark:text-primary-500"
                  >
                    Log in here!
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
   <Footer/>
    </div>
  );
}

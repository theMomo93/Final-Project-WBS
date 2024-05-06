import { useContext, useState } from "react";
import axios from "axios";
import BreadCrumbs from "@/Components/BreadCrumbs";
import { useRouter } from "next/router";
import { UserContext } from "@/contexts/UserContext";
import Link from "next/link";
import React from "react";
import Footer from "@/Components/Footer";
import { toast } from 'react-hot-toast';



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
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
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://portgermanyserver.onrender.com/users/login", {
        email,
        password,
      });

      if (response.data.success) {
        console.log(response.data.user);
        setUser(response.data.user);
        successToast("Login Successful! Welcome!")
        // Store user data in localStorage

        localStorage.setItem("User", JSON.stringify(response.data.user));
        localStorage.setItem("UserId", response.data.user._id);

        // Navigate to the user's profile and reload the page
        router.push(`/profile/${response.data.user._id}`);
      } else {
        console.error("Invalid response format:", response.data);
        errorToast("Invalid Email or Password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      errorToast("An error occurred during login, try again later");
    }
  };

  const breadCrumbs = [
    { name: "Home", url: "/" },
    { name: "Log in", url: "/Login" },
  ];
  return (
    <div>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <section className="bg-white-100 dark:bg-white-800 p-2">
        <a
          href="#"
          className="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-black justify-center mt-16"
        >
          <img
            className="w-10 h-10 mr-2 rounded-full"
            src="https://images.unsplash.com/photo-1630475338242-339bd74c449d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo"
          />
          Warm hearts and open minds
        </a>
        <div className="flex">
          {" "}
          <h1 className="m-auto text-xl">
            Log in to access features such as Forum and Event
            Sharing!
          </h1>
        </div>
        <div className="p-2 bg-gray-50 flex flex-row items-center justify-around px-8  mx-auto md:h-screen bg-gray-50 lg:py-0 w-fit shadow-2xl">
          <img
            
            className="hidden md:block  custom-Image"
            src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>

          <div className="w-full bg-white  shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className=" p-6 space-y-4 md:space-y-6 sm:p-8 bg-gradient-to-r from-cyan-600 to-blue-700 text-black text-left ">
              <h1 className=" text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-black">
                Login here:
              </h1>
              <form
                method="post"
                className="space-y-2 md:space-y-6"
                onSubmit={handleLogin}
              >
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
                  <div className="ml-3 text-sm">
                 <Link href="/forgotPassword" className="text-white hover:underline" >Forgot Password?/</Link>

                  </div>
                  
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-amber-400 hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login to an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-300">
                  You do not have an account? Join us!{" "}
                  <Link
                    href="/Register"
                    className="font-medium text-primary-00 hover:underline dark:text-primary-500"
                  >
                    Register!
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

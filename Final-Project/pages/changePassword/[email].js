import { useState } from "react";
import Footer from "@/Components/Footer";
import axios from "axios";

export default function ChangePassword() {
  
  const[password, setPassword]=useState("");

  const handleSend = async () => {
        try {
      const response = await axios.post(
        "https://portgermanyserver.onrender.com/users/changePassword",
        { password }
      );
      if (response.data.success) {
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error sending forgot password request:", error);
      // Handle error
    }
  };


  return (
    <div>
      <section className="bg-white-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-blue-950 dark:border-gray-700 sm:p-8">
            <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Type Your New Password below
            </h1>
            
            <div className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="submit">
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your new Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  type="password"
                  name="password"
                  id="password" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
            </div>
            <button
              onClick={handleSend}
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

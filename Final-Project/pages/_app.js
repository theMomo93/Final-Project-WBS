import Navbar from "../Components/Navbar"
import '@/styles/globals.css'
import { UserProvider } from "../contexts/UserContext.js";
import {  Poppins  } from "@next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "@/Components/Footer";



const poppins = Poppins({
  subsets: ["latin"],
  weight:["400", "700"],
})


function MyApp({ Component, pageProps }) {
  return (
    <>
      
    <UserProvider>
   
    <main className={poppins.className}>
    <Toaster position="top-center" />
       <Navbar />
     
      <Component {...pageProps} />
    </main>  
    <Footer/>
    </UserProvider>
    </>
  );
}

export default MyApp;
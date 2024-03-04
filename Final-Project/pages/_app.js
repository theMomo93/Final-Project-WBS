import Navbar from "../components/Navbar"
import '@/styles/globals.css'
import { UserProvider } from "../contexts/UserContext";
import { Montserrat, Poppins, Merriweather, Ubuntu } from "@next/font/google";
import { Toaster } from "react-hot-toast";



const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight:["400", "700"],
})
const merriweather = Merriweather({
  subsets: ["latin"],
  weight:["400", "700"],
})
const poppins = Poppins({
  subsets: ["latin"],
  weight:["400", "700"],
})
const ubuntu = Ubuntu({
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
    </UserProvider>
    </>
  );
}

export default MyApp;
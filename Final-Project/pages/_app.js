import Navbar from "../components/Navbar"
import '@/styles/globals.css'
import { UserProvider } from "../contexts/UserContext";
import { Montserrat, Poppins, Merriweather, Ubuntu } from "@next/font/google";


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
       <Navbar />
      <Component {...pageProps} />
    </main>  
    </UserProvider>
    </>
  );
}

export default MyApp;
import Navbar from "../components/Navbar"
import '@/styles/globals.css'
import { UserProvider } from "../contexts/UserContext";



function MyApp({ Component, pageProps }) {
  return (
    <>
      
    <UserProvider>
    <Navbar/>
      <Component {...pageProps} />
    </UserProvider>
    </>
  );
}

export default MyApp;
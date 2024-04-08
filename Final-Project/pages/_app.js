import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress'; // Import the nprogress library
import 'nprogress/nprogress.css'; // Import the nprogress styles
import Navbar from "../Components/Navbar";
import '@/styles/globals.css';
import { UserProvider } from "../contexts/UserContext.js";
import { Toaster } from "react-hot-toast";
import Footer from "@/Components/Footer";

// Show loading progress bar on route change
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <main>
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

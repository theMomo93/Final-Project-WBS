import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
// _app.js
import React from 'react';
import { UserProvider } from '@/contexts/userContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Navbar/>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;

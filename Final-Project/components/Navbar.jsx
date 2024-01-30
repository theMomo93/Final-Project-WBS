// components/Navbar.js
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isGoogleTranslateScriptLoaded, setIsGoogleTranslateScriptLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [storedUserId, setStoredUserId] = useState(null);  // Declare storedUserId state
  const router = useRouter();

  useEffect(() => {
    // Retrieve userId from local storage
    const userIdFromStorage = localStorage.getItem('userId');
    if (userIdFromStorage) {
      // Do something with userId
      console.log('User ID:', userIdFromStorage);
      setStoredUserId(userIdFromStorage);  // Set storedUserId state
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false); // Set to false if userId is not present
    }

    // Check if the Google Translate script is already loaded
    if (!isGoogleTranslateScriptLoaded && (!window.google || !window.google.translate)) {
      // Check if the script element already exists
      const existingScript = document.getElementById('google-translate-script');

      if (!existingScript) {
        const addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        addScript.id = 'google-translate-script';
        document.body.appendChild(addScript);
        addScript.onload = () => {
          window.googleTranslateElementInit = googleTranslateElementInit;
          setIsGoogleTranslateScriptLoaded(true);
        };
      }
    }
  }, [isGoogleTranslateScriptLoaded]);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout,
      },
      'google_translate_element'
    );
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
    setStoredUserId(null);  // Reset storedUserId state
    router.push('/');
  };

  return (
    <nav className="bg-gradient-to-r from-cyan-900 to-blue-950">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <img src="https://picsum.photos/100/100?grayscale" alt="" className="rounded-3xl mr-8" />
        <Link href="/" className="m-0 text-white text-2xl font-bold">
          Warm Hearts and Open Minds
        </Link>

        <div className="space-x-4 mt-3">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="/forum" className="text-white">
            Forum
          </Link>
          <Link href="/information" className="text-white">
            Information
          </Link>
          <Link href="/aboutus" className="text-white">
            About us
          </Link>

          {isLoggedIn ? (
            <>
              <Link href={`/profile/${storedUserId}`} className="text-white">
                Profile
              </Link>
              <span className="text-white cursor-pointer" onClick={handleLogout}>
                Logout
              </span>
            </>
          ) : (
            <>
              <Link href="/register" className="text-white">
                Register
              </Link>
              <Link href="/login" className="text-white">
                Log in
              </Link>
            </>
          )}

          <hr className="m-4" />
          <div id="google_translate_element" className="google-translate-dropdown"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

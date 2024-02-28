import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import Image from "next/image";
import logoPort from "../img/logoPort.png"


const Navbar = () => {
  const [isGoogleTranslateScriptLoaded, setIsGoogleTranslateScriptLoaded] =
    useState(false);
  const [storedUserId, setStoredUserId] = useState("");
  const router = useRouter();
  
  useEffect(() => {
    // Retrieve userId from local storage
    const userId = localStorage.getItem("userId");

    if (userId) {
      // Set userId state
      setStoredUserId(userId);
      
    }

    // Check if the Google Translate script is already loaded
    if (
      !isGoogleTranslateScriptLoaded &&
      (!window.google || !window.google.translate)
    ) {
      // Check if the script element already exists
      const existingScript = document.getElementById("google-translate-script");

      if (!existingScript) {
        const addScript = document.createElement("script");
        addScript.setAttribute(
          "src",
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        addScript.id = "google-translate-script";
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
        pageLanguage: "en",
        layout: google.translate.TranslateElement.InlineLayout,
      },
      "google_translate_element"
    );

  };

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem("socialUser");
    localStorage.removeItem("userId");
    
    // Redirect to the login page or any other desired page
    console.log(router)
    router.push('/').then(() => {
      // This code will run after the navigation is complete
      location.reload();
    });
  };
 
  return (
    <nav className="bg-gradient-to-r from-cyan-900 to-blue-950 shadow-lg">
      <div className="container mx-auto flex justify-between items-center flex-wrap px-16 ">
        <Image src={logoPort} width={"200"}/>
        <div className="m-0 text-white text-4xl font-bold">
          Warm Hearts and Open Minds
        </div>

        <div className="space-x-4 mt-3">
          <Link href="/" className="text-white hover:animate-pulse">
          
            Home 
          </Link>
          <Link href="/forum" className="text-white hover:animate-pulse">
            Forum
          </Link>
          <Link href="/information" className="text-white hover:animate-pulse">
            Information
          </Link>
          <Link href="/aboutus" className="text-white hover:animate-pulse">
            About us
          </Link>

          {storedUserId ? (
  <>
    <Link href={`/profile/${storedUserId}`} className="text-white hover:animate-pulse">
      User Profile
    </Link>
    
    <button onClick={handleLogout} className="text-white cursor-pointer hover:animate-pulse">
      Logout
    </button>
  </>
) : (
  <>
    <Link href="/register" className="text-white hover:animate-pulse">
      Register
    </Link>
    <Link href="/login" className="text-white hover:animate-pulse">
      Log in
    </Link>
  </>
)}

          <hr className="m-4" />
          <div
            id="google_translate_element"
            className="google-translate-dropdown"
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

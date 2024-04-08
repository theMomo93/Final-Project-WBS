import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { UserContext } from "@/contexts/UserContext";

const Navbar = () => {
  const [isGoogleTranslateScriptLoaded, setIsGoogleTranslateScriptLoaded] =
    useState(false);
  const [storedUserId, setStoredUserId] = useState("");
  const { user, setUser } = useContext(UserContext);
  const router = useRouter(); // Moved the declaration here

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      setStoredUserId(userId);
    }

    if (
      !isGoogleTranslateScriptLoaded &&
      (!window.google || !window.google.translate)
    ) {
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
    localStorage.removeItem("User");
    localStorage.removeItem("userId");
    setUser({});
    router.push('/');
  };

  return (
    <nav className="bg-gradient-to-r from-cyan-900 to-blue-950 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-6 lg:px-16">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
            className="w-16 h-16 mr-2 rounded-full border border-solid border-1 border-black"
            src="https://images.unsplash.com/photo-1630475338242-339bd74c449d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo"
          />
          <div className="text-white text-4xl font-bold">
            Warm Hearts and Open Minds
          </div>
        </div>
        
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>

        <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${mobileMenuOpen ? "block" : "hidden"}`}>
          <div className="text-sm lg:flex-grow">
            <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:animate-pulse mr-4">
              Home
            </Link>
            <Link href="/Forum" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:animate-pulse mr-4">
              Forum
            </Link>
            <Link href="/Information" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:animate-pulse mr-4">
              Information
            </Link>
            <Link href="/AboutUs" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:animate-pulse mr-4">
              About us
            </Link>
          </div>
          <div>
            {user?._id ? (
              <>
                <Link href={`/profile/${user?._id}`} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:animate-pulse mr-4">
                  User Profile
                </Link>
                <button onClick={handleLogout} className="block mt-4 lg:inline-block lg:mt-0 text-white cursor-pointer hover:animate-pulse mr-4">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/Register" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:animate-pulse mr-4">
                  Register
                </Link>
                <Link href="/Login" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:animate-pulse mr-4">
                  Log in
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

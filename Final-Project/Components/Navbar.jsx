import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { UserContext } from "@/contexts/UserContext";

const Navbar = () => {
  const [isGoogleTranslateScriptLoaded, setIsGoogleTranslateScriptLoaded] =
    useState(false);
  const [storedUserId, setStoredUserId] = useState("");
  const { user, setUser } = useContext(UserContext);

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

  const router = useRouter(); // Moved the declaration here

  return (
    <nav className="bg-gradient-to-r from-cyan-900 to-blue-950 shadow-lg">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
        <img
          className="w-12 h-12 sm:w-16 sm:h-16 mr-2 rounded-full border border-solid border-1 border-black"
          src="https://images.unsplash.com/photo-1630475338242-339bd74c449d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="logo"
        />
        <div className="m-0 text-white text-lg sm:text-2xl font-bold">
          Warm Hearts and Open Minds
        </div>
  
        {user?.profileImage && (
          <img
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mt-2 sm:mt-0 object-cover"
            src={user?.profileImage}
            alt="profile"
          />
        )}
  
        <div className="mt-3 w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end space-y-2 sm:space-x-4 sm:space-y-0">
            <Link href="/" className="text-white hover:animate-pulse">
              Home
            </Link>
            <Link href="/Forum" className="text-white hover:animate-pulse">
              Forum
            </Link>
            <Link href="/Information" className="text-white hover:animate-pulse">
              Information
            </Link>
            <Link href="/AboutUs" className="text-white hover:animate-pulse">
              About us
            </Link>
  
            {user?._id ? (
              <>
                <Link
                  href={`/profile/${user?._id}`}
                  className="text-white hover:animate-pulse"
                >
                  User Profile
                </Link>
  
                <button
                  onClick={handleLogout}
                  className="text-white cursor-pointer hover:animate-pulse"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/Register" className="text-white hover:animate-pulse">
                  Register
                </Link>
                <Link href="/Login" className="text-white hover:animate-pulse">
                  Log in
                </Link>
              </>
            )}
          </div>
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

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";



const withAuth = (WrappedComponent) => {
    const Auth = (props) => {
      const router = useRouter();
  

      

      useEffect(() => {
        // Check if the user is authenticated
        const user = JSON.parse(localStorage.getItem("User"));
  
        if (!user) {
          // Redirect to the login page with a query parameter or state
          router.replace("/login");
        }
      }, [router]);
  
      return <WrappedComponent {...props} />;
    };
  
    return Auth;
  };
  
  export default withAuth;

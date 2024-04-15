import { useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";

const errorToast = (message) => {
  toast.error(message, {
    style: {
      borderLeft: "15px solid #960018",
    },
  });
};
const successToast = (message) => {
  toast.success(message, {
    style: {
      borderLeft: "15px solid #28a745",
    },
  });
}

const withAuth = (WrappedComponent) => {
    const Auth = (props) => {
      const router = useRouter();
  

      

      useEffect(() => {
        // Check if the user is authenticated
        const user = JSON.parse(localStorage.getItem("User"));
  
        if (!user) {
          // Redirect to the login page with a query parameter or state
          router.replace("/Login");
          errorToast("Please Register and/ or  Login to access Forum");
        }
      }, [router]);
  
      return <WrappedComponent {...props} />;
    };
  
    return Auth;
  };
  
  export default withAuth;

import { useEffect } from "react";
import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
    const Auth = (props) => {
      const router = useRouter();
  
      useEffect(() => {
        // Check if the user is authenticated
        const userId = localStorage.getItem("userId");
  
        if (!userId) {
          // Redirect to the login page if not authenticated
          router.replace("/login");
        }
      }, []);
  
      return <WrappedComponent {...props} />;
    };
  
    return Auth;
  };
  
  export default withAuth;

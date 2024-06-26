import React, { useState, useEffect, useContext } from 'react';

import { UserContext } from '@/contexts/UserContext';
import { toast } from 'react-hot-toast';
import { useRouter } from "next/navigation";
import Footer from '@/Components/Footer';

const UserProfile = () => {
 
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const router = useRouter();

  const{user, setUser}=useContext(UserContext); // THIS IS IMPORTANT STUFF RIGHT

  const errorToast=(message)=>{
    toast.error(message, {
      style:{
        borderLeft: '15px solid #960018'
      }
    })
   }
    const successToast = (message) => {
      toast.success(message, {
        style: {
          borderLeft: '15px solid #28a745'
        },
      });
    };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("User"));
    const storedUserId = localStorage.getItem("UserId");
  console.log("StoredUser", storedUser)
  console.log("storedUserId",storedUserId)
    if (storedUserId) {
      setUserId(storedUserId);
    }
  
    // If you want to set the user in the state as well
    if (storedUser) {
      setUser(storedUser);
    }

    
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleImageUpload = async () => {
    const storedUserId = localStorage.getItem("UserId");
    try {
      console.log("storedUserId in Image", storedUserId);
      const formData = new FormData();
      formData.append("profileImage", image);

      const response = await fetch(`https://portgermanyserver.onrender.com/users/add/image/${storedUserId }`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setUser((prevUser) => ({ ...prevUser, profileImage: result.profileImage }));
      
        // Update local storage with the new user data
        localStorage.setItem("User", JSON.stringify({ ...user, profileImage: result.profileImage }));
        successToast("Image added successfully");
      
      
      } else {
        console.error("Failed to upload image");
        errorToast("Failed to upload Image: try again later!")
      }
    } catch (error) {
      console.error("Error during image upload:", error.message);
      errorToast("Failed to upload Image: server side error!")
    }
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }
  const handleDeleteUser = async () => {
    try {
            const response = await fetch(`https://portgermanyserver.onrender.com/users/delete/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Clear user data from local storage and context
        localStorage.removeItem("User");
        localStorage.removeItem("UserId");
        setUser(null);
        successToast("User deleted successfully!");
        router.push("/")
      } else {
        // Handle error response
        errorToast("Failed to delete user");
      }
    } catch (error) {
      console.error("Error during user deletion:", error.message);
      errorToast("Failed to delete user: server side error!");
    }
  };

  
  
  return (
    <>
    <div className="flex items-center justify-center mt-16 mb-16 ">
      <div className="bg-white shadow-xl rounded-lg border w-2/3 w-fit h-fit">
        <div className="px-4 py-5 sm:px-6 bg-gray-50">
          <div className=' '>
          <div className='max-w-lg mx-auto'>
            <h3 className='block bg-amber-400  mb-4 text-sm font-medium text-black dark:text-gray-700 p-4 rounded font-semibold'>Add Image:</h3>
            <input className='mb-4 p-8 block w-full text-sm text-black border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400' type="file" accept="image/*" onChange={handleImageChange} />
            <button className='mb-12 bg-amber-400 p-4 rounded text-white hover:text-black' onClick={handleImageUpload}>Upload Image</button>
          </div>
        </div>
          <h3 className="text-4xl font-bold text-gray-900 bg-amber-400 p-6 text-center">
            User Profile:
          </h3>
          <div className='flex items-center justify-center'>
          
            <img
              src={user?.profileImage}
              alt="User Profile"
              width="200"
              height="200"
              className="rounded-full m-12 p-2 mx-auto"
        
            />
            
          </div>
        </div>
        
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0 bg-gray-50">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-xl font-medium text-black-500 mr-4">
                Username:
              </dt>
              <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.username}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-xl font-medium text-black-500 mr-4">
                Email address:
              </dt>
              <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.email}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-xl font-medium text-black-500 mr-4">
                User ID
              </dt>
              <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                {userId}
              </dd>
              <button
              className='my-4 bg-blue-950 text-white p-2 rounded hover:text-red'
               onClick={handleDeleteUser}>Delete Account</button>
            </div>
            
          </dl>
        </div>
      </div>
      
    </div>
<Footer/>
    </>
  );
};

export default UserProfile;

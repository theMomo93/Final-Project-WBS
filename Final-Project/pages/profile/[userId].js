import React, { useState, useEffect, useContext } from 'react';
import Footer from '@/components/Footer';
import { UserContext } from '@/contexts/UserContext';
import { toast } from 'react-hot-toast';


const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);


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

    //const fetchUserData = async () => {
    //  try {
     //   const response = await fetch(`http://localhost:5000/users/id/${storedUserId}`);
     //   if (response.ok) {
     //     const userData = await response.json();
     //     console.log("User Data:", userData);
     //     setUserData(userData);
     //   } else {
     //     console.error('Failed to fetch user data');
     //   }
     // } catch (error) {
     //   console.error('Error during fetch:', error.message);
     // } finally {
    //    setLoading(false);
    //  }
   // };

   // if (storedUserId) {
     // fetchUserData();
   // }
    
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

      const response = await fetch(`http://localhost:5000/users/add/image/${storedUserId }`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Result",result); 
        console.log("Profile Image URL:", user?.profileImage);
        successToast("Image added successfully")
      
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

  return (
    <>
    <div className="flex items-center justify-center mt-16 mb-16 ">
      <div className="bg-white shadow-xl rounded-lg border w-2/3 w-fit h-fit">
        <div className="px-4 py-5 sm:px-6 bg-gray-50">
          <div className=' '>
          <div>
            <h3>Add Image:</h3>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button className='mb-12 bg-amber-400 p-4 rounded text-white hover-text-black' onClick={handleImageUpload}>Upload Image</button>
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
              className="rounded-full m-12 p-2 mx-auto bg-amber-300"
        
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

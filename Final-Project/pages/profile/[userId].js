// pages/profile/[userId].js
import { useRouter } from 'next/router';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from "@/contexts/userContext";

const UserProfile = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [userData, setUserData] = useState(null);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/user/${userId}`);

        if (response.ok) {
          const userData = await response.json();
          setUserData(userData);
          setUser(userData);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error during fetch:', error.message);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId, setUser]);

  if (!userId || userData === null) {
    
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome {userData.username} </h1>
      <p>User ID: {userId}</p>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>
      {/* Add other fields as needed */}
    </div>
  );
};

export default UserProfile;

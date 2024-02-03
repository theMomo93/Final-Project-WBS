import { useState, useEffect } from 'react';

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");

    console.log("Stored User ID:", storedUserId);

    const storedUser = localStorage.getItem("user");
    if (storedUserId) {
      setUserId(storedUserId);
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users/id/${storedUserId}`);
        if (response.ok) {
          const userData = await response.json();
          console.log("User Data:", userData); // Log the user data
          setUserData(userData);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error during fetch:', error.message);
      } finally {
        setLoading(false);
      }
    };

    if (storedUserId) {
      fetchUserData();
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome {userData.user.username} </h1>
      <p>User ID: {userId}</p>
      {/* Check the structure of userData and update accordingly */}
      <p>Username: {userData.user.username}</p>
      <p>Email: {userData.user.email}</p>
      {/* Add other fields as needed */}
    </div>
  );
};

export default UserProfile;

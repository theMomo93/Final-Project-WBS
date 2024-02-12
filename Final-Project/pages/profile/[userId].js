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
    
    <div className="flex items-center justify-center mt-16">
    <div className="bg-white shadow-xl rounded-lg border w-2/3 w-fit h-fit">
    <div className="px-4 py-5 sm:px-6">
        <h3 className="text-4xl font-bold  text-gray-900 bg-amber-400 p-6">
            User Profile
        </h3>
        <p className="mt-1 max-w-2xl text-m text-black-500">
            Your Information:
        </p>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-xl font-medium text-black-500 mr-4 ">
                    Username:
                </dt>
                <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                {userData.user.username}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-xl font-medium text-black-500 mr-4">
                    Email address:
                </dt>
                <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                {userData.user.email}
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
    
  );
};

export default UserProfile;

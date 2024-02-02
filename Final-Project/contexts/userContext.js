import React, { createContext, useContext, useState } from 'react';


export const  UserContext = createContext(null);

export const UserProvider = ({ children, initialUser = null }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const responseData = await loginUser(email, password);

    if (responseData.userId) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userId', responseData.userId);
      setUser(responseData); 
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
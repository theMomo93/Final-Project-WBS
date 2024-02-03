import React, { createContext, useState } from 'react';


export const  UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

    async (email, password) => {
    const responseData = await (email, password);

    if (responseData) {
      localStorage.setItem('userId', responseData.userId);
      
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
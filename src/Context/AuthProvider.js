import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };

     const logInUser = (email, password) => {
       setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
    };
    
     const logOutUser = () => {
       setLoading(true);
       return signOut(auth);
     };
    
    

  const authInfo = {
    loading,
    setLoading,
    user,
    setUser,
    createUser,
    logInUser,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

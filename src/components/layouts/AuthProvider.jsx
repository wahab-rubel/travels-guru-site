import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase.config'


export const AuthContext = createContext(null)


function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  


  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }


  useEffect(() =>{
   const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
      console.log("current User", currentUser)
      setUser(currentUser)
    })
    return () =>{
      unSubscribe();
    }
  })


  // onAuthStateChanged(auth, currentUser => {
  //   if(currentUser){
  //     console.log("currently Loggin User")
  //     setUser(currentUser);
  //   }
  //   else{
  //     console.log("No User login in")
  //     setUser(null)
  //   }
  // })


    const authInfo = {
      user,
      createUser,
      signInUser

    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

import React, { useState,useEffect } from 'react';
import { createContext } from 'react';
import app from '../firebase.config';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification,signInWithPopup,onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


//createContext
const Context=createContext();


const AuthContext = ({children}) => {
    //user tracking state
    const [user,setUser]=useState(null);
    //auth
    const auth=getAuth(app);
    //creating User With Email And Password
    const userWithEmailAndPassword=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);
    };
    //creating User With Google
    const provider = new GoogleAuthProvider();
    const userWithGoogle=()=>{
        return signInWithPopup(auth, provider);
    };
    //adding full name and img
    const addingNameAndImage=(name,img)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: img
          });
    };
    //Email Varification
    const emailVarification=()=>{
         sendEmailVerification(auth.currentUser)
         .then(()=>{})
    };
    //tarck user
    useEffect(()=>{
        onAuthStateChanged(auth, (users) => {
            setUser(users);
        });
    },[]);
    //Context Value
    const contextValue={userWithEmailAndPassword,userWithGoogle,addingNameAndImage,emailVarification,user};
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export {AuthContext,Context};
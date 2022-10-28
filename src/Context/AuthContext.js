import React, { useState,useEffect } from 'react';
import { createContext } from 'react';
import app from '../firebase.config';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification,signInWithPopup,onAuthStateChanged,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


//createContext
const Context=createContext();


const AuthContext = ({children}) => {
    //user tracking state
    const [user,setUser]=useState(null);
    //location tracking state
    const [locationFrom,setLocationFrom]=useState({});
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
    const emailVerification=()=>{
         sendEmailVerification(auth.currentUser)
         .then((res)=>{
            console.log(res.user);
         })
    };
    //tarck user
    useEffect(()=>{
        onAuthStateChanged(auth, (users) => {
            setUser(users);
        });
    },[]);
    //login user
    const userLogin = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    };
    //logout user
    const userLogOut = ()=>{
        signOut(auth).then(() => {
            
          }).catch((error) => {
            
          });
    };
    //Context Value
    const contextValue={userWithEmailAndPassword,userWithGoogle,addingNameAndImage,emailVarification: emailVerification,user,userLogin,userLogOut,locationFrom,setLocationFrom};
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export {AuthContext,Context};
import React, { useState,useEffect } from 'react';
import { createContext } from 'react';
import app from '../firebase.config';
import { getAuth, createUserWithEmailAndPassword, updateProfile,signInWithPopup,onAuthStateChanged,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

//createContext
const Context=createContext();


const AuthContext = ({children}) => {
    //loading state
    const [loading,setLoading]=useState(true);
    //user tracking state
    const [user,setUser]=useState(null);
    //location tracking state
    const [locationFrom,setLocationFrom]=useState({}); 
    //auth
    const auth=getAuth(app);
    //creating User With Email And Password
    const userWithEmailAndPassword=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    };
    //creating User With Google
    const provider = new GoogleAuthProvider();
    const userWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    };
    //adding full name and img
    const addingNameAndImage=(name,img)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: img
          });
    };
    //login user
    const userLogin = (email,password)=>{
        setLoading(true); 
        return signInWithEmailAndPassword(auth, email, password);
    };
    //logout user
    const userLogOut = ()=>{
        setLoading(true);
        signOut(auth).then(() => {
            
          }).catch((error) => {
            
          });
    };
    //github login
    const githubLogin = ()=>{
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    };
    //track user
    useEffect(()=>{
        onAuthStateChanged(auth, (users) => {
            setUser(users); 
            setLoading(false);  
        });
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    //Context Value
    const contextValue={userWithEmailAndPassword,userWithGoogle,addingNameAndImage,user,userLogin,userLogOut,locationFrom,setLocationFrom,loading,githubLogin};
    console.log(locationFrom)
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export {AuthContext,Context};
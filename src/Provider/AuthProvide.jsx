import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext =createContext(null)
const auth = getAuth(app);
const AuthProvide = ({children}) => {
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)

     const createUser =(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }
     const googleSignIn =()=>{
        setLoader(true)
        return signInWithPopup(auth,GoogleAuthProvider)
    }
     const signIn =(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
     }
     const loginOut = ()=>{
        setLoader(true)
        return signOut(auth)
    }
    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,currentUser=>{
             setLoader(false)
            console.log('check user',currentUser)
            setUser(currentUser)
            
        })
        return ()=>{
            
            unSubscribe()
        } 
    },[])
    const authInfo ={
        user,
        loader,
        createUser,
        signIn,
        loginOut,
        googleSignIn
    }
    return (
        
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvide;
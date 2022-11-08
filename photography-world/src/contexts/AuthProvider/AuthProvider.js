import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //signin with google
    const signInByGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    //signin with email and password 
    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //signup with email password 
    const emPasSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //signout user
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth);
    }
    //get current user data
    useEffect(() => {
        const un = onAuthStateChanged(auth, (cUser) => {
            setLoading(false)
            setUser(cUser);
        });
        return () => un();
    }, [])



    //passing all of the variable and functions 
    const authInfo = {
        user,
        signInByGoogle,
        logoutUser,
        emPasSignUp,
        userSignIn,
        setLoading,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
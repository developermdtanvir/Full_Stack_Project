

import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.config';

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app)

    /*-----------------------------------------------------------------
     Sign in With email password and google provider and Github Provider
     ------------------------------------------------------------------ */
    const createUser = (emali, password) => {
        return createUserWithEmailAndPassword(auth, emali, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignUp = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }
    const gitHubSignUp = () => {
        const gitHubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, gitHubProvider)
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            return () => {
                return unsubcribe();
            }
        })
    }, [])

    const authInfo = {
        createUser,
        googleSignUp,
        gitHubSignUp,
        loginUser,
        user,
        loading
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

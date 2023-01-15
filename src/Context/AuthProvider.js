

import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import { app } from '../Firebase/Firebase.config';

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const auth = getAuth(app)

    /*-----------------------------------------------------------------
     Sign in With email password and google provider and Github Provider
     ------------------------------------------------------------------ */
    const createUser = (emali, password) => {
        return createUserWithEmailAndPassword(auth, emali, password)
    }
    const googleSignUp = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }
    const gitHubSignUp = () => {
        const gitHubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, gitHubProvider)
    }

    const authInfo = {
        createUser,
        googleSignUp,
        gitHubSignUp
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

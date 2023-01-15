import React, { useContext, useState } from 'react';

import { AuthContext } from '../../Context/AuthProvider';
import { SignUpItem } from './SignUpItem';

export const SignUp = () => {
    const { createUser, googleSignUp, gitHubSignUp } = useContext(AuthContext)

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })
    const handleBlur = e => {
        let isValid;
        if (e.target.name === 'email') {
            isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(e.target.value)
        }
        if (isValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);

        }
    }
    const handleSubmit = e => {
        createUser(user.email, user.password)
            .then(res => {
                console.log(res);
            })
            .then(error => console.log(error));
        e.preventDefault()
    }
    console.log(user.email, user.password);
    const googleRegister = () => {
        googleSignUp()
            .then(res => {
                console.log(res);
                const { displayName, email } = res.user;
                const newUserInfo = { ...user };
                newUserInfo.name = displayName
                newUserInfo.email = email;
                setUser(newUserInfo)
                console.log(displayName);
            });
    }
    const githubRegister = () => {
        gitHubSignUp()
            .then(res => console.log(res))
    }
    return (
        <div className="hero min-h-screen my-10 bg-base-200">
            <SignUpItem handleSubmit={handleSubmit} handleBlur={handleBlur}
                githubRegister={githubRegister} googleRegister={googleRegister} />
        </div>
    )
}

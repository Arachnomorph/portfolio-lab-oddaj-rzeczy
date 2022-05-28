import React from "react";
import {useNavigate} from 'react-router-dom';
import {useForm} from "react-hook-form";
import {signInWithEmailAndPassword, getAuth} from "firebase/auth";

const LogIn = () => {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const newUser = (data) => {
        const auth = getAuth();
        const email = data.email;
        const password = data.password;

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user)
            })
            .then(() => {
                if (data !== null) {
                    navigate('/')
                }
            })
            .catch(error => {
                const errorCode = error.code;
                console.log(errorCode)
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    return (
        <form onSubmit={handleSubmit(newUser)} className={'register'}>
            <input type='email' {...register('email', {required: true})}/>
            <input type='password' {...register('password', {required: true})}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default LogIn;
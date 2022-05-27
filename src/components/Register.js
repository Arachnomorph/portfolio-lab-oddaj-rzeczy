import React from "react";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {useForm} from "react-hook-form";

const Register = () => {

    const {register, handleSubmit} = useForm();

    const newUser = (data) => {
        const auth = getAuth();
        const email = data.email;
        const password = data.password;

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user)
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

export default Register;
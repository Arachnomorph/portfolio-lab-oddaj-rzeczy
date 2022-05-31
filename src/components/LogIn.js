import React from "react";
import {useNavigate} from 'react-router-dom';
import {useForm} from "react-hook-form";
import {signInWithEmailAndPassword, getAuth} from "firebase/auth";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const LogIn = () => {
    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required()
    }).required();

    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    });
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
                console.log(data);
            })
            .catch(error => {
                const errorCode = error.code;
                console.log(errorCode)
                const errorMessage = error.message;
                alert(errorMessage)
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
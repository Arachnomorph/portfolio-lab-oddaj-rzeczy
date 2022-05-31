import React from "react";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useNavigate} from "react-router-dom";

const Register = () => {
    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required()
    }).required();

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    console.log(errors);

    const navigate = useNavigate();

    const newUser = (data) => {
        const auth = getAuth();
        const email = data.email;
        const password = data.password;

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
            })
            .then(() => {
                if (data) {
                    navigate('/');
                }
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorMessage === '')
                    alert(errorMessage)
            })
    }

    return (
        <form noValidate onSubmit={handleSubmit(newUser)} className={'register'}>
            <div>
                <input type='email' {...register('email', {required: true})}/>
                <p>{errors?.email?.message}</p>
            </div>
            <input type='password' {...register('password', {required: true})}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Register;
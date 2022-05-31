import React from "react";
import {useNavigate} from "react-router-dom";
import {Link as RouterLink} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll'
import {getAuth, signOut} from "firebase/auth";

const Nav = () => {

    const navigate = useNavigate();
    const currentUser = getAuth().currentUser;
    const scrollSettings = {
        activeClass: 'active',
        smooth: 'easeInOutQuad',
        duration: 700,
    }

    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log('logged out')
        })
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    const AccManager = () => {
        if (!currentUser) {
            return (
                <div className='signIn'>
                    <RouterLink className='bigButton' to='/LogIn'>Zaloguj</RouterLink>
                    <RouterLink className='bigButton' to='/Register'>Załóż konto</RouterLink>
                </div>)
        }
        return (
            <div className='signIn'>
                {/*<span>Witaj {currentUser}</span>*/}
                <span className='bigButton' onClick={logOut}>Wyloguj</span>
            </div>)
    }

    return (
        <nav>
            <AccManager/>
            <div className='scrollNav'>
                <ScrollLink {...scrollSettings} to='HomeStart'>{/*<RouterLink to='/'>Start</RouterLink>*/}</ScrollLink>
                <ScrollLink {...scrollSettings} to='HomeSteps'>O co chodzi?</ScrollLink>
                <ScrollLink {...scrollSettings} to='HomeAboutUs'>O nas</ScrollLink>
                <ScrollLink {...scrollSettings} to='HomeOrgs'>Fundacja i Organizacje</ScrollLink>
                <ScrollLink {...scrollSettings} to='HomeContact'>Kontakt</ScrollLink>
            </div>
        </nav>
    )
}

export default Nav;
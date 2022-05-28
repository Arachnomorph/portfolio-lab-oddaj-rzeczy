import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll'

const Nav = () => {

    const scrollSettings = {
        activeClass: 'active',
        smooth: 'easeInOutQuad',
        duration: 700,
    }

    return (
        <nav>
            <div className='signIn'>
                <RouterLink to='/LogIn'>Zaloguj</RouterLink>
                <RouterLink to='/Register'>Załóż konto</RouterLink>
            </div>
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
import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll'

const HomeHeader = () => {

    return (
        <div className={'headerContainer'}>
            <RouterLink to='/LogIn'>Zaloguj</RouterLink>
            <RouterLink to='/Register'>Załóż konto</RouterLink>
            <nav>
                <RouterLink to='/'>Start</RouterLink>
                <ScrollLink activeClass='active' to='HomeSteps'>O co chodzi?</ScrollLink>
                <ScrollLink activeClass='active' to='HomeAboutUs'>O nas</ScrollLink>
                <ScrollLink activeClass='active' to='HomeOrgs'>Fundacja i Organizacje</ScrollLink>
                <ScrollLink activeClass='active' to='HomeContact'>Kontakt</ScrollLink>
            </nav>
            <div>
                <RouterLink to='/LogIn'>Oddaj Rzeczy</RouterLink>
                <RouterLink to='/LogIn'>Zorganizuj Zbiórkę</RouterLink>
            </div>
        </div>
)
}

export default HomeHeader;
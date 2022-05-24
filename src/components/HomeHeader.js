import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll'

const HomeHeader = () => {

    const options = {
        activeClass: 'active',
        smooth: true,
        duration: 500
    }

    return (
        <>
            <nav>
                <div className='signIn'>
                    <RouterLink to='/LogIn'>Zaloguj</RouterLink>
                    <RouterLink to='/Register'>Załóż konto</RouterLink>
                </div>
                <div className='scrollNav'>
                    <ScrollLink activeClass='active' to='HomeStart'><RouterLink to='/'>Start</RouterLink></ScrollLink>
                    <ScrollLink activeClass='active' to='HomeSteps'>O co chodzi?</ScrollLink>
                    <ScrollLink activeClass='active' to='HomeAboutUs'>O nas</ScrollLink>
                    <ScrollLink activeClass='active' to='HomeOrgs'>Fundacja i Organizacje</ScrollLink>
                    <ScrollLink to='HomeContact' {...options}>Kontakt</ScrollLink>
                </div>
            </nav>
            <div id='HomeStart' className='headerContainer'>
                <div className='bg'></div>
                <div className='cta'>
                    <span>
                        Zacznij pomagać!
                    </span>
                    <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                    <div className='decor'></div>
                    <div className='actions'>
                        <RouterLink className='bigButton' to='/LogIn'>Oddaj Rzeczy</RouterLink>
                        <RouterLink className='bigButton' to='/LogIn'>Zorganizuj {'\n'} Zbiórkę</RouterLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHeader;
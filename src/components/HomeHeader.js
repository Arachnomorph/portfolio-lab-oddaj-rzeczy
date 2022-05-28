import React from "react";
import {Link as RouterLink} from "react-router-dom";
import Nav from "./Nav";

const HomeHeader = () => {

    return (
        <>
            <Nav/>
            <div id='HomeStart' className='headerContainer'>
                <div className='bg'/>
                <div className='cta'>
                    <span>
                        Zacznij pomagać!
                    </span>
                    <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                    <div className='decor'/>
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
import React from "react";
import {Element} from "react-scroll";
import {Link as RouterLink} from "react-router-dom";

const HomeSteps = () => {

    return (
        <Element id='HomeSteps'>
            <div className={'stepsContainer'}>
                <h2>Wystarczą cztery proste kroki</h2>
                <div className='decor'></div>
                <div className='stepsColumns'>
                    <div className='stepsColumn'>
                        <span>Wybierz rzeczy</span>
                        <span>ubrania, zabawki, sprzęt i inne</span>
                    </div>
                    <div className='stepsColumn'>
                        <span>Spakuj je</span>
                        <span>skorzystaj z worków na śmieci</span></div>
                    <div className='stepsColumn'>
                        <span>Zdecyduj komu chcesz pomóc</span>
                        <span>wybierz zaufane miejsce</span></div>
                    <div className='stepsColumn'>
                        <span>Zamów kuriera</span>
                        <span>kurier przyjedzie w dogodnym terminie</span>
                    </div>
                </div>
                <RouterLink className='bigButton' to='/LogIn'>Oddaj Rzeczy</RouterLink>
            </div>
        </Element>
    )
}

export default HomeSteps;
import React from "react";
import {Element} from 'react-scroll'
import {foundations} from "../db";

const HomeOrgs = () => {

    return (
        <Element id='HomeOrgs'>
            <div className={'orgsContainer'}>
                <h2>Komu pomagamy?</h2>
                <div className='decor'></div>
                <div className='carousel'>
                    <div className='carouselSelect'>
                        <button>Fundacjom</button>
                        <button>Organizacjom pozarządowym</button>
                        <button>Lokalnym zbiórkom</button>
                    </div>
                    <div className='carouselSeats'>
                        {/*<p>{foundations[0]}</p>*/}
                        {foundations.map(foundation =>
                            <div>
                                <div>
                                    <p>{foundation.name}</p>
                                    <p>{foundation.goal}</p>
                                </div>
                                <p>{foundation.goods}</p>
                            </div>
                        )}
                    </div>
                    <div className='carouselPageSelect'>
                        <p>Simple page selector</p>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default HomeOrgs;
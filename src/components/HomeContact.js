import React from "react";
import {Element} from 'react-scroll';

const HomeContact = () => {

    const url = 'https://fer-api.coderslab.pl/v1/portfolio/contact';



    return (
        <Element id='HomeContact'>
            <div className={'contactContainer'}>
                <div className='bg'/>
                <div className='column'>
                    <h2>Skontaktuj się z nami</h2>
                    <div className='decor'/>
                    <form>
                        <div className='data'>
                            <div className='contactName'>
                                <span>Wpisz swoje imię</span>
                                <input type='text'/>
                            </div>
                            <div className='contactEmail'>
                                <span>Wpisz swój email</span>
                                <input type='email'/>
                            </div>
                        </div>
                        <span>Wpisz swoją wiadomość</span>
                        <input type='message'/>
                        <button>Wyślij</button>
                    </form>
                </div>
            </div>
        </Element>
    )
}

export default HomeContact;
import React from "react";

const HomeStats = () => {

    return (
        <div className='statsContainer'>
            <div className='statsColumn'>
                <span className='statNumber'>10</span>
                <span className='statSubTitle'>Oddanych worków</span>
                <span className='statDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur, eum minima natus nulla obcaecati!</span>
            </div>
            <div className='statsColumn'>
                <span className='statNumber'>5</span>
                <span className='statSubTitle'>Wspartych Organizacji</span><span
                className='statDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur doloremque molestiae nemo sequi, sit?</span>
            </div>
            <div className='statsColumn'>
                <span className='statNumber'>7</span>
                <span className='statSubTitle'>Zorganizowanych zbiórek</span>
                <span className='statDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut corporis ipsum labore quibusdam quo.</span>
            </div>
        </div>
    )
}

export default HomeStats;
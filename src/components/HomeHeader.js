import React from "react";
import {Link} from "react-router-dom";

const HomeHeader = () => {

    return (
        <div className={'headerContainer'}>
            Header
            <Link to='/LogIn'> toLogin</Link>
            <Link to='/Register'> toregister</Link>
            <Link to='/OddajRzeczyForm'> toform</Link>
        </div>
)
}

export default HomeHeader;
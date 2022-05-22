import React from "react";
import HomeHeader from "./HomeHeader";
import HomeStats from "./HomeStats";
import HomeSteps from "./HomeSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeOrgs from "./HomeOrgs";
import HomeContact from "./HomeContact";

const Home = () => {

    return (
        <>
            <HomeHeader/>
            <HomeStats/>
            <HomeSteps/>
            <HomeAboutUs/>
            <HomeOrgs/>
            <HomeContact/>
        </>
    )
}

export default Home;
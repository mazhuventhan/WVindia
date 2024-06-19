import React from "react";
import Header from "../../Components/Header";
import FootBox from "../../Components/boxFoot";
import Wework from "./weWork";
import LatestWork from "./ourLatest";
const Home = () => {
    return (
        <div className="container-fluid p-0">
            <div className="sticky-top">
                <Header />
            </div>
            <LatestWork/>
            <Wework />
            <FootBox />
        </div>
    )
}
export default Home;
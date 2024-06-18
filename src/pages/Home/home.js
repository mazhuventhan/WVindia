import React from "react";
import Header from "../../Components/Header";
import FootBox from "../../Components/boxFoot";
import Wework from "./weWork";
const Home = () => {
    return (
        <div className="container-fluid p-0">
            <div className="sticky-top">
                <Header />
            </div>
            <Wework />
            <FootBox />
        </div>
    )
}
export default Home;
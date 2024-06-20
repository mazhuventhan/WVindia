import React from "react";
import Header from "../../Components/Header";
import FootBox from "../../Components/boxFoot";
import Wework from "./weWork";
import LatestWork from "./ourLatest";
import { Helmet } from 'react-helmet';
const Home = ({ title, description }) => {
    return (
        <div className="container-fluid p-0">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <div className="sticky-top">
                <Header />
            </div>
            <LatestWork />
            <Wework />
            <FootBox />
        </div>
    )
}
export default Home;
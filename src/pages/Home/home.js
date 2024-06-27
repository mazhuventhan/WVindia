import React, { useEffect } from "react";
import Header from "../../Components/Header";
import FootBox from "../../Components/boxFoot";
import Wework from "./weWork";
import LatestWork from "./ourLatest";
import { Helmet } from 'react-helmet';
import { useSelector } from "react-redux";
import ReduxData from "../../Components/reduxData";
const Home = ({ title, description }) => {
    const api1Data = useSelector((state) => state.data1);
    const api2Data = useSelector((state) => state.data2);

    useEffect(() => {
        console.log(api1Data, "API1 Data");
    }, [api1Data]);

    useEffect(() => {
        console.log(api2Data, "API2 Data");
    }, [api2Data]);
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
            <ReduxData/>
        </div>
    )
}
export default Home;
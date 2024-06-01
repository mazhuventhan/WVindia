import React from "react";
import "../Assets/Css/boxfoot.css";
import Footer from "./Footer";
const FootBox = () => {
    return (
        <>
        <div className="container-fluid p-3 coverBox" style={{ backgroundColor: '#e5e3e3' }}>
            <div className="container">
                <div style={{height:'100px',backgroundColor:'#f37021'}} className="text-center p-2 orangebox">
                    <h5 className="text-light mt-2" >"Donate Today to Give Children Access to Quality Education!"</h5>
                    <button className="btn btn-light fw-bold mt-3">DONATE NOW</button>
                </div>
                <div className="row mt-3 mt-lg-5">
                    <div className="col-lg-4 col-12">
                        <div className="d-inline-flex">
                            <h4>FOR MORE THAN 70 YEARS</h4>
                            <div className="vl ml-3" style={{ borderRight: '1px solid #c5afaf', height: '30px' }}></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="d-inline-flex">
                            <h4>FOR MORE THAN 70 YEARS</h4>
                            <div className="vl ml-3" style={{ borderRight: '1px solid #c5afaf', height: '30px' }}></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <h4>111 DISTRICTS</h4>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default FootBox;
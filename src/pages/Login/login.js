import React, { useState } from "react";
import Header from "../../Components/Header";
import { Helmet } from 'react-helmet';

const Login = ({ title, description }) => {
    const [isName, setIsName] = useState(true);

    const handleRadioChange = (event) => {
        setIsName(event.target.value === 'name');
    };

    return (
        <div className="container-fluid">
             <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <div className="sticky-top">
                <Header />
                <div className="row border-bottom">
                    <div className="col-12">
                        <div className="container mt-2 mb-2">
                            <h5><b>LOG IN MY WORLD</b></h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 col-12 p-lg-5 p-3 mt-lg-5 mt-3" style={{ border: "1px solid black" }}>
                        <div>
                            <form>
                                <div className="row mt-3">
                                    <div className="col-4">
                                        <label className="fw-bold">Login Using</label>
                                    </div>
                                    <div className="col-8">
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="inlineRadioOptions"
                                                id="inlineRadio1"
                                                value="name"
                                                checked={isName}
                                                onChange={handleRadioChange}
                                            />
                                            <label className="form-check-label" htmlFor="inlineRadio1">UserName</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="inlineRadioOptions"
                                                id="inlineRadio2"
                                                value="otp"
                                                checked={!isName}
                                                onChange={handleRadioChange}
                                            />
                                            <label className="form-check-label" htmlFor="inlineRadio2">OTP</label>
                                        </div>
                                    </div>
                                </div>
                                {/* Name Login */}
                                {isName ?
                                    <div>
                                        <div className="row mt-3">
                                            <div className="col-4">
                                                <label className="fw-bold">UserName</label>
                                            </div>
                                            <div className="col-8">
                                                <input type="text" id="inputPassword6" placeholder="Email ID/Mobile Number" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-4">
                                                <label className="fw-bold">Password</label>
                                            </div>
                                            <div className="col-8">
                                                <input type="password" id="inputPassword6" className="form-control" /><br />
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="remember" />
                                                    <label className="form-check-label" for="remember">
                                                        Remember me next time I visit
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    :
                                    // OTP login
                                    <div>
                                        <div className="row mt-3">
                                            <div className="col-4">
                                                <label className="fw-bold">Email ID*/Mobile*</label>
                                            </div>
                                            <div className="col-8">
                                                <input type="text" id="inputPassword6" placeholder="Email ID/Mobile Number" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-4">
                                                <label className="fw-bold">OTP*</label>
                                            </div>
                                            <div className="col-8">
                                                <input type="password" id="inputPassword6" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className="row mt-3">
                                    <div className="col-lg-4">
                                    </div>
                                    <div className="col-lg-8 col-12">
                                        <div className="form-check">
                                            <button className="btn btn-primary" style={{ backgroundColor: "#f37021" }} >Login</button>
                                            <a className="ms-2" href="/add" >Forgot Password?</a>
                                            <a className="ms-2" href="/add">New User</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </div>
    );
}

export default Login;

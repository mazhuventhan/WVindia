import React from "react";
import eduIcon from "../../Assets/Images/icon-education.png";
import childEnd from "../../Assets/Images/chillend.png";

const Wework = () => {
    return (
        <div className="container p-0">
            <div className="row">
                <div className="col-12">
                    <h6><b>How We Work</b></h6><br />
                    <p>
                        For as little as <span style={{ color: 'orange' }}>Rs. 1000 a month</span>, Child Sponsorship helps give a whole community access to life's basic essentials. This contribution from our supporters enables us to systematically invest in the ideal environment for child development. Sponsor a child today.
                    </p>
                </div>
            </div>
            <div className="container-fluid childEnd mt-lg-5 mt-3" style={{ backgroundImage: `url(${childEnd})`, backgroundRepeat: "no-repeat", height: "640px", backgroundPosition: "center" }} >
                <div className="row">
                    <div className="col-lg-6 col-12 text-start">
                        <div className="mt-3" style={{ display: "inline-flex", width: "72%" }} >
                            <img src={eduIcon} alt="demo" style={{ width: "72px", height: "72px" }} />
                            <div className="ml-2">
                                <h6><b>Education</b></h6>
                                <p>Child Sponsorship ensures children are educated for life through collective efforts in improving the quality of education and learning outcomes at different levels through infrastructure support, remedial education programmes. Sponsor a child and help a child have</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 text-end">
                        <div className="mt-3 text-start" style={{ display: "inline-flex", width: "72%" }} >
                            <img src={eduIcon} alt="demo" style={{ width: "72px", height: "72px" }} />
                            <div className="ml-2">
                                <h6><b>Education</b></h6>
                                <p>Child Sponsorship ensures children are educated for life through collective efforts in improving the quality of education and learning outcomes at different levels through infrastructure support, remedial education programmes. Sponsor a child and help a child have</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Wework;
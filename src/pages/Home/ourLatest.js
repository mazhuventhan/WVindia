import React from "react";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { IconButton } from "@mui/material";
const LatestWork = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="row text-white" style={{ backgroundColor: '#f37021' }}>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8 col-10">
                            <h3><b>Our Latest Work</b></h3>
                            <img alt="demo" />
                            <h4><b>Certificate of Appreciation</b></h4>
                            <p>World Vision India’s project in Nellore, Andhra Pradesh, received a Certificate of Appreciation from Hon’ble Sri. Amarnatha Reddy for outstanding and remarkable services done throughout the year 2017 and for bringing hope into the lives of vulnerable children.</p>
                        </div>
                        <div className="col-lg-2 col-2">
                            <IconButton>
                                <KeyboardArrowDownOutlinedIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="row" >
                        <div className="col-lg-2 col-2">
                            <IconButton>
                                <KeyboardArrowDownOutlinedIcon />
                            </IconButton>
                        </div>
                        <div className="col-lg-8 col-10">
                            <h3><b>Our Latest Work</b></h3>
                            <img alt="demo" />
                            <h4><b>Certificate of Appreciation</b></h4>
                            <p>World Vision India’s project in Nellore, Andhra Pradesh, received a Certificate of Appreciation from Hon’ble Sri. Amarnatha Reddy for outstanding and remarkable services done throughout the year 2017 and for bringing hope into the lives of vulnerable children.</p>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LatestWork;
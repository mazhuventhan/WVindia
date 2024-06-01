import React from "react";
import Logo from '../Assets/Images/Logo.png';
import cart from '../Assets/Images/cart.png';
import '../Assets/Css/Header.css';
const Header = () => {
    return (
        <div>
            <section className='header'>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <p class="navbar-brand" href="#"><img src={Logo} alt='' /></p>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <p class="nav-link active text_size" aria-current="page" href="#">HOME</p>
                                </li>
                                <li class="nav-item dropdown">
                                    <p class="nav-link dropdown-toggle text_size" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ABOUT US
                                    </p>
                                    <ul class="dropdown-menu">
                                        <li><p class="dropdown-item text_size" href="#">Action</p></li>
                                        <li><p class="dropdown-item text_size" href="#">Another action</p></li>
                                        <li><p class="dropdown-divider text_size"></p></li>
                                        <li><p class="dropdown-item text_size" href="#">Something else here</p></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <p class="nav-link dropdown-toggle text_size" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        CHILDREN SPONSORSHIP
                                    </p>
                                    <ul class="dropdown-menu">
                                        <li><p class="dropdown-item text_size" href="#">Action</p></li>

                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <p class="nav-link dropdown-toggle text_size" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        WAY TO GIVE
                                    </p>
                                    <ul class="dropdown-menu">
                                        <li><p class="dropdown-item text_size" href="#">Action</p></li>

                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <p class="nav-link dropdown-toggle text_size" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        GET INVOLVED
                                    </p>
                                    <ul class="dropdown-menu">
                                        <li><p class="dropdown-item text_size" href="#">Action</p></li>

                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <p class="nav-link dropdown-toggle text_size" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        MEDIA & RESOURCES
                                    </p>
                                    <ul class="dropdown-menu">
                                        <li><p class="dropdown-item text_size" href="#">Action</p></li>

                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <p class="nav-link text_size">MY WORLD</p>
                                </li>

                                <li class="nav-item dropdown">
                                    <p class="nav-link dropdown-toggle text_size" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        1800 415 4550
                                    </p>
                                    <ul class="dropdown-menu">
                                        <li><p class="dropdown-item text_size" href="#">Action</p></li>

                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <p class="nav-link text_size">INDIASPON.ORG</p>
                                </li>
                                <li class="nav-item">
                                    <button>LOG IN</button>
                                </li>
                            </ul>
                        </div>
                        {/* cart */}
                        <div className='d-flex'>
                            <p>| 0</p>
                            <p><img src={cart} alt="demo" /></p>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    )
}
export default Header;
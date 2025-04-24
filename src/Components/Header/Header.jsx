import React from "react";
import headerCSS from './../Header/Header.module.css';

import heroImg from './../../assets/hero.png';

function Header() {
    return (
        <div className={headerCSS.headerWrapper}>
            <div className={headerCSS.headerContainer}>
                <img src={heroImg} alt="Hero Image" />
                <h1>Hello 👋, I'M <span>Mukesh</span></h1>
                <p>Welcome to my portfolio. I'm a <strong>Front-End Developer based in India.</strong><br /></p>
                <div className={headerCSS.social}>
                    <i className="ri-facebook-fill"></i>
                    <i className="ri-instagram-fill"></i>
                    <i className="ri-twitter-fill"></i>
                    <i className="ri-linkedin-fill"></i>
                    <i className="ri-github-fill"></i>
                </div>
                <button>Download CV
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>
        </div>
    );
}

export default Header;

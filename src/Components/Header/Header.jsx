import React from "react";
import headerCSS from './../Header/Header.module.css';

import heroImg from './../../assets/hero.png';

function Header() {
  
    return (
        <div className={headerCSS.headerWrapper} id="header">
            <div className={headerCSS.headerContainer}>
                <img src={heroImg} alt="Hero Image" />
                <h1>Hello 👋, I'M <span>Mukesh</span></h1>
                <p>Welcome to my portfolio. I'm a <strong>Front-End Developer based in India.</strong><br /></p>
                <div className={headerCSS.social}>
                <a href="https://www.facebook.com/profile.php?id=100014068351874&name=NTFBLiteLockedProfileHomeController" target="_blank" rel="noopener noreferrer">
                   <i className="ri-facebook-fill"></i>
                </a>
                
                    <i className="ri-instagram-fill"></i>
                    <i className="ri-twitter-fill"></i>
                <a href="https://www.linkedin.com/in/mukeshsundar30/">
                    <i className="ri-linkedin-fill"></i>
                </a>
                < a href = "https://github.com/MUKESHMUKESHMUKESH">
                    <i className="ri-github-fill"></i>
                </a>
                </div>
               
                <a href="/Mukesh_M.Resume.pdf" download>
                    <button class="download-btn">
                        <span></span>
                        <span></span>
                          CV
                         
                    </button>
               </a>

            </div>
        </div>
    );
}

export default Header;

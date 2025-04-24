import React, { useRef, useEffect, useState } from "react"; 
import navCss from './../Nav/Nav.module.css'; 

function Nav() {    
    const [theme, setTheme] = useState('Dark');  // Track theme state

    // Apply the saved theme when the component mounts
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    // Toggle theme functions
    const ThemeHandler = () => {       
        setTheme(prevTheme => prevTheme === 'Dark' ? 'Light' : 'Dark');
    };     

    const Menu = useRef();     

    // Menu toggle function
    const menuHandler = () => {
        Menu.current.classList.toggle(navCss.activeNav);
        
        if (Menu.current.classList.contains(navCss.activeNav)) {
            Menu.current.style.maxHeight = "500px"//ease height to fit all items
        } else {
            Menu.current.style.maxHeight = "0px";
        }
    };
    
    return (         
        <div className={navCss.Nav}>              
            <div className={navCss.logo}>                 
                <a href="/">Mukesh</a>              
            </div>                

            <ul ref={Menu}>                 
                <li><a href="/"><i className="ri-home-3-line"></i>Home</a></li>                 
                <li><a href="/about"><i className="ri-user-line"></i>About</a></li>                 
                <li><a href="/services"><i className="ri-instance-line"></i>Services</a></li>                 
                <li><a href="/education"><i className="ri-graduation-cap-line"></i>Education</a></li>
                <li><a href="/projects"><i className="ri-code-box-line"></i>My Projects</a></li>
     
                <li><a href="/contact"><i className="ri-phone-line"></i>Contact</a></li>              
            </ul>               

            <div className={navCss.NavBtns}>                 
                <i className={`ri-${theme === 'Dark' ? 'sun' : 'moon'}-line`} onClick={ThemeHandler}></i>                 
                <i className="ri-menu-4-line" onClick={menuHandler}></i>              
            </div>         
        </div>     
    ); 
} 

export default Nav;

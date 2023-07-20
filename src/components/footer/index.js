import React from "react";
import './style.css'
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

function Footer () {
    return(
        <footer>
            
            <img id="logof" src={Logo}/>
            
            <span>All rights reserved ©</span>
            <span>Developed by: Heladio Sampaio</span>
        </footer>

    )
}

export default Footer;

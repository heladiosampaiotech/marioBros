import React from "react";
import './style.css'
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

function Footer () {
    return(
        <footer>
            
            <Link to={'/marioBros'}>
                <img id="logof" src={Logo} alt="imagem-logo"/>
            </Link>
            
            <span>All rights reserved ©</span>
            <span>Developed by: Heladio Sampaio</span>
        </footer>

    )
}

export default Footer;

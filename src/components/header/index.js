import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';

function Header (){

    return(
        <header>
            <Link to={'/marioBros'}>
                <img id="logo" src={Logo}/>
            </Link>
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/mario/Bros'>
                        <li className="item-1">Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/contatos'>
                        <li className="item-2">Contacts</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/fotos'>
                        <li className="item-3">Photos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'/comentarios'}>
                        <li className="item-4">Comments</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header

import React from "react";
import Header from "../../header";
import './style.css'
import Video from '../../../assets/trailer.mp4';
import Cards from "../../cards";
import Footer from "../../footer";

function Home (){

    return(
        <>
           <Header/>  
           <div id="gif"></div> 
           <div className="setas">
                <svg className= "arrows">
                        <path className="a1" d="M0 0 L30 32 L60 0"></path>
                        <path className="a2" d="M0 20 L30 52 L60 20"></path>
                        <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
           </div>
           <div className="trailer-container">
                <div className="trailer-content">
                    <video controls className="trailer">
                        <source src={Video}/>
                        Seu navegador não possui suporte para video.
                    </video>
                
                    <div className="sinopse">
                        <p className="description">
                        Mario is a plumber along with his brother Luigi. One day, they end up in the Mushroom Kingdom, ruled by Princess Peach but threatened by the King of the Koopas, who does everything to reign over everywhere.
                        </p>
                        <button className="button">Buy Ticket</button>
                    </div>
                </div>
           </div>
           

           <Cards/>
           <Footer/>   
        </>
    )
}

export default Home
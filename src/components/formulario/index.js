import React from "react";
import './style.css'

function Formulario() {
    return (
        <div className="banner-form">
            <div className="container-form">
                <div className="content-form">
                    <h1>Contact Form</h1>
                    <form className="formulario" action="/enviar" method="POST">
                        <label className="nome">Name:</label>
                        <input type="text" id="nome" name="nome" required /><br />
                        <label className="email">Email:</label>
                        <input type="email" id="email" name="email" required /><br />
                        <label className="mensagem">Message:</label>
                        <textarea id="mensagem" name="mensagem" required></textarea><br />
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
    </div>
    )
}

export default Formulario;

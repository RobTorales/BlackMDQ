import React from 'react'
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="Footer">
        <div className="footer-div">
            <h4>Metodos de pago</h4>
                <img src="/img/visa.png" alt="" className="tarjetas"/>
                <img src="/img/logo-mastercard.png" alt="" className="tarjetas"/>
                <img src="/img/cencosud@2x.png" alt="" className="tarjetas"/>
                <img src="/img/cabal@2x.png" alt="" className="tarjetas"/>
                <img src="/img/tarjeta-naranja@2x.png" alt="" className="tarjetas"/>
                <img src="/img/banelco@2x.png" alt="" className="tarjetas"/>
                <img src="/img/tarjeta-shopping@2x.png" alt="" className="tarjetas"/>
                <img src="/img/a-express.png" alt="" className="tarjetas"/>
        </div>
        <div className="footer-div">
            <h4>Formas de envío</h4>
                <img src="/img/correo-argentino.png" alt="" className="envio"/>
                <img src="/img/Logo-oca.png" alt="" className="oca"/>
        </div>
        <div className="footer-div">
            <h4>Redes Sociales</h4>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
        </div>
        <div className="footer-div">
            <h4>Contactanos</h4>
                <ul>
                    <li>
                        <i className="bi bi-telephone-fill"></i> +54 9 2235452718
                    </li>
                    <li>
                        <i className="bi bi-envelope"></i> blackmdq@gmail.com
                    </li>
                    <li>
                        <i className="bi bi-geo-alt"></i> Alberti 1625, Mar del Plata
                    </li>
                </ul>
        </div>
        
    </footer> 
  )
      
}

export default Footer;
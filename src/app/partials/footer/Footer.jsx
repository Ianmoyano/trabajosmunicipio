import React from "react";

export const Footer = () => {
    return (
        <>
            <footer className="Footer">
               <div className="derechos"> © 2023 Municipio oficial de Bahía Blanca - Todos los derechos reservados</div>
                <br />
                <img className="bandera" src="./img/bandera-de-bahia-blanca.jpg" alt="Bandera de Bahía Blanca" />

                <div className="redes">
                    <div>
                        <img src="./img/facebook.png" alt="Facebook" width="100px" height="100px" />
                        <div className="redinfo">Municipio Bahía Blanca</div>
                    </div>

                    <div>
                        <img src="./img/wasap.png" alt="WhatsApp" width="100px" height="100px" />
                        <div className="redinfo">+54-291-235-6732</div>
                    </div>

                    <div>
                        <img src="./img/x.png" alt="Facebook" width="100px" height="100px" />
                        <div className="redinfo">@MunicipioBahiaBlanca</div>
                    </div>

                    <div>
                        <img src="./img/insta.webp" alt="Instagram" width="100px" height="100px" />
                        <div className="redinfo">@municipiobahia</div>
                    </div>
                </div>                
                
                <img  className="gmaplogo"  src="./img/maps.png" alt="Ubicación" width="80px" height="100px" />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199222.78568479937!2d-62.420835042935536!3d-38.721114354202676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcabdc1302bd%3A0x76d1d88d241e7a11!2sBahía%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700355297289!5m2!1ses-419!2sar" 
              className="gmap"
                width="500" 
                height="330" 
                style={{border:"0"}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"></iframe>



            </footer>
        </>
    );
};
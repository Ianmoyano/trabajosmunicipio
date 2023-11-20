"use client"
import React from "react";
import { useRouter } from "next/navigation"

export const Main = () => {
  const router = useRouter();
  const navegarAEmpleos = () => {
    router.push("empleos")
  }
  return (<>
  <div className="infociudad"> <div className="rectangulo2"></div>Bahía Blanca es una ciudad que se fundo en 1828.
      <br></br><div className="rectangulo2"></div>Coronel Ramón Bernabé Estomba fue el fundador de la ciudad de Bahía Blanca
      <br></br><div className="rectangulo2"></div>Actualmente tiene una cantidad de 335.190 habitantes.
      <br></br><div className="rectangulo2"></div>Está ubicada en el sudoeste de la provincia de Buenos Aires, en el centro-este de la Argentina
      <br></br><div className="rectangulo2"></div>La denominación de la localidad refiere a la profunda y angosta entrada de mar
      en el continente<br></br>ㅤy a laseflorescencias salinas blancas que cubren las zonas bajasen regiones costeras
   </div>

  

    
        <img className="imagen1" src="./img/bahiablanca.png" alt="Geo ubicación de el partido de Bahía blanca" />

    <img className="imagen2" src="./img/bahiablancaa.jpg" alt="Geo ubicación de el partido de Bahía blanca" />

    <div className="empleos">Con esta pagina web de la municipalidad de Bahía Blanca buscamos  que las personas que necesiten un trabajo puedan hacerlo mediante nosotros. Porque VOS importas, para conocer más apreta el siguiente botón
    
    </div>
<button onClick={() => navegarAEmpleos()} className="boton">Empleos disponibles</button> 
  </>
  )
}
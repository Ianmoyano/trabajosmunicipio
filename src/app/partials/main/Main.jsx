"use client"
import React from "react";
import { useRouter } from "next/navigation"
import Carousel from 'react-bootstrap/Carousel';
import {bahia} from 'public/img/bahiablanca.jpg';


export const Main = () => {
  const router = useRouter();
  const navegarAEmpleos = () => {
    router.push("empleos")
  }
  return (<>
  <h2 className="subtitulo">¡Te damos la bienvenida a Bahía Blanca!</h2>
  <div className="infociudad">
  Ubicada en el sur de la provincia de Buenos Aires, Bahía Blanca es un enclave donde la rica historia se entrelaza con la modernidad. Sus calles narran décadas de historias, mientras que a orillas del Atlántico, las playas ofrecen una serenidad inigualable. Con un activo puerto que impulsa la economía, la ciudad refleja una autenticidad palpable y la calidez de su comunidad. Explora Bahía Blanca, un lugar donde la tradición y la vitalidad contemporánea convergen en un entorno único. ¡Descubre nuestra ciudad, descubre Bahía Blanca!
   </div>
   
    <img className="imagen1" src="./img/bahiablanca.png" alt="Geo ubicación de el partido de Bahía blanca" />
   
    <div className="empleos">Con esta pagina web de la municipalidad de Bahía Blanca buscamos  que las personas que necesiten un trabajo puedan hacerlo mediante nosotros. Porque VOS importas, para conocer más apreta el siguiente botón
    </div>
     <Carousel className="carousel">
      <Carousel.Item >
        <img src="./img/catedral.jpg" text="Second slide" className="fotoss"  />
        <Carousel.Caption  className="textocarousel" >
          <h3  className="textocarousel">Catedral de Bahía Blanca</h3>
          <p  className="textocarousel">La Catedral de Nuestra Señora de la Merced es un templo afiliado a la iglesia católica ubicada en el corazón de Bahía Blanca </p>
        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item >
         < img src="./img/bahiablancaa.jpg" text="Second slide" className="fotoss"  />
        <Carousel.Caption  className="textocarousel">
          <h3  className="textocarousel">Second slide label</h3>
          <p  className="textocarousel" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img src="./img/municipalidad.jpeg" text="Second slide" className="fotoss" />
        <Carousel.Caption className="textocarousel">
          <h3  className="textocarousel">Third slide label</h3>
          <p  className="textocarousel">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
       </Carousel>
  
    
<button onClick={() => navegarAEmpleos()} className="boton">Empleos disponibles</button> 
<div className="linea2"></div>
<div className="MunicipiodeBahia">Municipio de Bahia</div>
<div className="linea1"></div>
 </>
  )
}
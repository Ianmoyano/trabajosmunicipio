import React from "react";

export const Main = () => {
  return (
    <>
      <br />
      <li class="infociudad">Bahía Blanca es una ciudad que se fundo en 1828.</li>
      <li class="infociudad">Actualmente tiene una cantidad de 335.190 habitantes.</li>
      <li class="infociudad">Está ubicada en el sudoeste de la provincia de Buenos Aires, <br></br>
      ㅤ en el centro-este de la Argentina</li>
      <li class="infociudad">Actualmente tiene una cantidad de 335.190 habitantes.</li>
      <li class="infociudad">Actualmente tiene una cantidad de 335.190 habitantes.</li>
      <li class="infociudad">Actualmente tiene una cantidad de 335.190 habitantes.</li>

      <div class="rectangulo">.</div>
      <img class="imagen1" src="./img/bahiablanca.png" alt="Geo ubicación de el partido de Bahía blanca" />


      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/bahia1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./img/bahia2.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./img/bahia3.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

      <div class="empleos">Con esta pagina web de la municipalidad de Bahía Blanca buscamos que las personas que necesiten un trabajo puedan hacerlo mediante nosotros. Porque VOS importas, para conocer más apreta el siguiente botón</div>



      <button class="boton">Empleos disponibles</button>

    </>

  )
}
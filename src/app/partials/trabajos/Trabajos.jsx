import React from "react";

export const Trabajos = () => {
    return (
        <>
        <h2 class="subtitulotrabajos">Trabajos disponibles :</h2>
        <button class="buscatrab">Personas en busca de trabajo</button>
        <input type="text" class="filtrar" placeholder="Filtar por..."></input>
            <div class="trabajos-container1">
                <div class="trabajos">Obrero
                <ul>
                <li class="datos">Empleador: Cooperativa Obrera Ltda</li>
                <li class="datos">Descripcion del puesto:Trabajo disponible en<br></br> 
                Rondeau 800, como operador de máquinas para<br></br>
                 trabajar la madera </li>
                    <li class="datos">Rubro: Obra</li>
                    <li class="datos">Requisitos: experiencia en operar máquinas</li>
                    <li class="datos">Horario: 8hs Diarias (excepto domingos)</li>
                    <img class="imgtrabajos" src="./img/obrero.avif" />
                    <button class="botoncv">Enviar CV</button>
                </ul></div> <br></br>


                <div class="trabajos">Maestro
                <ul>
                <li class="datos">Empleador: Escuela San Cayetano</li>
                <li class="datos">Descripcion del puesto: Trabajo disponible en la<br></br>  
                escuela San Cayetano como maestro de matemática</li>
                    <li class="datos">Rubro: Educación</li>
                    <li class="datos">Requisitos: Titulo en el área de matemática</li>
                    <li class="datos">Horario: 5hs de lunes a viernes</li>
                    <img class="imgtrabajos" src="./img/profe.png" />
                    <button class="botoncv">Enviar CV</button>
                </ul></div><br></br>

                <div class="trabajos">Electricista
                <ul>
                <li class="datos">Empleador: EDES</li>
                <li class="datos">Descripcion del puesto: Trabajo disponible en la<br></br>
                empresa electrica EDES</li>
                    <li class="datos">Rubro: Obra</li>
                    <li class="datos">Requisitos: Titulo en electricista y excasa <br></br>
                    experiencia</li>
                    <li class="datos">Horario: 4hs diarias (no incluye fin de semanas) </li>
                    <img class="imgtrabajos" src="./img/electricista.jpg" />
                    <button class="botoncv">Enviar CV</button>
               </ul> </div></div>


            <div class="trabajos-container2">
                <div class="trabajos">Peluquero
                <ul>
                <li class="datos">Empleador: Vintage peluqueria</li>
                <li class="datos">Descripcion del puesto: recepcionista en <br></br>
                 peluqueria Vintage</li>
                    <li class="datos">Rubro: Servicio</li>
                    <li class="datos">Requisitos: Experiencia como recepcionista</li>
                    <li class="datos">Horario: 6hs diarias</li>
                    <img class="imgtrabajos" src="./img/peluquero.jpg" />
                    <button class="botoncv">Enviar CV</button>
               </ul> </div><br></br>

                <div class="trabajos">Carpintero
                <ul>
                <li class="datos">Empleador: Aaron González</li>
                <li class="datos">Descripcion del puesto: Ayudante en <br></br>
                Aaron Carpintería</li>
                    <li class="datos">Rubro: Obra</li>
                    <li class="datos">Requisitos: Titulo en carpintería</li>
                    <li class="datos">Horario: 6hs de lunes a sabados</li>
                    <img class="imgtrabajos" src="./img/carpintero.webp" />
                    <button class="botoncv">Enviar CV</button>
               </ul> </div><br></br>
               
                <div class="trabajos">Enfermera
                <ul>
                <li class="datos">Empleador:Hospital Municipal de Agudos <br></br>
                Dr. Leónidas Lucero</li>
                <li class="datos">Descripcion del puesto: Ayudante en el hospital</li>
                    <li class="datos">Rubro: Hospitalario</li>
                    <li class="datos">Requisitos: Titulo en enfermería</li>
                    <li class="datos">Horario: 7hs todos los días</li>
                    <img class="imgtrabajos" src="./img/enfermera.jpg" />
                    <button class="botoncv">Enviar CV</button>
                   </ul> </div>


            </div>
        </>
    )
}
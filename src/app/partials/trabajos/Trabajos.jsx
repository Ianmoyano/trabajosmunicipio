"use client"
import React from "react";
import { useRouter } from "next/navigation"


export const Trabajos = () => {
    const router = useRouter();
  const navegarACandidatos = () => {
    router.push("candidatos")
  }
    return (
        <>
        <h2 className="subtitulotrabajos">Trabajos disponibles :</h2>
        <button onClick={() => navegarACandidatos()} className="buscatrab">Personas en busca de trabajo</button>
        <input type="text" class="filtrar" placeholder="Filtrar por..."></input>
            <div className="trabajos-container1">
                <div className="trabajos">Obrero
                <ul>
                <li className="datos">Empleador: Cooperativa Obrera Ltda</li>
                <li className="datos">Descripcion del puesto:Trabajo disponible en<br></br> 
                Rondeau 800, como operador de máquinas para<br></br>
                 trabajar la madera </li>
                    <li className="datos">Rubro: Obra</li>
                    <li className="datos">Requisitos: experiencia en operar máquinas</li>
                    <li className="datos">Horario: 8hs Diarias (excepto domingos)</li>
                    <img className="imgtrabajos" src="./img/obrero.avif" />
                    <button className="botoncv">Enviar CV</button>
                </ul></div> <br></br>


                <div className="trabajos">Maestro
                <ul>
                <li className="datos">Empleador: Escuela San Cayetano</li>
                <li className="datos">Descripcion del puesto: Trabajo disponible en la<br></br>  
                escuela San Cayetano como maestro de matemática</li>
                    <li className="datos">Rubro: Educación</li>
                    <li className="datos">Requisitos: Titulo en el área de matemática</li>
                    <li className="datos">Horario: 5hs de lunes a viernes</li>
                    <img className="imgtrabajos" src="./img/profe.png" />
                    <button className="botoncv">Enviar CV</button>
                </ul></div><br></br>

                <div className="trabajos">Electricista
                <ul>
                <li className="datos">Empleador: EDES</li>
                <li className="datos">Descripcion del puesto: Trabajo disponible en la<br></br>
                empresa electrica EDES</li>
                    <li className="datos">Rubro: Obra</li>
                    <li className="datos">Requisitos: Titulo en electricista y excasa <br></br>
                    experiencia</li>
                    <li className="datos">Horario: 4hs diarias (no incluye fin de semanas) </li>
                    <img className="imgtrabajos" src="./img/electricista.jpg" />
                    <button className="botoncv">Enviar CV</button>
               </ul> </div></div>


            <div className="trabajos-container2">
                <div className="trabajos">Peluquero
                <ul>
                <li className="datos">Empleador: Vintage peluqueria</li>
                <li className="datos">Descripcion del puesto: recepcionista en <br></br>
                 peluqueria Vintage</li>
                    <li className="datos">Rubro: Servicio</li>
                    <li className="datos">Requisitos: Experiencia como recepcionista</li>
                    <li className="datos">Horario: 6hs diarias</li>
                    <img className="imgtrabajos" src="./img/peluquero.jpg" />
                    <button className="botoncv">Enviar CV</button>
               </ul> </div><br></br>

                <div className="trabajos">Carpintero
                <ul>
                <li className="datos">Empleador: Aaron González</li>
                <li className="datos">Descripcion del puesto: Ayudante en <br></br>
                Aaron Carpintería</li>
                    <li className="datos">Rubro: Obra</li>
                    <li className="datos">Requisitos: Titulo en carpintería</li>
                    <li className="datos">Horario: 6hs de lunes a sabados</li>
                    <img className="imgtrabajos" src="./img/carpintero.webp" />
                    <button className="botoncv">Enviar CV</button>
               </ul> </div><br></br>
               
                <div className="trabajos">Enfermera
                <ul>
                <li className="datos">Empleador:Hospital Municipal de Agudos <br></br>
                Dr. Leónidas Lucero</li>
                <li className="datos">Descripcion del puesto: Ayudante en el hospital</li>
                    <li className="datos">Rubro: Hospitalario</li>
                    <li className="datos">Requisitos: Titulo en enfermería</li>
                    <li className="datos">Horario: 7hs todos los días</li>
                    <img className="imgtrabajos" src="./img/enfermera.jpg" />
                    <button className="botoncv">Enviar CV</button>
                   </ul> </div>


            </div>
        </>
    )
}
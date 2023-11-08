"use client"
import React from "react";
import { useRouter } from "next/navigation"

export const Titulo = () => {
    const router = useRouter();
  const navegarAEmpleos = () => {
    router.push("empleos")
  }
  const navegarAMenu = () => {
    router.push("")
  }
    return (
        <>
            <img className="escudo" src="./img/bahiaescudo.png" ></img>
            <div className="Titulo"></div><div class="titulo2">Municipalidad de Bahía Blanca</div>
            
            <button onClick={() => navegarAMenu()} className="boton2">Menu</button> 
            <button onClick={() => navegarAEmpleos()} className="boton2">Empleos</button> 

        </>
    )
}
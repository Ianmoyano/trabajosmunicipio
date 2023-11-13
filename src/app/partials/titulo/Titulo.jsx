"use client"
import React from "react";
import { useRouter } from "next/navigation"


export const Titulo = () => {
  const router = useRouter();
  const navegarAEmpleos = () => {
    router.push("empleos")
  }
  const navegarACandidatos = () => {
    router.push("candidatos")
  }
  const navegarAMenu = () => {
    router.push("main")
  }
  return (
    <>
      <img className="escudo" src="./img/bahiaescudo.png" ></img>
      <div className="Titulo"></div><div className="titulo2">Municipalidad de Bahía Blanca</div>

      <button onClick={() => navegarAMenu()} className="botonroute">Menu</button>
      <button onClick={() => navegarAEmpleos()} className="botonroute">Empleos disponibles</button>
      <button onClick={() => navegarACandidatos()} className="botonroute">Personas en busca de trabajo</button>

    </>
  )
}
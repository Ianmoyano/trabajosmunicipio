"use client"
import { Titulo } from "../../partials/titulo/Titulo"
import { CV } from "../../partials/curriculum/CV"
import {Footer} from "../../partials/footer/Footer"
export default function Home() {
  return (<>
    <Titulo />
    <CV />
    <Footer/>
  </>
  )
}
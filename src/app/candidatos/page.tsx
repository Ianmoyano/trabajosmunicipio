"use client"
import { Titulo } from "../partials/titulo/titulo"
import { CV } from "../partials/curriculum/CV"
import {Footer} from "../partials/footer/Footer"
export default function Home() {
  return (<>
    <Titulo />
    <CV />
    <Footer/>
  </>
  )
}
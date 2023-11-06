import { Main } from "./partials/main/Main"
import { Titulo } from "./partials/titulo/titulo"
import { Footer } from "./partials/footer/Footer"
import { CV } from "./partials/curriculum/CV"
import { Trabajos } from "./partials/trabajos/Trabajos"

export default function Home()  {
  return (<>

<Titulo/>
<Trabajos/>
<Footer/>
    
 </>
  )
}

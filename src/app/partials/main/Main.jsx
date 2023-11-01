import React from "react";

export const Main = () => {
    return(
        <>
        <br />
        <h1 className="infociudad">.Bahía Blanca es una ciudad que se fundo en 1828.</h1>
            <h1 className="infociudad">.Actualmente tiene una cantidad de 335.190 habitantes.</h1>
            <h1 className="infociudad">.Está ubicada en el sudoeste de la provincia de Buenos Aires, <br></br>
            en el centro-este de la Argentina</h1> 
         
           <div>
             <img src={require('../imagenes/img/bahia.png').default}/>
           </div>
           
        
            <h1 className="infociudad">Con esta pagina web de la municipalidad de Bahía Blanca buscamos<br></br> 
            que las personas que necesiten un trabajo puedan hacerlo mediante<br></br> 
            nosotros. Haciendo, de esta manera, que la gente pueda encontrar<br></br> 
            un trabajo que se adapte a sus necesidades.</h1>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            </>

    )
}
export default Main
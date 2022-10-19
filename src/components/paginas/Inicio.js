import React from "react";
import Carousel from "../carousel/Carousel";
import Footer from "../footer/Footer";

const Inicio = () => {
    
    return(

    <div>
        
        <Carousel/>
        <div className="container mb-5">
           
            <h1 className="text-white text-center p-w bg-dark" >Presentación</h1>
                <p className="text-center mt-3">
                        El PGA Tour es el principal circuito estadounidense de golf profesional masculino y el más importante del mundo. Se juega prácticamente en su totalidad en Estados Unidos; sin embargo, desde 2007 se disputa un torneo en Cancún (México), así como en años posteriores se han empezado a jugar torneos en otros lugares del Caribe como Puerto Rico, República Dominicana y Bermuda. También se disputa dentro del tour estadounidense el Abierto de Canadá, un torneo con más de 100 años de historia en el país canadiense.
                </p>
            <h2 className="text-white text-center p-w bg-dark" >Lo destacado de la semana</h2>
                <iframe width="100%" height="500"  className='' src="https://www.youtube.com/embed/jVsipaWIMyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <Footer/>
    </div>

    );
}


export default Inicio;
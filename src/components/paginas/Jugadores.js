import React, {useEffect, useState} from "react";
import { UseFetch } from "../UseFetch";
import { Cards } from "../cards/Cards";
import Footer from "../footer/Footer";


const Jugadores = () => {

    const [productos, setProductos] = useState([])

    useEffect(()=> {
        fetch('https://635025f178563c1d82bab127.mockapi.io/Jugadores')
            .then(res => res.json())
            .then(data => setProductos(data))
            .catch(err => console.log(err))
    }, [])

    return(
        <div>

            {
                productos.length===0
                ?
                <h1>Cargando...</h1>
                :
                <div>
                    {productos.map(p=>(<h1>{p.nombre}</h1>))}
                </div>
            }
            <Footer/>
        </div>
    );

}










/*const Jugadores= () => {
    
    const [url, setUrl]= useState('https://635025f178563c1d82bab127.mockapi.io/Jugadores')
    const estado= UseFetch(url)
    const {cargando,data}= estado
    

    return(
        <div>
           
            {
                cargando
                ?
                <h1>Cargando...</h1>
                :
                <div>
                    <Cards id={data.id}/>

                    <div className="container m-auto">
                        <button onClick={()=>setUrl(data.previous)} className="m-2 btn btn-dark">Anterior</button>
                        <button onClick={()=>setUrl(data.next)} className="btn btn-dark">Siguiente</button>
                     </div>

                </div>
            }

            <Footer/>
        </div>
    
        );
}
*/

export default Jugadores;
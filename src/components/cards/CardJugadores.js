import React from 'react';
import { UseFetch } from '../UseFetch';



export const CardJugadores = ({url}) => {
    const estado= UseFetch(url)
    const {cargando,data}= estado

    
return (
    <div>
            cargando
            ?
            <h1>Cargando</h1>
            :
            <div className='cards' style={{width:'14rem'}}>
                    <div className='card-header'>
                        <h5 className='card-title'></h5>
                    </div>
                    <div className='card-body'>
                        <img src='' alt='jugadores'/>
                    </div>
                    <div className='card-footer'>
                        <p className='cart-text text-capitalize'></p>
                    </div>
            </div>
    </div>

)

}
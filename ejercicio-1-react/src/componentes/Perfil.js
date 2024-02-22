import React from 'react';
import '../estilos/Perfil.css';
import Contador from './Contador';

function Perfil(props){
    return(
        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
            src={require(`../imagenes/perfil-${props.imagen}.png`)}
            alt='Foto de serie' />
        <div className='contenedor-texto-perfil'>
            <p className='nombre-perfil'>
               <strong>{props.nombre}</strong>      
            </p>        
        <p className='genero-perfil'>
        {props.genero} 
        </p>
        <p className='texto-perfil'>"{props.perfil}" </p>
        </div>
        {/* ***************Botones redes sociales**************** */}

          <button className='button-youtube' onClick={()=> window.open(props.capitulo1, '')}>
          <h3>CapituloFinal<Contador/> </h3>
          
          
          </button>

          <button className='button-netflix' onClick={()=> window.open(props.netflix, '')}>
            <h3>Torneo del Poder<Contador/> </h3>
          
          </button> 

          <button className='button-hbo' onClick={()=> window.open(props.prime, '')}>
          <h3>Ultima Temporada <Contador/> </h3>
          
          </button>     
    </div>
    );
}
export default Perfil;
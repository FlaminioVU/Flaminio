import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Perfil from './componentes/Perfil';
import Contador from './componentes/Contador';


function App() {
  //Contador
  const [contador, setContador]= useState(0);
  return (
    <div className="App">
     <div class ='contenedor-principal'>
      <h1>Los Mejores Animes</h1>
      <Perfil 
        nombre='Attack of Titan'
        imagen='Atack'
        genero='Anime/Accion/Ficcion'
        perfil='Shingeki no Kyojin, también conocida en países de habla hispana como Ataque a los titanes y Ataque de los titanes, ​​ es una serie de manga japonesa escrita e ilustrada por Hajime Isayama'
        capitulo1='https://www.youtube.com/watch?v=FRn6xXXF-7s'
        netflix='https://www.youtube.com/watch?v=iVtF5Q5WdmQ'
        prime='https://www.youtube.com/watch?v=WpsxUR0CStw'
      />
      <Perfil 
        nombre='Dragon Ball Z'
        imagen='DBZ'
        genero='Anime/Accion/Ficcion'
        perfil='El Torneo de la Fuerza (力の大会, Chikara no Taikai), también conocido como el Torneo de Fuerza o Torneo del Poder, es un torneo de supervivencia confeccionado por los Reyes de Todo y preparado por el Gran Sacerdote.'
        capitulo1='https://www.youtube.com/watch?v=yXLC92jVSzw'
        netflix='https://www.youtube.com/watch?v=uoHYirZqG48'
        prime='https://www.youtube.com/watch?v=V5zfYg9ZiiQ'
      />
      <Perfil 
        nombre='Demon Slayer'
        imagen='DemonS (2)'
        genero='Anime/Accion/Ficcion'
        perfil='Kimetsu no Yaiba, también conocida bajo su nombre en inglés Demon Slayer, o en español Cazador de demonios es una serie de manga escrita e ilustrada por Koyoharu Gotōge, cuya publicación comenzó el 15 de febrero de 2016 en la revista semanal Shūkan Shōnen Jump de la editorial Shūeisha'
        capitulo1='https://www.youtube.com/watch?v=C_pKddExbXI'
        netflix='https://www.youtube.com/watch?v=0OhQnSl7pBA'
        prime='https://www.youtube.com/watch?v=Bw3LVWphNKQ'
      />
      {/* Contador y botones para incrementarlo */}
      {/* <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador+1)}>Click para contar</button> */}

      
     </div>
    </div>
  );
}

export default App;
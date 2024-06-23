import React from 'react';
import './InfoGrid.css';

const InfoGrid = () => {
  return (


    <div className="contenedorGeneral">
      {/* Información Personal */}
      <div className="grid-item">
        <h3>Información Personal</h3>
        <p>Nombre Rocio Hueñir</p>
        <p>Edad: 23</p>
        <p>Localidad: Cipolletti</p>
      </div>
      
      {/* Aptitudes */}
      <div className="grid-item">
        <h3>Aptitudes</h3>
        <p>Resolución de Problemas</p>
        <p>Trabajo en Equipo</p>
        <p>Comunicación</p>
      </div>
      
      {/* Habilidades */}
      <div className="grid-item">
        <h3>Habilidades</h3>
        <p>JavaScript</p>
        <p>React</p>
        <p>Node.js</p>
      </div>
      
      {/* Pasatiempos */}
      <div className="grid-item">
        <h3>Pasatiempos</h3>
        <p>Lectura</p>
        <p>fotografia</p>
        <p>caminar</p>
        <p>escuchar música</p>
      </div>
    </div>
    
  );
};

export default InfoGrid;

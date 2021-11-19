import React from 'react';
import "./About.css";

export default function About() {
   return (
      <div className="all">
         <div>
            <h2 className="text">Wheather App en un SPA (Single Page Application), la misma proporciona informacion sobre el clima actualizado
               de distintas ciudades y de distintos paises. Los datos son obtenidos a traves de la API externa OpenWeatherMap,
               el estilo fue realizado con CSS puro y las funcionalidades con Javascript y React.
            </h2>
            <h2 >
               <h2 className='stack'>Stack tecnológico</h2>
               <ul className='ul1'>
                  <li className='li1'>Javascript</li>
                  <li className='li1'>HTML</li>
                  <li className='li1'>CSS</li>
                  <li className='li1'>React</li>
               </ul>
            </h2>

            <h3 classname="cont">Contactame</h3>
            <ul className='ul2'>
               <li ><a className='li2' href="https://github.com/Jose-G-Montenegro" target="_blank">Github</a></li>
               <li ><a className='li2' href="mailto:jocho1990@hotmail.com?Subject=Interesado%20en%20sus%20servicios" target="_blank">E-Mail</a></li>
               <li ><a className='li2' href="https://www.linkedin.com/in/jos%C3%A9-montenegro94" target="_blank">LinkedIn</a></li>
            </ul>
         </div>
      </div>
   )
};
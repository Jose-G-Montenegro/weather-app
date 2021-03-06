import React from "react";
import { useHistory } from "react-router";
import './Detail.css';

export default function Ciudad({ city }) {

    var history = useHistory();


    return (

        <div className="container">
            <button id='back' onClick={()=>history.goBack()}>Back</button>
            <h2 className="title">{city.name}</h2>
            <div className="info">
                <div className='individual'><h3>Temperatura:</h3><h3>{city.temp - 273} ºC</h3></div>
                <div className='individual'><h3>Sensacion Termica:</h3><h3>{city.feels_like - 273} ºC</h3></div>
                <div className='individual'><h3>Clima:</h3><h3>{city.weather}</h3></div>
                <div className='individual'><h3>Viento:</h3><h3>{city.wind} km/h</h3></div>
                <div className='individual'><h3>Nubes:</h3><h3>{city.clouds}%</h3></div>
                <div className='individual'><h3>Latitud:</h3><h3>{city.latitud}º</h3></div>
                <div className='individual'><h3>Longitud:</h3><h3>{city.longitud}º</h3></div>
                <div className='individual'><h3>Humedad:</h3><h3>{city.hum}%</h3></div>
            </div>
        </div>

    )
}
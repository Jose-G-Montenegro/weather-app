import React, { useState } from 'react';
import axios from 'axios';

import Cards from '../Cards/Cards.jsx'

function Home() {

    const [ciudad, setCiudad] = useState([]);

    function onClose(id) {
        setCiudad(oldCities => oldCities.filter(c => c.id !== id));
      };

    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

    const search = async (ciudad) => {
        try {
            const url = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`);
            const resp = url.data;
            if (resp !== undefined) {
                const city = {
                    min: resp.main.temp_min,
                    max: resp.main.temp_max,
                    temp: resp.main.temp,
                    hum: resp.main.humidity,
                    feels_like: resp.main.feels_like,
                    name: resp.name,
                    clouds: resp.clouds.all,
                    lon: resp.coord.lon,
                    lat: resp.coord.lat,
                    img: resp.weather[0].icon,
                    weather: resp.weather[0].main,
                    wind: resp.wind.speed,
                    id: resp.id
                }
                setCiudad(oldCities => [...oldCities,city]);
            }
            else {
                alert('Ciudad No Encontrada')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Cards/>
        </div>
    )
}

export default Home

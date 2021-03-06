import React, { useState } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import axios from 'axios';

import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Detail from '../components/Detail.jsx';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  async function onSearch(ciudad) {
    //Llamado a la API del clima
    var response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`);
    var recurso = response.data;
    if (recurso.main !== undefined) {
      const ciudad = {
        min: Math.round(recurso.main.temp_min),
        max: Math.round(recurso.main.temp_max),
        img: recurso.weather[0].icon,
        id: recurso.id,
        wind: recurso.wind.speed,
        temp: Math.round(recurso.main.temp),
        feels_like: Math.round(recurso.main.feels_like),
        hum: recurso.main.humidity,
        name: recurso.name,
        weather: recurso.weather[0].main,
        clouds: recurso.clouds.all,
        latitud: recurso.coord.lat,
        longitud: recurso.coord.lon
      };
      !!cities.find(e => e.name === ciudad.name) ?
        alert("Ciudad ya agregada") :
        setCities(oldCities => [...oldCities, ciudad]);
    }
    else {
      alert("Ciudad no encontrada");
    }
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch} />}></Route>
      <Route exact path="/" render={() => <Cards cities={cities} onClose={onClose} />}></Route>
      <Route exact path="/about" render={About}></Route>
      <Route exact path="/ciudad/:ciudadId" render={({ match }) => <Detail city={onFilter(match.params.ciudadId)} />}></Route>
    </div>
  );
}

export default App;

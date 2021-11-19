import React from 'react';
import './Card.css';
import { Link } from "react-router-dom";
import 'animate.css';

export default function Card({ min, max, name, img, onClose, id }) {

  return (
    <div class='animate__animated animate__zoomIn'>
      <div className="card">
        <div id="closeIcon" className="row">
          <Link to={`/ciudad/${id}`} >
            <div>More info</div>
          </Link>
          <button onClick={onClose} className="button">X</button>
        </div>
        <div className="card-body">

          <h5 className="card-title">{name}</h5>

          <div className="temp">
            <div >
              <p>Min</p>
              <p>{min - 273}°</p>
            </div>
            <div >
              <p>Max</p>
              <p>{max - 273}°</p>
            </div>
            <div >
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

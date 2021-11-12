import React from 'react'
import { Link } from 'react-router-dom'

function Card({ max, min, temp, name, id, onClose }) {
    return (
        <div>
            <div>
                <button onClick={onClose}>X</button>
            </div>
            <div>
                <h5>{name}</h5>
                <Link to='/weather/detail'>
                    <h5>more</h5>
                </Link>
            </div>
            <div>{temp}</div>
            <div>
                <div>
                    <h3>max</h3>
                    <h3>{max}</h3>
                </div>
                <div>
                    <h3>min</h3>
                    <h3>{min}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card

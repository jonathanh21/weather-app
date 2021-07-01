import React from 'react';
import { Link } from 'react-router-dom';
import s from './Card.module.css'

interface ICard {
    min:number;
    max:number;
    name:string;
    img:string;
    weather:string;
    onClose:()=>void;
    id:number
}

export default function Card ({min, max, name, img, onClose, id, weather}:ICard) {
    return (
        <div className={s.card}>
        <button onClick={onClose} className={s.btn}>X</button>
          <div className={s.close}>
            <Link className={s.title} to={`/ciudad/${id}`}>
              <div>{name}</div>
            </Link>
          </div>
          <div className={s.icon}>
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
          </div>
          <div className={s.body}>
              <div className={s.temp}>
                <p className={s.text}>Min: {min}°</p>
                <p className={s.text}>Max: {max}°</p>
            </div>
          </div>
        </div>

    );
};
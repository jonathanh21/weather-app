import React from "react";
import s from './Ciudad.module.css'

interface ICity {
    city:ICiudades
}

interface ICiudades {
    min: number,
    max: number,
    img: string,
    id: number,
    wind: string,
    temp: string,
    name: string,
    weather: string,
    clouds: string,
    latitud: string,
    longitud: string,
} 

export default function Ciudad({city}:ICity) {
    return (
        <div className={s.city}>
            <div className={s.container}>
                <div className={s.header}>{city.name}</div>
                <div className={s.body}>
                    <div className={s.prop}>Temperatura: {city.temp} ºC</div>
                    <div className={s.prop}>Clima: {city.weather}</div>
                    <div className={s.prop}>Viento: {city.wind} km/h</div>
                    <div className={s.prop}>Cantidad de nubes: {city.clouds}</div>
                    <div className={s.prop}>Latitud: {city.latitud}º</div>
                    <div className={s.prop}>Longitud: {city.longitud}º</div>
                </div>
            </div>
        </div>
    )
}
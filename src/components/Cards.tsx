import React from 'react';

import Card from './Card';

interface ICityCard {
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

interface ICards {
    cities:ICityCard[];
    onClose:(id:number)=> void
}

export default function Cards({cities, onClose}:ICards) {
  return (
    <div className='cards'>
      {cities.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          id={c.id}
          onClose={() => onClose(c.id)}
          weather={c.weather}
        /> )}
    </div>
  );
}
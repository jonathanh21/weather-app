import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import About from './components/About';
import Ciudad from './components/Ciudad';
import { BrowserRouter } from 'react-router-dom';
import apiKey from './apikey'

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

function App() {
  const [cities, setCities] = useState<ICiudades[]>([]);

  function onClose(id:number) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad:string) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          console.log(recurso)
          const ciudad:ICiudades = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  useEffect(()=> {
    onSearch('New York')
    onSearch('Roma')
    onSearch('Madrid')
    onSearch('Praga')
  },[])

  function onFilter(ciudadId:string) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return {
          min: 0,
          max: 0,
          img: 'No disponible',
          id: 0,
          wind: 'No disponible',
          temp: 'No disponible',
          name: 'No disponible',
          weather: 'No disponible',
          clouds: 'No disponible',
          latitud:'No disponible',
          longitud: 'No disponible',
        };
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Route 
        path='/' 
        render={() => <Nav onSearch={onSearch}/>} 
      />
      <Route 
        path='/about'
        component={About}
      />
      <Route 
        exact path='/ciudad/:ciudadId'
        render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)} />}
      />
      <div>
        <Route
          exact path='/'
          render={() => <Cards
            cities={cities}
            onClose={onClose}
          />}
        />
      </div>
      </BrowserRouter>,
    </div>
  );
}

export default App;


  // clear sky
	// few clouds
	// scattered clouds
	// broken clouds
 	// shower rain
	// rain
	// thunderstorm
 	// snow
 	// mist

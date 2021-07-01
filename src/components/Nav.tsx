import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import s from './Nav.module.css';
import about from '../assets/about.png'
import weather from '../assets/weather.png'

interface ISearchBar {
    onSearch:(city:string) => void
}

function Nav({onSearch}:ISearchBar) {
  return (
    <div>
      <div className={`${s.NavBar} ${s.container}`} >
        <div className={s.text}> WEATHER APP</div>
        <div className={s.container}>
          <Link className={s.link} to='/'>
            <img className={s.img} src={weather}/>
          </Link>
          <Link className={s.link} to='/about'>
            <img className={s.img} src={about}/>
          </Link>
        </div>
      </div>
        <SearchBar
          onSearch={onSearch}
        />
    </div>
  );
};

export default Nav;
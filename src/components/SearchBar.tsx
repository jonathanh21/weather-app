import { SSL_OP_ALL } from "constants";
import React, { useState } from "react";
import s from './SearchBar.module.css'
import searchIcon from '../assets/searchIcon.png'

interface ISearchBar {
    onSearch:(city:string) => void
}

export default function SearchBar({onSearch}:ISearchBar) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }} className={s.SearchBar}>
      <input
        className={s.input}
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button className={s.button} type="submit" ><img className={s.img} src={searchIcon}></img></button>
    </form>
  );
}
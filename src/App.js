import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './components/country/Country';

function App() {

  const [countries, setCountries] = useState([]);
  const [addCount, setAddCount] = useState([]);
  
  function clickHandle(eachCounty){
    const newArray = [...addCount, eachCounty]
    setAddCount(newArray);
  }

  console.log("addCount: ", addCount);

  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => {
      setCountries(data);
    })
  }, [])

  return (
    <div className="App">
      <h1>Total Countries: {countries.length}</h1>
      <h3>County Added: {addCount.length}</h3>
      {
        countries.map(country=><Country country={country} clickHandle={clickHandle}></Country>)
      }
    </div>
  );
}

export default App;

import React from 'react';
import './country.css'

const Country = (props) => {
    const{name, population, capital, flag} = props.country;
    const currencies = props.country.currencies[0].name;
    return (
        <div className="countyStyle">
            <h2>{name}</h2>
            <img src={flag} alt=""/>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Currencies Name: {currencies}</p>
            <button onClick={()=>props.clickHandle(props.country)}>Add County</button>
        </div>
    );
};

export default Country;
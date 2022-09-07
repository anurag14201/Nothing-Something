import React from 'react';
import './Countries.css'

const Countries = (props) => {
    const { name, population, area, region } = props.country;

    return (
        <div className='country'>
            <h2>Country Name :{name.common}</h2>
            <p>Population :{population}</p>
            <p><small>Area:{area}</small></p>
            <p><small>Region:{region}</small></p>
        </div>
    );
};

export default Countries;
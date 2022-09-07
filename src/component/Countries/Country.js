import React, { useEffect, useState } from 'react';
import Countries from '../Country/Countries';
import './Country.css'
const Country = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])


    return (
        <div>
            <div>
                <h1>
                    I am Here!!Country:{countries.length}
                </h1>
                <div className='country-container'>
                    {
                        countries.map(country => <Countries
                            country={country}
                            key={country.cca3}
                        ></Countries>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Country;
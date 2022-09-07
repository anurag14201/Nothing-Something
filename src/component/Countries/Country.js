import React, { useEffect, useState } from 'react';
import Countries from '../Country/Countries';

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
                {
                    countries.map(country => <Countries
                        country={country}
                    ></Countries>)
                }
            </div>
        </div>
    );
};

export default Country;
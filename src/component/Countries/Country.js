import React, { useEffect, useState } from 'react';

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
                    countries.map(country => console.log(country))
                }
            </div>
        </div>
    );
};

export default Country;
import React from 'react';

import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from 'axios';

function RandomBeer() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data);
      });
  }, []); // <- [] means: Run the effect only once, after initial render

  return (
    <div className="randomcard">
      <img src={beers.image_url} alt="beerImg" width="100px" />
      <h3>{beers.name}</h3>
      <div className="beer-card">
        <h4>{beers.tagline}</h4>
        <p>{beers.attenuation_level}</p>
        <p>{beers.first_brewed}</p>
        <p>{beers.description}</p>

        <p>Created by: {beers.contributed_by}</p>
      </div>
    </div>
  );
}

export default RandomBeer;

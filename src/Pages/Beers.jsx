import React from 'react';

import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from 'axios';

function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log('response.data', response.data);
      setBeers(response.data);
    });
  }, []); // <- [] means: Run the effect only once, after initial render

  return (
    <div>
      <h3>List of beers</h3>

      {beers.map((beer) => (
        <div key={beer._id} className="card">
          <Link to={`/beers/${beer._id}`}>
            {' '}
            <img src={beer.image_url} alt="beerImg" width="80px" />
            <h3>{beer.name}</h3>
          </Link>

          <h4>{beer.tagline}</h4>
          <p>Created by: {beer.contributed_by}</p>
        </div>
      ))}
    </div>
  );
}

export default Beers;

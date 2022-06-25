import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function NewBeer() {
  const [beers, setBeers] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });
  //   console.log(beers);
  const navigate = useNavigate();
  const [hasCreatedBeer, setHasCreatedBeer] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: 'POST',
      url: 'https://ih-beers-api2.herokuapp.com/beers/new',
      data: beers,
    }).then((response) => {
      console.log('response data', response.data);
      //clear the form
      setBeers('');

      //tell user the success message
      setHasCreatedBeer(true);
      // navigate user to all beer page
      navigate('/beers');
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlfor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Asahi"
            value={beers.name}
            onChange={(event) => {
              setBeers((prebeer) => {
                return { ...prebeer, [event.target.name]: event.target.value };
              });
            }}
          />
        </div>
        <div>
          <label htmlfor="tagline">Tagline</label>
          <input
            type="text"
            name="tagline"
            placeholder=""
            value={beers.tagline}
            onChange={(event) => {
              setBeers((prebeer) => {
                return { ...prebeer, [event.target.name]: event.target.value };
              });
            }}
          />
        </div>
        <div>
          <label htmlfor="description">Description</label>
          <input
            type="text"
            name="description"
            placeholder=""
            value={beers.description}
            onChange={(event) => {
              setBeers((prebeer) => {
                return { ...prebeer, [event.target.name]: event.target.value };
              });
            }}
          />
        </div>
        <div>
          <label htmlfor="first_brewed">First_brewed</label>
          <input
            type="text"
            name="first_brewed"
            placeholder=""
            value={beers.first_brewed}
            onChange={(event) => {
              setBeers((prebeer) => {
                return { ...prebeer, [event.target.name]: event.target.value };
              });
            }}
          />
        </div>
        <div>
          <label htmlfor="brewers_tips">Brewers_tips</label>
          <input
            type="text"
            name="brewers_tips"
            placeholder=""
            value={beers.brewers_tips}
            onChange={(event) => {
              setBeers((prebeer) => {
                return { ...prebeer, [event.target.name]: event.target.value };
              });
            }}
          />
        </div>
        <div>
          <label htmlfor="attenuation_level">Attenuation_level</label>
          <input
            type="number"
            name="attenuation_level"
            placeholder=""
            value={beers.attenuation_level}
            onChange={(event) => {
              setBeers((prebeer) => {
                return { ...prebeer, [event.target.name]: event.target.value };
              });
            }}
          />
        </div>
        <div>
          <label htmlfor="contributed_by">Contributed_by</label>
          <input
            type="text"
            name="contributed_by"
            placeholder=""
            value={beers.contributed_by}
            onChange={(event) => {
              setBeers((prebeer) => {
                return { ...prebeer, [event.target.name]: event.target.value };
              });
            }}
          />
        </div>

        <button className="btn-create" type="submit">
          Add New
        </button>
      </form>
      {hasCreatedBeer && <p>You have added a new beer!</p>}
    </div>
  );
}

export default NewBeer;

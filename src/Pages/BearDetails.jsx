import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BeerDetails = () => {
  const [beerInfo, setBeerInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // We want to get the id from the URL parameters
  const params = useParams();

  useEffect(() => {
    let config = {
      method: 'get',
      url: `https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`,
    };
    console.log('id', params.beerId);
    axios(config)
      .then((response) => {
        // if (!response.data) {
        //   setErrorMessage('API returned no data')
        // } else {
        setBeerInfo(response.data);
        // }
      })
      .catch((error) => {
        setErrorMessage('Could not get info');
      });
  }, [params.beerId]);

  if (errorMessage) {
    return (
      <>
        <h1>Error</h1>
        <p>{errorMessage}</p>
      </>
    );
  }

  if (!beerInfo) {
    return <h1>Loading beer info…</h1>;
  }

  return (
    <>
      <img src={beerInfo.image_url} alt="beerImg" width="100px" />
      <h3>{beerInfo.name}</h3>
      <div className="beer-card">
        <h4>{beerInfo.tagline}</h4>
        <p>{beerInfo.attenuation_level}</p>
        <p>{beerInfo.first_brewed}</p>
        <p>{beerInfo.description}</p>

        <p>Created by: {beerInfo.contributed_by}</p>
      </div>
    </>
  );
};

export default BeerDetails;

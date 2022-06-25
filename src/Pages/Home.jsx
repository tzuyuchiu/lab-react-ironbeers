import React from 'react';
import Beers from './Beers';
import beerImg from '../assets/beers.png';
import RandomBeer from './RandomBeer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewBeer from './NewBeer';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import randombeerImg from '../assets/random-beer.png';
import newbeerImg from '../assets/new-beer.png';
function Home() {
  return (
    <div>
      <Link to="/beers">
        <div>
          <img src={beerImg} alt="all-beers" />
          <h2>All Beers</h2>
        </div>
      </Link>
      <Link to="/random-beer">
        <div>
          <img src={randombeerImg} alt="random-beers" />
          <h2>Random Beers</h2>
        </div>
      </Link>
      <Link to="/new-beer">
        <div>
          <img src={newbeerImg} alt="new-beers" />
          <h2>New Beers</h2>
        </div>
      </Link>
    </div>
  );
}

export default Home;

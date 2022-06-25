import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Beers from './Pages/Beers';
import RandomBeer from './Pages/RandomBeer';
import NewBeer from './Pages/NewBeer';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import BeerDetails from './Pages/BearDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/beers" element={<Beers />} />
            <Route path="/beers/:beerId" element={<BeerDetails />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<NewBeer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Series from './pages/Series'
import Search from './pages/Search';
import MovieDetails from './pages/MovieDetails';
import SeriesDetails from './pages/SeriesDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movie/>} />
          <Route path='/series' element={<Series/>} />
          <Route path='search' element={<Search/>} />
          <Route path='/movies/details/:id' element={<MovieDetails/>} />
          <Route path='/series/details/:id' element={<SeriesDetails/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
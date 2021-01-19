import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Movie from './pages/Movie'
import MovieDetails from './pages/MovieDetails'
import MoviesSearch from './pages/MoviesSearch'

import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:movie' element={<Movie/>} />
        <Route path='/movies/search' element={<MoviesSearch/>} />
        <Route path='/:movie/details' element={<MovieDetails/>} />
      </Routes>

      <GlobalStyles />

    </BrowserRouter>
  );
}

export default App;

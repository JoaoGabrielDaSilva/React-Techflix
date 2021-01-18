import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Movie from './pages/Movie'
import MovieDetails from './pages/MovieDetails'

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:movie' element={<Movie/>} />
        <Route path='/:movie/details' element={<MovieDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

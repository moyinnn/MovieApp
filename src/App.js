  import React, { useState } from 'react';
  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import MovieCard from './moviecard/MovieCard';
  import MovieList from './movielist/MovieList';
  import Filter from './filter';
  import './App.css';
  import Home from './Components/home';

  const App = () => {
  const movies = [
    {
      id: 1,
      title: 'BLACK PANTHER WAKANDA FOREVER',
      description:
        'After the death of his father TChalla returns home to the African nation of Wakanda to take his rightful place as king. ',
      posterURL: 'https://media.premiumtimesng.com/wp-content/files/2022/11/wak.jpg',
      rating: 9.3,
    },
    {
      id: 2,
      title: 'THE CONTRACTOR',
      description:
        'A discharged U.S. Special Forces sergeant, James Harper, risks everything for his family when he joins a private contracting organization.',
      posterURL: 'https://rnn.ng/wp-content/uploads/2022/05/the-contractor-scaled.webp',
      rating: 9.2,
    },
  ];

  return (
    <div className='App'>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}
        <h1>Movie List</h1>
        {/* <Filter filterTitle={handleTitleFilter} filterRate={handleRateFilter} /> */}
        <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/movies" element={<MovieList  />} />
          <Route path="/movies/:id" element={<MovieCard  />} />
        </Routes>
        <div className="add-movie-form">
          <h2>Add a New Movie</h2>
          <form
                      onSubmit={(e) => {
                      e.preventDefault();
                      const newMovie = {
                        id: movies.length + 1,
                        title: e.target.title.value,
                        description: e.target.description.value,
                        posterURL: e.target.posterURL.value,
                        rating: parseFloat(e.target.rating.value),
                      };
                      //  handleAddMovie(newMovie);
                      e.target.reset();
                    }}
          >
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" />
            <br />
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" />
            <br />
            <label htmlFor="posterURL">Poster URL:</label>
            <input type="text" id="posterURL" name="posterURL" />
            <br />
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" name="rating" step="0.1" min="0" max="10" />
            <br />
            <button type="submit">Add Movie</button>
            </form>

            </div>
            
            </div>


  );
  };
  export default App;

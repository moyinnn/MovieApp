import React, { useState } from 'react';
import MovieCard from './MovieCard/MovieCard';
import MovieList from './MovieList/MovieList';
import Filter from './Filter';
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: ' BLACK PANTHER WAKANDA FOREVER',
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
    // more movies...
  ]);
  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleTitleFilter = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRateFilter = (e) => {
    setRateFilter(e.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating.toString().includes(rateFilter)
      
    );
  });

  return (
    <div className="App">
      <h1>Movie List</h1>
      <Filter filterTitle={handleTitleFilter} filterRate={handleRateFilter} />
      <MovieList movies={filteredMovies} />
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
            handleAddMovie(newMovie);
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
          <input type="number" id="rating" name="rating" min="0" max="10" step="0.1" />
          <br />
          <button type="submit">Add Movie</button>
        </form>
      </div>
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}>
          <img src={movie.posterURL}  alt={movie.title} />
        </MovieCard>
      ))}
    </div>
  );
};

export default App;

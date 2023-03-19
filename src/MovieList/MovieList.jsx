

    const MovieList = ({ movies }) => {
    return (
    <div className="movie-list">
        {movies.map((Movie) => (
        <MovieList key={Movie.id} {...Movie} />
        ))}
    </div>
    );
    };

    export default MovieList;
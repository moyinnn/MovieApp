

const MovieCard = ({ movie }) => {
    return (
        <div>
        <img src={movie?.posterURL} style={{width:'350px'}} alt={movie?.title} />
        <h3>{movie?.title}</h3>
        <p>{movie?.description}</p>
        <p>Rating: {movie?.rating}</p>
        </div>
    );
    };
    export default MovieCard;
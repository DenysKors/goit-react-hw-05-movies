import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/moviesApi';

export const MovieCast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(Number(movieId))
      .then(data => setMovieCast(data))
      .catch(error => alert('Sorry, cast temporarily unavailable'));
  }, [movieId]);

  if (!movieCast) {
    return null;
  }

  const { cast } = movieCast;

  return (
    <ul>
      {cast.map(({ original_name, profile_path, character, id }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={original_name}
            width="100"
          />
          <p>{original_name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

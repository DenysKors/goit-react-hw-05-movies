import { useState, useEffect } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { getMovieById } from 'api/moviesApi';
import { MovieBox, MovieInfo } from './Box.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovieById(Number(movieId)).then(data => setMovie(data));
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const {
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
  } = movie;

  const releaseYear = release_date ? release_date?.slice(0, 4) : 'No info';

  console.log(location);
  const backLink = location.state?.from ?? '/home';

  function parseGenres(genres) {
    const movieGenres = genres.map(genre => genre.name);
    return movieGenres.join(', ');
  }

  return (
    <main>
      <Link to={backLink}>Go back</Link>
      <MovieBox>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
          />
        </div>
        <div>
          <h2>{`${original_title} (${releaseYear})`}</h2>
          <ul>
            <li>
              <p>User score: {vote_average}%</p>
            </li>
            <li>
              <h3>Overview</h3>
            </li>
            <li>
              <p>{overview}</p>
            </li>
            <li>
              <h3>Genres</h3>
            </li>
            <li>
              <p>{parseGenres(genres)}</p>
            </li>
          </ul>
        </div>
      </MovieBox>
      <MovieInfo>
        <p>Additional information</p>
        <ul>
          <li>
            <Link>Cast</Link>
          </li>
          <li>
            <Link>Reviews</Link>
          </li>
        </ul>
      </MovieInfo>
      <Outlet />
    </main>
  );
};

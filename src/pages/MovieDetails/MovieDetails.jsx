import { useState, useEffect } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { getMovieById } from 'api/moviesApi';
import { MovieBox, MovieInfo } from './Box.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  // const location = useLocation();

  useEffect(() => {
    getMovieById(Number(movieId))
      .then(data => setMovie(data))
      .catch(error => alert('Sorry, this movie temporarily unavailable'));
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

  // const backLink = location.state?.from ?? '/home';

  function parseGenres(genres) {
    const movieGenres = genres.map(genre => genre.name);
    return movieGenres.join(', ');
  }

  return (
    <main>
      <Link to="/">Go back</Link>
      <MovieBox>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
          />
        </div>
        <section>
          <h2>{`${original_title} (${releaseYear})`}</h2>
          <ul>
            <li>
              <p>User score: {(vote_average * 10).toFixed(0)}%</p>
            </li>
            <li>
              <h3>Overview</h3>
            </li>
            <li>
              <p>{overview}</p>
            </li>
            <li>
              <h4>Genres</h4>
            </li>
            <li>
              <p>{parseGenres(genres)}</p>
            </li>
          </ul>
        </section>
      </MovieBox>
      <MovieInfo>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </MovieInfo>
      <Outlet />
    </main>
  );
};

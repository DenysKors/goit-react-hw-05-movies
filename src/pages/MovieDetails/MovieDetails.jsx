import { useState, useEffect, useMemo } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from 'api/moviesApi';
import { MovieBox, MovieInfo, NavItem } from './MovieDetails.styled';

import { POSTER_BASE_URL, DEFAULT_IMG_URL } from 'constants/imagePath';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovieById(Number(movieId))
      .then(data => setMovie(data))
      .catch(error => alert('Sorry, this movie temporarily unavailable'));
  }, [movieId]);

  const genresList = useMemo(() => {
    if (!movie) {
      return;
    }
    return movie.genres.map(genre => genre.name).join(', ');
  }, [movie]);

  if (!movie) {
    return null;
  }

  const { original_title, release_date, vote_average, overview, poster_path } =
    movie;

  const releaseYear = release_date ? release_date?.slice(0, 4) : 'No info';

  // function parseGenres(genres) {
  //   const movieGenres = genres.map(genre => genre.name);
  //   return movieGenres.join(', ');
  // }

  const linkHref = location.state?.from ?? '/';

  return (
    <main>
      <NavItem to={linkHref}>Go back</NavItem>
      <MovieBox>
        <div>
          <img
            src={poster_path ? POSTER_BASE_URL + poster_path : DEFAULT_IMG_URL}
            alt={original_title}
            width="250"
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
              <p>{genresList}</p>
            </li>
          </ul>
        </section>
      </MovieBox>
      <MovieInfo>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: linkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: linkHref }}>
              Reviews
            </Link>
          </li>
        </ul>
      </MovieInfo>
      <Outlet />
    </main>
  );
};

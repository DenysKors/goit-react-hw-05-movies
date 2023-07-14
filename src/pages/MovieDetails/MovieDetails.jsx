import { useState, useEffect, useMemo } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from 'api/moviesApi';
import {
  MovieBox,
  MovieInfo,
  NavItem,
  MovieTitle,
  MovieImage,
  Thumb,
  MovieRating,
  SubTitle,
  Text,
  DetailLink,
  DetailItem,
} from './MovieDetails.styled';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

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

  const linkHref = location.state?.from ?? '/';

  return (
    <main>
      <NavItem to={linkHref}>
        <ChevronLeftIcon />
        Go back
      </NavItem>
      <MovieBox>
        <Thumb>
          <MovieImage
            src={poster_path ? POSTER_BASE_URL + poster_path : DEFAULT_IMG_URL}
            alt={original_title}
            width="250"
          />
          <MovieRating>
            <ThumbUpIcon /> {(vote_average * 10).toFixed(0)}%
          </MovieRating>
        </Thumb>
        <section>
          <MovieTitle>{`${original_title} (${releaseYear})`}</MovieTitle>
          <SubTitle>Overview:</SubTitle>
          <Text>{overview}</Text>
          <SubTitle>Genres:</SubTitle>
          <Text>{genresList}</Text>
        </section>
      </MovieBox>
      <MovieInfo>
        <SubTitle>Additional information:</SubTitle>
        <ul style={{ display: 'inline-flex', flexDirection: 'column' }}>
          <DetailItem>
            <DetailLink to="cast" state={{ from: linkHref }}>
              Cast
            </DetailLink>
          </DetailItem>
          <DetailItem>
            <DetailLink to="reviews" state={{ from: linkHref }}>
              Reviews
            </DetailLink>
          </DetailItem>
        </ul>
      </MovieInfo>
      <Outlet />
    </main>
  );
};

import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import { SearchBox } from 'components/SearchBox/SearchBox';
import {
  ItemsBox,
  MovieItem,
  MovieLink,
  Thumb,
  Image,
  MovieTitle,
} from 'pages/Home/Home.styled';
import { getMovieByName } from 'api/moviesApi';

import { MainBox } from './Movies.styled';

import { POSTER_BASE_URL, DEFAULT_IMG_URL } from 'constants/imagePath';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieName === '') {
      return;
    }

    async function fetchMovieByName(movieName) {
      try {
        const data = await getMovieByName(movieName);
        setSearchMovie(data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovieByName(movieName);
  }, [movieName]);

  const updateQuery = query => {
    const normalizedQuery = query.toLowerCase().trim();
    const nextParams = normalizedQuery !== '' ? { query: normalizedQuery } : {};
    setSearchParams(nextParams);
  };

  return (
    <MainBox>
      <SearchBox onSubmit={updateQuery} />
      {searchMovie && (
        <ItemsBox>
          {searchMovie.map(movie => (
            <MovieItem key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <Thumb>
                  <Image
                    src={
                      movie.poster_path
                        ? POSTER_BASE_URL + movie.poster_path
                        : DEFAULT_IMG_URL
                    }
                    alt={
                      movie.original_title
                        ? movie.original_title
                        : movie.original_name
                    }
                  />
                  <MovieTitle>
                    {movie.original_title
                      ? movie.original_title
                      : movie.original_name}
                  </MovieTitle>
                </Thumb>
              </MovieLink>
            </MovieItem>
          ))}
        </ItemsBox>
      )}
    </MainBox>
  );
};

export default Movies;

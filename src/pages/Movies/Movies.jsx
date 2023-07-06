import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';

import { SearchBox } from 'components/SearchBox/SearchBox';
import { getMovieByName } from 'api/moviesApi';

import { MainBox } from './Movies.styled';

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
        <ul>
          {searchMovie.map(movie => (
            <li key={movie.id} style={{ marginBottom: 8 }}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.original_title
                  ? movie.original_title
                  : movie.original_name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </MainBox>
  );
};

export default Movies;

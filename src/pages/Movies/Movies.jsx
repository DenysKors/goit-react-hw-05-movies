import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { getMovieByName } from 'api/moviesApi';

export const Movies = () => {
  const [searchMovie, setSearchMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieName === '') {
      return;
    }

    getMovieByName(movieName)
      .then(data => setSearchMovie(data.results))
      .catch(error => alert('Sorry, please try again'));
  }, [movieName]);

  const updateQuery = query => {
    const normalizedQuery = query.toLowerCase().trim();
    const nextParams = normalizedQuery !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox onSubmit={updateQuery} />
      {searchMovie && (
        <ul>
          {searchMovie.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.original_title
                  ? movie.original_title
                  : movie.original_name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

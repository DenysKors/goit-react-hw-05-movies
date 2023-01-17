import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { getMovieByName } from 'api/moviesApi';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieName === '') {
      return;
    }

    async function fetchMovieByName() {
      try {
        const data = await getMovieByName();
        setSearchMovie(data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovieByName();
    // getMovieByName(movieName)
    //   .then(data => setSearchMovie(data.results))
    //   .catch(error => alert('Sorry, please try again'));
  }, [movieName]);

  const updateQuery = query => {
    const normalizedQuery = query.toLowerCase().trim();
    const nextParams = normalizedQuery !== '' ? { query: normalizedQuery } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
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
    </main>
  );
};

export default Movies;

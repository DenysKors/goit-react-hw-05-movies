import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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
      .then(data => setSearchMovie(data))
      .catch(error => alert('Sorry, please try again'));
  }, [movieName]);

  // if (!searchMovie) {
  //   return null;
  // }

  const updateQuery = query => {
    const normalizedQuery = query.toLowerCase().trim();
    const nextParams = normalizedQuery !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const { results } = searchMovie;
  console.log(results);

  return (
    <main>
      <SearchBox onSubmit={updateQuery} />
    </main>
  );
};

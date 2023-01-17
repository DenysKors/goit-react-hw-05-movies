import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'api/moviesApi';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => setTrendingMovies(data.results));
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id} style={{ marginBottom: 8 }}>
            <Link to={`/movies/${movie.id}`}>
              {movie.original_title
                ? movie.original_title
                : movie.original_name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

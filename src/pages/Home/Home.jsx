import { useEffect, useState } from 'react';

import { getTrendingMovies } from 'api/moviesApi';
import { POSTER_BASE_URL, DEFAULT_IMG_URL } from 'constants/imagePath';
import {
  MovieItem,
  Thumb,
  Image,
  MovieTitle,
  ItemsBox,
  Main,
  PageTitle,
  MovieLink,
} from './Home.styled';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchTrendMovies();
  }, []);

  return (
    <Main>
      <PageTitle>Trending today</PageTitle>
      <ItemsBox>
        {trendingMovies &&
          trendingMovies.map(movie => (
            <MovieItem key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`}>
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
    </Main>
  );
};

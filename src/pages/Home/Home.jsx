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
  Paginator,
  PaginatorWrapper,
} from './Home.styled';

let totalPages = 1;

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        const data = await getTrendingMovies(page);
        setTrendingMovies(data.results);
        setPage(data.page);
        totalPages = data.total_pages;
        window.scrollTo(0, 0);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchTrendMovies();
  }, [page]);

  const handleChange = (_, page) => {
    setPage(page);
  };

  return (
    <>
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
      <PaginatorWrapper>
        <Paginator
          page={page}
          count={totalPages}
          size="medium"
          onChange={handleChange}
          // sx={{
          //   '& .MuiPaginationItem-root': {
          //     color: '#ff7d32',
          //   },
          //   '& .MuiPaginationItem-root.Mui-selected': {
          //     backgroundColor: '#e5e5e5',
          //     color: '#000',
          //     &:hover: {
          //       color: '#e5e5e5',
          //     },
          //   },
          // }}
        />
      </PaginatorWrapper>
    </>
  );
};

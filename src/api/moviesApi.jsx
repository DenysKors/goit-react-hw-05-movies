import axios from 'axios';

const API_KEY = '2e591c290112335817a26b1a44671da3';

export const getTrendingMovies = async () => {
  const apiParams = new URLSearchParams({ api_key: API_KEY });
  const responce = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?${apiParams}`
  );
  return responce.data;
};

export const getMovieById = async movieId => {
  const apiParams = new URLSearchParams({ api_key: API_KEY });
  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?${apiParams}`
  );
  return responce.data;
};

export const getMovieCast = async movieId => {
  const apiParams = new URLSearchParams({ api_key: API_KEY });
  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?${apiParams}`
  );
  return responce.data;
};

export const getMovieReviews = async movieId => {
  const apiParams = new URLSearchParams({ api_key: API_KEY });
  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?${apiParams}&page=1`
  );
  return responce.data;
};

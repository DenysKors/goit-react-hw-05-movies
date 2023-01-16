import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/moviesApi';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(Number(movieId))
      .then(data => setMovieReviews(data))
      .catch(error => alert('Sorry, reviews temporarily unavailable'));
  }, [movieId]);

  if (!movieReviews) {
    return null;
  }

  const { results } = movieReviews;

  return (
    <>
      {results.length === 0 && <p>We don't have any reviews for this movie</p>}
      {results.length > 0 && (
        <ul>
          {results.map(({ id, author, content }) => (
            <li key={id}>
              <p>
                <b>Author: {author}</b>
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

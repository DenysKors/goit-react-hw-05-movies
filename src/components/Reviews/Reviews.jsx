import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/moviesApi';

import { ReviewItem } from './Reviews.styled';

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
      {results.length === 0 && (
        <p style={{ color: '#ff7d32' }}>
          We don't have any reviews for this movie
        </p>
      )}
      {results.length > 0 && (
        <ul style={{ marginTop: '5px' }}>
          {results.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <p style={{ marginBottom: '3px' }}>
                <b>Author: {author}</b>
              </p>
              <p>{content}</p>
            </ReviewItem>
          ))}
        </ul>
      )}
    </>
  );
};

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/moviesApi';

import { ItemsWrapper, ActorItem, ActorText, Box } from './Cast.styled';

const ACTOR_PHOTO_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_IMG_URL = 'https://placehold.co/500x750?text=No+Image';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(Number(movieId))
      .then(data => setMovieCast(data))
      .catch(error => alert('Sorry, cast temporarily unavailable'));
  }, [movieId]);

  if (!movieCast) {
    return null;
  }

  const { cast } = movieCast;

  return (
    <ItemsWrapper>
      {cast.map(({ original_name, profile_path, character, id }) => (
        <ActorItem key={id}>
          <img
            src={
              profile_path
                ? ACTOR_PHOTO_BASE_URL + profile_path
                : DEFAULT_IMG_URL
            }
            alt={original_name}
            loading="lazy"
          />
          <Box>
            <ActorText style={{ textAlign: 'center' }}>
              {original_name}
            </ActorText>
            <ActorText>
              <span style={{ display: 'block' }}>Character:</span> {character}
            </ActorText>
          </Box>
        </ActorItem>
      ))}
    </ItemsWrapper>
  );
};

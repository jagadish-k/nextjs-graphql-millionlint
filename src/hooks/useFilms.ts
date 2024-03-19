import { Film } from '@app/__generated__/graphql';
import { useLazyQuery } from '@apollo/client';

import StarWarsQUery from '@app/graphql/star-wars-query.graphql';
import { useState } from 'react';

const useFilms = () => {
  const [films, setFilms] = useState<Film[]>();
  const [getFilms, { data, loading, error }] = useLazyQuery(StarWarsQUery, {
    fetchPolicy: 'cache-and-network',
    onCompleted: () => {
      setFilms(data.allFilms.films);
    },
  });

  return {
    getFilms,
    loading,
    error,
    films,
  };
};

export default useFilms;

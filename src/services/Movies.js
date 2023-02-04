import { useQuery } from 'react-query';
import api from '../api';
import constants from '../constants';

const MovieService = {
  // returns list of all movies
  useMovieList: (query) =>
    useQuery(['searchMovies', query], async () => {
      if (query) {
        const params = { params: { query: query, api_key: constants.api_key } };

        try {
          const { data } = await api.get(`/search/movie`, params);
          return data.results;
        } catch (error) {
          return Promise.reject(error);
        }
      }
    }),
  // return one specific movie detail
  useMovieDetail: (id) =>
    useQuery(['movieDetail', id], async () => {
      const params = { params: { api_key: constants.api_key } };
      try {
        const { data } = await api.get(`/movie/${id}`, params);
        return data;
      } catch (error) {
        return Promise.reject(error);
      }
    }),
};

export default MovieService;

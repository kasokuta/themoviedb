import MovieService from '../services/Movies';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import constants from '../constants';

const MovieDetailPage = () => {
  const { id } = useParams();

  const { status, data } = MovieService.useMovieDetail(id);

  const getGenresName = (genres) => {
    return genres?.map((genre) => genre.name).join(', ');
  };

  return (
    <Container>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'error' && <div>Error</div>}
      <ImageContainer>
        <img alt={data?.title} src={`${constants.image_url}${data?.poster_path ?? ''}`} />
      </ImageContainer>
      <Details>
        <span>
          <b>Title:</b> {data?.title}
        </span>
        <span>
          <b>Rating:</b> {Math.floor(data?.vote_average)}
        </span>
        <span>
          <b>Status:</b> {data?.status}
        </span>
        <span>
          <b>Genres:</b> {getGenresName(data?.genres)}
        </span>
        <span>
          <b>Overview: </b>
          {data?.overview}
        </span>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    margin-bottom: 5px;
  }
`;

export default MovieDetailPage;

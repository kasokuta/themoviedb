import { useState } from 'react';
import List from '../components/List';
import Search from '../components/Search';
import MovieService from '../services/Movies';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const [query, setQuery] = useState('');
  const { status, data } = MovieService.useMovieList(query);
  const navigate = useNavigate();

  const clickHandler = (text) => {
    setQuery(text);
  };

  const onItemClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <Container>
      <Search onSearch={clickHandler} />
      {status === 'loading' && <div>Loading...</div>}
      {status === 'error' && <div>Error</div>}
      <List data={data} onItemClick={onItemClick} />
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

export default Home;

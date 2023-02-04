import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const List = ({ data, onItemClick }) => (
  <Container>
    {data?.map((movie) => (
      <ListItem key={movie.id} movie={movie} onItemClick={onItemClick} />
    ))}
  </Container>
);

const Container = styled.ul`
  padding: 0;
`;

export default List;

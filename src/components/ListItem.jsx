import React from 'react';
import styled from 'styled-components';
import constants from '../constants';

const ListItem = ({ movie, onItemClick }) => (
  <Container onClick={() => onItemClick(movie.id)}>
    <StyledImg alt={movie.title} src={`${constants.image_url}${movie.poster_path}`} />
    <ShortDesc>
      <Title>
        <b>Title:</b> {movie.title}
      </Title>
      <Rating>
        <b>Rating: </b> {movie.vote_average}
      </Rating>
    </ShortDesc>
  </Container>
);

const Container = styled.li`
  list-style-type: none;
  display: flex;
  margin-bottom: 20px;
`;

const ShortDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`;

const Title = styled.span`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Rating = styled.span`
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledImg = styled.img`
  @media (max-width: 768px) {
    width: 50%;
  }
`;

export default ListItem;

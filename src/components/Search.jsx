import { useState } from 'react';
import styled from 'styled-components';

const Search = ({ onSearch }) => {
  const [text, setText] = useState('');
  return (
    <Container>
      <StyledInput type='text' onChange={(e) => setText(e.target.value)} />
      <button onClick={() => onSearch(text)}>Search</button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  margin-right: 10px;
  font-size: 1.5rem;
`;

export default Search;

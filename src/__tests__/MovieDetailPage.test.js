import { render, screen } from '@testing-library/react';
import MovieDetailPage from '../pages/MovieDetailPage';
import * as reactQuery from 'react-query';
import constants from '../constants';

const data = {
  genres: [
    {
      id: 35,
      name: 'Comedy',
    },
  ],
  id: 239563,
  overview:
    'A young boy whose parents just divorced finds an unlikely friend and mentor in the misanthropic, bawdy, hedonistic, war veteran who lives next door.',
  poster_path: '/1bb7MTHCIPhpKZFysDpxNaNrdMk.jpg',
  status: 'Released',
  title: 'St. Vincent',
  vote_average: 7.093,
};

test('renders Detail page', () => {
  reactQuery.useQuery = jest.fn().mockReturnValue({ data: data, isSuccess: true });

  render(<MovieDetailPage />);

  expect(screen.getByRole('img').src).toBe(`${constants.image_url}${data.poster_path}`);
  expect(screen.getByText(data.title)).toBeInTheDocument();
  expect(screen.getByText(data.status)).toBeInTheDocument();
  expect(screen.getByText(Math.floor(data.vote_average))).toBeInTheDocument();
  expect(screen.getByText(data.overview)).toBeInTheDocument();
});

import { render, screen, within } from '@testing-library/react';
import List from '../components/List';
import constants from '../constants';

const data = [
  {
    id: 239563,
    title: 'St. Vincent',
    vote_average: 7.1,
    poster_path: '/1bb7MTHCIPhpKZFysDpxNaNrdMk.jpg',
  },
  {
    id: 502406,
    title: 'St. Agatha',
    vote_average: 5.6,
    poster_path: '/vfEn1cjQh4Mgcbnwim07hLy5aie.jpg',
  },
];

test('Renders List', async () => {
  render(<List data={data} />);

  const items = await screen.findAllByRole('listitem');
  expect(items).toHaveLength(2);

  items.forEach((item, index) => {
    const { getByText, getByRole } = within(item);
    const { title, vote_average, poster_path } = data[index];

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(vote_average)).toBeInTheDocument();
    expect(getByRole('img').src).toBe(`${constants.image_url}${poster_path}`);
  });
});

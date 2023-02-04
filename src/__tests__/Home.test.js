import { render, screen } from '@testing-library/react';
import Home from '../pages/home';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import * as reactQuery from 'react-query';

const wrapper = (child) => {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>{child}</QueryClientProvider>;
};

test('renders Home page', () => {
  reactQuery.useQuery = jest.fn().mockReturnValue({ data: [], isSuccess: true });

  render(wrapper(<Home />), { wrapper: BrowserRouter });
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByRole('button')).toHaveTextContent('Search');
});

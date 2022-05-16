import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { Home } from './Home';

test('renders learn react link', () => {
  renderWithTheme(<Home />);
  const headingContainer = screen.getByRole('heading', { name: 'Hello' }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: theme.colors.main,
  });
  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('background', 'red');
});

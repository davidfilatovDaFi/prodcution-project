import { fireEvent, render, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/test';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('test render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('toggle button', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    const toggle = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggle);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});

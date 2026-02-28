// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CodeBlaze title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CodeBlaze/i);
    expect(titleElement).toBeInTheDocument();
});

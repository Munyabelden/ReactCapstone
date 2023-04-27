import React from "react";
import { render, screen } from "@testing-library/react";
import Header from  '../components/Header';

test('should display image and text', () => {
  render(<Header />);

  expect(screen.getByTestId('home')).toBeInTheDocument();
});
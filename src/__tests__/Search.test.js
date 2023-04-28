import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Form from '../components/Search';

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe('Form', () => {
  it('should call onSearch function with filtered countries when input value changes', () => {
    const onSearchMock = jest.fn();
    useSelector.mockReturnValue({ countries: [{ name: 'USA' }, { name: 'Canada' }] });
    render(<Form onSearch={onSearchMock} />);
    const input = screen.getByPlaceholderText('Search by country name');
    fireEvent.change(input, { target: { value: 'u' } });
    expect(onSearchMock).toHaveBeenCalledWith([{ name: 'USA' }]);
  });
});

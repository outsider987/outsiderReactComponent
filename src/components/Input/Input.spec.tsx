import {fireEvent, render} from '@testing-library/react';
import * as React from 'react';
import Input from '.';

// test('adds 1 + 2 to equal 3', () => {
//   // Arrange
//   const x: number = 1; const y: number = 2;
//   const expected: number = 3;

//   // Act
//   const actual: number = sum(x, y);

//   // Assert
//   expect(actual).toBe(expected);
// });
describe('Input', () => {
  it('renders and check input type', () => {
    const inputValue = 'matti';
    const co = render(
        <Input type="string" value={inputValue} ></Input>,
    );
    const input = co.getByTestId('add-word-input') as HTMLInputElement;
    fireEvent.change(input, {target: {value: inputValue}});
    expect(typeof input.value).toBe('string');
  });
});

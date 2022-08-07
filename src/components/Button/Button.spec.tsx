import {fireEvent, render} from '@testing-library/react';
import * as React from 'react';
import Button from './index';

// test('adds 1 + 2 to equal 3', () => {
//   // Arrange
//   const x: number = 1; const y: number = 2;
//   const expected: number = 3;

//   // Act
//   const actual: number = sum(x, y);

//   // Assert
//   expect(actual).toBe(expected);
// });
describe('Button', () => {
  it('renders and check input type', () => {
    const inputValue = 'matti';
    const co = render(<Button></Button>);
    const button = co.getByTestId('btn') as HTMLButtonElement;
    fireEvent.change(button, {target: {value: inputValue}});
    expect(typeof button);
  });
});

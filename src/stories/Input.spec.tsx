import { render } from '@testing-library/react';
import * as React from 'react';
import Input from './Input';

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
  it('renders', () => {
    render(
        <Input type='string' value={1} setInput={() => {}}></Input>,
    );
    
    // expect(queryAllByAltText('')).toHaveLength(0);
  });
});

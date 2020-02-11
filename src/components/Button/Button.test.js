import Button from './index';
import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('loads button with children text', async () => {
  const myText = 'Hello World';
  const { container } = render(<Button>{myText}</Button>);
  expect(container).toHaveTextContent(myText);
});

test('loads button with passed prop text', async () => {

  const myText = 'Hello World';

  const { container } = render(<Button text={myText} />);
  expect(container).toHaveTextContent(myText);
});

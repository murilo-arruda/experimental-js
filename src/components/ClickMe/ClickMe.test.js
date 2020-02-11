import React from 'react';
import ClickMe from './index';
import { render, fireEvent } from '@testing-library/react'


test('Deafult text should be Hello', async () => {

  const { container, getByRole } = render(<ClickMe />);
  expect(getByRole('button')).toHaveTextContent('Hello');

});

test('When clicked test should change', async () => {

  const { container, getByRole } = render(<ClickMe />)

  fireEvent.click(getByRole('button'));

  expect(container).toHaveTextContent('Hello World');


});
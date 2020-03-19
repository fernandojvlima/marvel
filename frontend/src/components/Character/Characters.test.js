import React from 'react';

import { render, waitForElement } from '@testing-library/react'

import Character from './index'

describe('Tests  for Character Component', () => {
  it('Should render characters from Marvel Api once the server is up', async () => {
    const { getByTestId } = render(<Character />)
    const fieldNode = await waitForElement(
      () => getByTestId('character-container')
    )
    console.log(fieldNode)
  })
})
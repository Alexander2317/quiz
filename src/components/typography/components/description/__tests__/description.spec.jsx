import React from 'react'
import { render } from '@testing-library/react'

import Description from '../description'

const text = 'test'

test('<Description /> check render text', () => {
  const { getByText } = render(<Description text={text} />)
  expect(getByText(text)).toBeDefined()
})

test('<Description /> check render inline', () => {
  const { getByTestId, rerender } = render(<Description isInline text={text} />)
  expect(getByTestId('inline-description')).toBeDefined()

  rerender(<Description text={text} />)
  expect(getByTestId('description')).toBeDefined()
})

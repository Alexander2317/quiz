import React from 'react'
import { render } from '@testing-library/react'

import Title from '../title'

const text = 'test'

test('<Title /> check render text', () => {
  const { getByText } = render(<Title text={text} />)
  expect(getByText(text)).toBeDefined()
})

import React from 'react'
import { render } from '@testing-library/react'

import Footer from '../footer'

test('<Footer /> check render text', () => {
  const { getByText } = render(<Footer />)

  expect(getByText('Quiz by Alex')).toBeDefined()
})

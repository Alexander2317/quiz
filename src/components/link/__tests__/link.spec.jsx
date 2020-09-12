import React from 'react'

import { testUtils } from '../../../utils'

import Link from '../link'

const { render } = testUtils

test('<Link /> check render text', () => {
  const href = '/test'
  const text = 'test link'
  const { getByText } = render(<Link href={href}>{text}</Link>)

  expect(getByText(text)).toBeDefined()
})

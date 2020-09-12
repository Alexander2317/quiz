import React from 'react'
import { render } from '@testing-library/react'

import Button from '../button'

const text = 'test'

test('<Button /> check render text', () => {
  const { getByText } = render(<Button text={text} />)
  expect(getByText(text)).toBeDefined()
})

test('<Button /> check render children', () => {
  const Child = () => <div>123</div>
  const { getByText } = render(
    <Button mode="disable">
      <Child />
    </Button>,
  )
  expect(getByText('123')).toBeDefined()
})

test('<Button /> check render props', () => {
  const { getByTestId } = render(<Button text={text} disabled />)
  expect(getByTestId('button')).toHaveAttribute('disabled')
})

import React from 'react'
import { render } from '@testing-library/react'

import Layout from '../layout'

test('<Layout /> check render child', () => {
  const SomeComponent = () => <div>123</div>
  const { getByText } = render(
    <Layout>
      <SomeComponent />
    </Layout>,
  )

  expect(getByText('123')).toBeDefined()
})

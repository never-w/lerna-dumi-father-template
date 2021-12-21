import React, { useState } from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import useDocumentEvent from '../'

const Foo: React.FC<{
  onClick?: any
  onAnotherClick?: any
  capture?: boolean
}> = ({ onClick, onAnotherClick, capture }) => {
  const [useAnother, setUseAnother] = useState(false)

  useDocumentEvent('click', useAnother ? onAnotherClick : onClick, capture)

  return <span role="switch" onClick={() => setUseAnother(v => !v)} />
}

describe('useDocumentEvent', () => {
  test('trigger single event', () => {
    const counter = { value: 1 }

    const { baseElement } = render(<Foo onClick={() => counter.value++} />)

    fireEvent.click(baseElement)

    expect(counter.value).toBe(2)
  })

  test('change handler', () => {
    const counter = { value: 1 }
    const { baseElement, container } = render(
      <Foo onClick={() => {}} onAnotherClick={() => counter.value++} />,
    )
    fireEvent.click(screen.getByRole('switch'))
    fireEvent.click(baseElement)

    expect(counter.value).toBe(2)
  })

  test('remove on unmount', () => {
    const counter = { value: 1 }
    const { baseElement, unmount } = render(
      <Foo onClick={() => counter.value++} />,
    )

    unmount()

    fireEvent.click(baseElement)

    expect(counter.value).toBe(1)
  })

  test('with options', () => {
    const counter = { value: 1 }
    const { baseElement, unmount } = render(
      <Foo capture onClick={() => counter.value++} />,
    )

    unmount()

    fireEvent.click(baseElement)

    expect(counter.value).toBe(1)
  })
})

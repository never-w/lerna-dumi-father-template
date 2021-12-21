import React from 'react'
import { useState } from '@fruits-chain/hooks'

const Demo: React.FC = () => {
  const [state, setState] = useState({
    a: 0,
    b: 0,
  })

  return (
    <>
      <p>
        <span
          onClick={() => {
            setState(s => ({
              a: s.a + 1,
            }))
          }}>
          点击 a + 1
        </span>
      </p>

      <p>
        <span
          onClick={() => {
            setState(s => ({
              b: s.b + 1,
            }))
          }}>
          点击 b + 1
        </span>
      </p>

      <p>
        <span
          onClick={() => {
            setState({ a: 0 })
          }}>
          reset a -&gt; 0
        </span>
      </p>

      <p>
        <span
          onClick={() => {
            setState({ b: 0 })
          }}>
          reset b -&gt; 0
        </span>
      </p>

      <p>a -&gt; {state.a}</p>

      <p>b -&gt; {state.b}</p>
    </>
  )
}

export default Demo

import React from 'react'
import { usePersistFn } from '@fruits-chain/hooks'

const Demo: React.FC = () => {
  const onClick = usePersistFn((e: React.MouseEvent<HTMLParagraphElement>) => {
    console.log('TODO')
    console.log(e.nativeEvent.target)
  })

  return <p onClick={onClick}>TODO</p>
}

export default Demo

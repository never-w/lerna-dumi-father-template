---
title: useDocumentEvent
nav:
  title: WebHooks
  path: /web-hooks
group:
  title: Hooks
  path: /
---

# useDocumentEvent

绑定 DOM 事件

## 使用说明

```tsx | pure
import React from 'react'
import { useDocumentEvent } from '@fruits-chain/hooks-web'

const Demo: React.FC = () => {
  useDocumentEvent('click', event => {
    if (event.target.id === 'ddd') {
      alert('111')
    }
  })

  return <div id="ddd">Demo</div>
}
```

## DEMO

```tsx
import React from 'react'
import { useDocumentEvent } from '@fruits-chain/hooks-web'

const Demo: React.FC = () => {
  useDocumentEvent('click', event => {
    if (event.target.id === 'ddd') {
      alert('111')
    }
  })

  return (
    <div id="ddd" style={{ backgroundColor: '#f8f8f8' }}>
      点出现一个 alert
    </div>
  )
}

export default Demo
```

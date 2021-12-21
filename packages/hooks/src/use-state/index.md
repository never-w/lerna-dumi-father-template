---
title: useState
nav:
  title: Hooks
  path: /hooks
group:
  title: Hooks
  path: /
---

# useState

- `useState` 原版：React 自带的 `useState`
- `useState` 当前自定义的 hooks

React 自带的 `useState` 优化版本，`useState` 原本每次都要给一个完整 state，有时候我们只想改变其中一个字段的值，可能需要 `setState((s) => ({...s,a: newVar}))` 这样的函数方式，如果只是一个地方还能理解，多个地方就太难受了。

目前 `useState` 已经实现类似 `class` 组件的 `this.setState` 的使用方式，每次可以只填写部分字段更新，同时有代码提示。

`useState` 内部已经使用 `useCallback` 常量化，并且函数的依赖都是引用类型的，返回的函数可以视作常量，但是 `eslint` 的 `react-hooks/exhaustive-deps` 规则的问题，我们需要引入的自定义的 `useState` 名称就是 `useState`，可以避免依赖警告。

> 详情：[eslint-plugin-react-hooks](https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js#L150)

## 使用说明

```tsx | pure
import React, { useEffect } from 'react'
import { useState } from '@fruits-chain/hooks'

interface LocalState {
  a: number
  b: number
}

const Demo: React.FC = () => {
  const [state, setState] = useState<LocalState>({ a: 0, b: 0 })

  const onClickATo2 = () => {
    setState({
      a: 2,
    })
  }

  const onClickAAcc = () => {
    setState(s => ({
      a: s.a + 1,
    }))
  }

  useEffect(() => {
    setState({
      a: 100,
    })
  }, [])

  return <div>Demo -&gt; {state.a}</div>
}
```

## DEMO

<code src="./demo.tsx"></code>

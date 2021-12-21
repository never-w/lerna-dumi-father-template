import { useCallback, useEffect, useRef } from 'react'

import useOriginalDeepCopy from '../useOriginalDeepCopy'
import useState from '../useState'
import usePersistFn from '../usePersistFn'
import * as helper from '../helpers'

/**
 * 接口约定的基本参数
 */
export interface BaseResponse<T> {
  code: number
  msg?: string
  data: T
}

export interface UseAPIOption<PT> {
  manual?: boolean
  defaultParams?: PT
  loading?: boolean
}

interface LocalState<T> {
  loading: boolean
  fail: boolean
  data: T
}

const DEFAULT_PARAMS = {}

const defaultOption = {
  manual: false,
  defaultParams: DEFAULT_PARAMS,
}

/**
 * 单个请求
 */
const useAPI = <T, PT = Record<string, any>>(
  initValue: T,
  request: (p?: any) => Promise<BaseResponse<T>>,
  option: UseAPIOption<PT> = defaultOption as UseAPIOption<PT>,
) => {
  /** 是否手动执行 */
  const { manual } = option

  /** 自动执行的可变参数 */
  const defaultParams = useOriginalDeepCopy(option.defaultParams)
  const requestPersistFn = usePersistFn(request)
  const fetchTime = useRef(0)

  const [localState, setLocalState] = useState<LocalState<T>>({
    loading: option.loading || !option.manual,
    fail: false,
    data: initValue,
  })

  const run = useCallback(
    (p?): Promise<void> => {
      setLocalState({
        loading: true,
        fail: false,
      })

      const time = new Date().getTime()
      fetchTime.current = time

      return new Promise((resolve, reject) => {
        requestPersistFn(p)
          .then(({ data }) => {
            if (fetchTime.current === time) {
              setLocalState({
                loading: false,
                fail: false,
                data,
              })
            }

            resolve()
          })
          .catch(() => {
            if (fetchTime.current === time) {
              setLocalState({
                loading: false,
                fail: true,
              })
            }
            // eslint-disable-next-line prefer-promise-reject-errors
            reject()
          })
      })
    },
    [requestPersistFn],
  )

  useEffect(() => {
    if (!manual) {
      run(defaultParams).catch(helper.noop)
    }
  }, [manual, run, defaultParams])

  return {
    ...localState,
    run,
    setState: setLocalState,
  }
}

export default useAPI

import { useRef, useLayoutEffect } from 'react';

type EventNames = keyof DocumentEventMap;

type DocumentEventHandler<T extends EventNames> = (e: DocumentEventMap[T]) => any;

/**
 * 绑定事件
 */
const useDocumentEvent = <T extends EventNames>(eventName: T, fn: DocumentEventHandler<T>, options?: boolean | AddEventListenerOptions) => {
  const handler = useRef(fn);

  useLayoutEffect(() => {
    handler.current = fn;
  }, [fn]);

  useLayoutEffect(() => {
    const trigger: DocumentEventHandler<T> = (e) => handler.current(e);

    document.addEventListener(eventName, trigger, options);

    return () => document.removeEventListener(eventName, trigger, options);
  }, [eventName, options]);
};

export default useDocumentEvent;

import { renderHook } from '@testing-library/react-hooks';

import useOriginalCopy from '../';

describe('useOriginalCopy', () => {
  test('test number', () => {
    const { result } = renderHook(() => useOriginalCopy(1));

    expect(result.current).toBe(1);
  });

  test('test object shallowequal', () => {
    let data = { a: 1 };
    const data2 = data;
    const { result, rerender } = renderHook(() => useOriginalCopy(data));

    data = { a: 1 };
    rerender();

    expect(result.current).toBe(data2);
  });

  test('test object update', () => {
    let data = { a: 1 };
    const data2 = data;
    const { result, rerender } = renderHook(() => useOriginalCopy(data));

    data = { a: 2 };
    rerender();

    expect(result.current).not.toBe(data2);
  });

  test('test object shallowequal2', () => {
    let data = { a: { a: 1 } };
    const data2 = data;
    const { result, rerender } = renderHook(() => useOriginalCopy(data));

    data = { a: { a: 1 } };
    rerender();

    expect(result.current).not.toBe(data2);
  });
});

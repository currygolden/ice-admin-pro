import { useEffect, useRef } from 'react';
// 自定义hooks
export function useInterval(callback: () => void, delay: number) {
  // 可以利用 useRef 返回的 ref 对象来保存状态，只要当前组件不被销毁，那么状态就会一直存在
  const savedCallback = useRef(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  // 定义定时器，取消定时器
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      const id = setInterval(tick, delay || 0);
      return () => clearInterval(id);
    }
  }, [delay]);
}

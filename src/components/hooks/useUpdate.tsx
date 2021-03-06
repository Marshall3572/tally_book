import {useEffect, useRef} from 'react';

export const useUpdate = (fn: () => void, dependency: any[]) => {
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });
  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
  }, [fn, dependency]); // 不可变数据，需要改变地址，若仅修改值是无法检测到的
};
import {useState} from 'react';
import {createId} from './lib/createId';

// use开头的就是自定义的hooks，这个操作是封装一个自定义的Hook
const useTags = () => {
    const [tags, setTags] = useState<{ id: number, name: string }[]>([
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'},
      ])
    ;
    return {tags, setTags};
  }
;

export {useTags};

// 改tag
// 1:衣 => 1:衣服
// tag: string => tag: {id: number, name: string}
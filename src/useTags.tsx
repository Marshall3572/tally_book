import {useState} from 'react';

// use开头的就是自定义的hooks，这个操作是封装一个自定义的Hook
const useTags = () => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  return {tags, setTags};
};

export {useTags};



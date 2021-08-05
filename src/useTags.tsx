import {useState} from 'react';

// use开头的就是自定义的hooks
const useTags = () => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  return {tags, setTags};
};

export {useTags};



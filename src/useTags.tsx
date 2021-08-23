import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
];

// use开头的就是自定义的hooks，这个操作是封装一个自定义的Hook
const useTags = () => {
    const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags);
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
    const findTagIndex = (id: number) => {
      let res = -1;
      for (let i = 0; i < tags.length; i++) {
        if (tags[i].id === id) {
          res = i;
          break;
        }
      }
      return res;
    };
    const updateTag = (id: number, obj: { name: string }) => {
      const index = findTagIndex(id);
      // 深拷贝tags
      const tagsClone = JSON.parse(JSON.stringify(tags));
      // splice在原数组上修改，返回被删掉的值
      tagsClone.splice(index, 1, {id: id, name: obj.name});
      setTags(tagsClone);
    };
    return {tags, setTags, findTag, updateTag, findTagIndex};
  }
;

export {useTags};

// 改tag
// 1:衣 => 1:衣服
// tag: string => tag: {id: number, name: string}
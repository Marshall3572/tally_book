import {useEffect, useRef, useState} from 'react';
import {createId} from '../../lib/createId';
import {useUpdate} from './useUpdate';

// use开头的就是自定义的hooks，这个操作是封装一个自定义的Hook
const useTags = () => {
    const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
    useEffect(() => {
      let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
      if(localTags.length === 0){
        localTags = [
          {id: createId(), name: '衣'},
          {id: createId(), name: '食'},
          {id: createId(), name: '住'},
          {id: createId(), name: '行'},
        ]
      }
      setTags(localTags)
    }, []);
    useUpdate(() => {
      window.localStorage.setItem('tags', JSON.stringify(tags));
    }, [tags]);
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
    const updateTag = (id: number, {name}: { name: string }) => {
      setTags(tags.map(tag => tag.id === id ? {id, name: name} : tag));
    };
    const deleteTag = (id: number) => {
      setTags(tags.filter(tag => tag.id !== id));
    };
    const addTag = () => {
      const tagName = window.prompt('请输入新标签名称');
      if (tagName) {
        // 这里可做一个数组去重，但要提示重复标签
        setTags([...tags, {id: createId(), name: tagName}]);
      }
    };
    return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag, addTag};
  }
;

export {useTags};

// 改tag
// 1:衣 => 1:衣服
// tag: string => tag: {id: number, name: string}
import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../useTags';
import {createId} from '../../lib/createId';

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;

      &.selected {
        background: red;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

type Props = {
  value: number[],
  onChange: (value: number[]) => void
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selectedTagIds = props.value;
  //因为React不允许修改props，所以我们在这里不能引入外部的setSelected
  const onAddTag = () => {
    const tagName = window.prompt('请输入新标签名称');
    if (tagName) {
      // 这里可做一个数组去重，但要提示重复标签
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      // 如果tag已被选中，则复制其他被选中的tag，成为新的selectedTags，删除当前tag
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={
            // 这里箭头函数是因为要这个函数
            () => {onToggleTag(tag.id);}
            // 这里非箭头函数是因为要返回的东西
          } className={getClass(tag.id)}>{tag.name}</li>
        )}
      </ol>
      {/*如果不把onClick里的函数写成箭头函数，那么意思就是把这个函数执行完了返回的新函数传给onClick*/}
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

// TagsSection
export {TagsSection};
import styled from 'styled-components';
import React, {useState} from 'react';

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
      &.selected{
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

const TagsSection: React.FC = (props) => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const onAddTag = () => {
    const tagName = window.prompt('请输入新标签名称');
    if (tagName) {
      // 这里可做一个数组去重，但要提示重复标签
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag)
    if(index >= 0){
      // 如果tag已被选中，则复制其他被选中的tag，成为新的selectedTags，删除当前tag
      setSelectedTags(selectedTags.filter(t => t !== tag))
    }else{
      setSelectedTags([...selectedTags, tag])
    }
  };
  const x = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : ''
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag} onClick={
            // 这里箭头函数是因为要这个函数
            () => {onToggleTag(tag);}
            // 这里非箭头函数是因为要返回的东西
          } className={x(tag)}>{tag}</li>
        )}
      </ol>
      {/*如果不把onClick里的函数写成箭头函数，那么意思就是把这个函数执行完了返回的新函数传给onClick*/}
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

// TagsSection
export {TagsSection};
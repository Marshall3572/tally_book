import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';

type Params = {
  id: string
}

const Topbar = styled.header`
  display: flex;
  line-height: 20px;
  padding: 14px;
  justify-content: space-between;
  align-items: center;
  background: white;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;


const Tag: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <InputWrapper>
        <Input label="标签名" type="text" placeholder="标签名" value={tag.name} onChange={(e) => {
          updateTag(tag.id, {name: e.target.value});
        }}/>
      </InputWrapper>
      <Center>
        <Button onClick={() => {
          deleteTag(tag.id);
        }}>删除标签</Button>
      </Center>
    </div>
  );
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      {tag ? tagContent(tag) : <Center>tag 不存在</Center>}
    </Layout>
  );
};

export {Tag};
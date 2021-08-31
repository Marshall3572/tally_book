import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagSection';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useRecords} from '../components/hooks/useRecords';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const CategoryWrapper = styled.div`
  background: #c4c4c4;
`

export type Category = '-' | '+'
const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};
const Money = () => {
  const [selected, setSelected] = useState(defaultFormData);
  const {addRecord} = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功');
      setSelected(defaultFormData);
    }
  };
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds} onChange={tagIds => onChange({tagIds: tagIds})}/>
      <NoteSection value={selected.note} onChange={note => onChange({note: note})}/>
      <CategoryWrapper>
        <CategorySection value={selected.category} onChange={category => onChange({category: category})}/>
      </CategoryWrapper>
      <NumberPadSection value={selected.amount} onChange={amount => onChange({amount: amount})}
                        onOk={submit}
      />
    </MyLayout>
  );
};

export default Money;
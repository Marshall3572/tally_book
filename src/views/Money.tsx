import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagSection';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

export type Category = '-' | '+'

const Money = () => {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
  });
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  return (
    <MyLayout>
      {/*{selected.note}*/}
      <TagsSection value={selected.tagIds} onChange={tagIds => onChange({tagIds: tagIds})}/>
      <NoteSection value={selected.note} onChange={note => onChange({note: note})}/>
      <CategorySection value={selected.category} onChange={category => onChange({category: category})}/>
      <NumberPadSection value={selected.amount} onChange={amount => onChange({amount: amount})}
                        onOk={() => {}}
      />
    </MyLayout>
  );
};

export default Money;
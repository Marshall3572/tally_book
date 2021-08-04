import Layout from '../component/layout';
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
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0
  });
  return (
    <MyLayout>
      {selected.note}
      <TagsSection value={selected.tags} onChange={(tags: string[]) => {
        setSelected({
          ...selected,
          tags: tags
        });
      }}/>
      <NoteSection value={selected.note} onChange={(note: string) => {
        setSelected({
          ...selected,
          note: note
        });
      }
      }/>
      <CategorySection value={selected.category} onChange={(category: Category) => {
        setSelected({
          ...selected,
          category: category
        });
      }
      }/>
      <NumberPadSection value={selected.amount} onChange={(amount: number) => {
        setSelected({
          ...selected,
          amount: amount
        });
      }
      }
                        onOk={() => {}}
      />
    </MyLayout>
  );
};

export default Money;
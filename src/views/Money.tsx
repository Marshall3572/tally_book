import Layout from '../component/layout';
import React from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagSection';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const Money = () => {
  return (
    <MyLayout>
      <TagsSection></TagsSection>
      <NoteSection />
      <CategorySection />
      <NumberPadSection />
    </MyLayout>
  );
};

export default Money;
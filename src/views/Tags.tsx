import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';

const Tags = () => {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <ol>
        {tags.map(tag => <li key={tag}>{tag}</li>)}
      </ol>
    </Layout>
  );
};

export default Tags;
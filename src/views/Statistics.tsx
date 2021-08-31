import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../components/hooks/useRecords';
import {useTags} from '../components/hooks/useTags';
// 时间格式转换库
import dayjs from 'dayjs';

const CategoryWrapper = styled.div`
  background: white;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

const Statistics = () => {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} onChange={value => setCategory(value)}/>
      </CategoryWrapper>
      <div>
        {records.map(record => {
          return <Item>
            <div className="tags">
              {record.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
            </div>

            {record.note && <div className="note">
              {record.note}
            </div>}

            <div className="amount">
              ¥{record.amount}
            </div>

            {/*{dayjs(record.createdAt).format('YYYY年MM月DD日')}*/}
          </Item>;
        })}
      </div>
    </Layout>
  );
};

export default Statistics;
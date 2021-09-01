import Layout from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../components/hooks/useRecords';
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

  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

const Statistics = () => {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: { [K: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(record => record.category === category);

  selectedRecords.map(record => {
    const key = dayjs(record.createdAt).format('YYYY年MM月DD日');
    const value = record;
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(value);
  });
  // 将hash变为数组
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} onChange={value => setCategory(value)}/>
      </CategoryWrapper>

      {array.map(([date, records]) => <div>
        <Header>{date}</Header>
        <div>
            {records.map(record => {
              return <Item key={record.createdAt}>
                <div className="tags oneLine">
                  {record.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                    .reduce((preRes, curSpan, index, array) => preRes.concat(index < array.length-1 ? [curSpan, '，'] : [curSpan]),[] as ReactNode[])}
                </div>

                {record.note && <div className="note">
                  {record.note}
                </div>}

                <div className="amount">
                  ¥{record.amount}
                </div>
              </Item>;
            })}
          </div>
      </div>)}
    </Layout>
  );
};

export default Statistics;
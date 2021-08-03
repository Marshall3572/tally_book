import styled from 'styled-components';
import React, {FC, useRef, useState} from 'react';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

const NoteSection: FC = () => {
  const [note, setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current) {
      setNote(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        {/*受控模式*/}
        {/*<input type="text" placeholder="在这里添加备注" value={note} onChange={e => {setNote(e.target.value);}}/>*/}
        {/*为了巩固新学的知识，加入非受控模式，鼠标移出输入框触发*/}
        <input type="text" placeholder="在这里添加备注" defaultValue={note} ref={refInput} onBlur={onBlur}/>
      </label>
    </Wrapper>
  );

};
export {NoteSection};
import styled from 'styled-components';
import React, {ChangeEventHandler, FC, useRef} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`;
type Props = {
  value: string,
  onChange: (value: string) => void
}

const NoteSection: FC<Props> = (props) => {
  const note = props.value
  const refInput = useRef<HTMLInputElement>(null);
  const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
      props.onChange(e.target.value);
  };



  return (
    <Wrapper>
      <Input label='备注' type="text" value={note} onChange={onChange}></Input>
        {/*<span>备注</span>复活*/}
        {/*受控模式*/}
        {/*<input type="text" placeholder="在这里添加备注" value={note} onChange={e => {setNote(e.target.value);}}/>*/}
        {/*为了巩固新学的知识，加入非受控模式，鼠标移出输入框触发*/}
        {/*<input type="text" placeholder="在这里添加备注" defaultValue={note} ref={refInput} onBlur={onBlur}/>复活*/}
        {/*这里补充一点，React中的onChange和html中的onchange(比如addEventListener)是不一样的*/}
        {/*React的onChange在你每输入一个字触发一次。而html的onChange在鼠标移出时触发(早于onBlur)*/}
    </Wrapper>
  );

};
export {NoteSection};
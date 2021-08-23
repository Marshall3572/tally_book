import React, {FC} from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;

  > span {
    margin-right: 16px;
    white-space: nowrap;
  }

  > input {
    display: block;
    width: 100%;
    height: 44px;
    background: none;
    border: none;
  }
`;

type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: FC<Props> = (props) => {
  const {label, children, ...rest} = props;
  return (
    <Label>
      <span>{props.label}</span>
      {/*受控模式*/}
      {/*<input type="text" placeholder="在这里添加备注" value={note} onChange={e => {setNote(e.target.value);}}/>*/}
      {/*为了巩固新学的知识，加入非受控模式，鼠标移出输入框触发*/}
      <input {...rest}/>
      {/*这里补充一点，React中的onChange和html中的onchange(比如addEventListener)是不一样的*/}
      {/*React的onChange在你每输入一个字触发一次。而html的onChange在鼠标移出时触发(早于onBlur)*/}
    </Label>
  );
};

export {Input};
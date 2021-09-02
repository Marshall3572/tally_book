import Nav from './Nav';
import React, {FC, useEffect, useRef} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  //border: 1px solid red;
  //height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  //border: 1px solid green;
  //这样就可以把导航栏压到屏幕底部
  flex-grow: 1;
  // 如果Main中的内容超了，那么滚动条只显示在Main，不影响底部导航。或者不要这句，直接把Wrapper的
  overflow: auto;
`;
type Props = {
  className?: string;
  scrollTop?: number;
}
const Layout: FC<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) {return;}
      mainRef.current.scrollTop = props.scrollTop!;
    }, 0);
  }, [props.scrollTop]);
  return (
    <Wrapper>
      <Main ref={mainRef} className={props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};

Layout.defaultProps = {
  scrollTop: 0
};

export default Layout;
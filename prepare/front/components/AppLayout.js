import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
import UserProfile from '../components/UserProfile'
import LoginForm from '../components/LoginForm'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`           /* antd 컴포도 styled로 커스터마이징 가능 */

const AppLayout = ({children}) => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn); //이게 바뀌면 알아서  page가 rerendering됨.
    // 구조 분해 할당으로 아래와 같이 쓸 수도 있음. 성능 차 있긴 하지만 미미함.
  //const { isLoggedIn } = useSelector((state) => state.user);

const Global = createGlobalStyle` /* gutter 문제 해결 */
    .ant-row {
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .ant-col:first-child {
        margin-left: 0 !important;
    }

    .ant-col:last-child {
        margin-right: 0 !important;
    }
`;

    return (
     <div>
        <Global />
        <Menu mode='horizontal'>
            <Menu.Item>
                <Link href="/"><a>노드버드</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/profile"><a>프로필</a></Link> 
            </Menu.Item>
            <Menu.Item>
                <SearchInput enterButton/> 
            </Menu.Item>
            <Menu.Item>
                <Link href="/signup"><a>회원가입</a></Link>
            </Menu.Item>           
        </Menu>
        <Row gutter={8}> {/* gutter는 간격 */}
            <Col xs = {24} md={6}>     {/*xs:모바일 sm:태블릿 md:작은 데스크탑 || 24가 가로 full 수치*/}
                {isLoggedIn ? <UserProfile /> : <LoginForm />} {/* 로그인 돼있으면 up보여주고, 안되있으면 로긴폼 보여주기 react의 조건문인듯? */}
            </Col>  
            <Col xs = {24} md={12}>    {/* xs 일때는 한 col이 가로를 full로 차지해서 세로로 쌓임 || md가 되면 .25.5 .25로 col 3개 들어감*/}
                {children}
            </Col>
            <Col xs = {24} md={6}>
                <a href="https://www.notion.so/Beomso0-s-Portfolio-d20545a38d3f499b9e80f2ed4f8531d4" target="_blank" rel="noreferrer noopener">Made by beomso0</a>
            </Col>
        </Row>
     </div>   
    );
};

AppLayout.propTypes = {
    childern: PropTypes.node.isRequired,
};

export default AppLayout;
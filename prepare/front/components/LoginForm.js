import React, { useState, useCallback, useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    margin-top: 10px; 
`;

const FormWrapper = styled(Form)`
    padding: '10px';
`;

const LoginForm = ({setIsLoggedIn}) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChaneId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChanePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmitForm = useCallback(() => {
        // onFinish에는 e.preventDefault가 이미 적용돼있음 --> 중복 x
        console.log(id, password);
        setIsLoggedIn(true); // setIsLoggedIn은 appLayOut의 dummy데이터에서 옴.
    }, [id, password]); // [] 안이 callBack의 dependency였음!!!

    //const style = useMemo(() => ({ marginTop: 10}), []);  --> styled 사용안하고 usememo로 객체 캐싱해서도 할 수 있음 !

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor='user-id'>아이디</label>
                <br />
                <Input name='user-id' value={id} onChange={onChaneId} required/>
            </div>
            <div>
                <label htmlFor='user-password'>비밀번호</label>
                <br />
                <Input 
                    name='user-password' 
                    value={password} 
                    onChange={onChanePassword} 
                    required
                /> {/* 나중엔 react form 등의 라이브러리 쓰면 좋음 */}
            </div>
            <ButtonWrapper>
                <Button type='primary' htmlType='submit' loading={false}>로그인</Button>
                <Link href='/signup'><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
            <div>
                
            </div>
        </FormWrapper>
    );
}

export default LoginForm;
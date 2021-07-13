import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
// import Proptypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { loginRequestAction } from '../reducers/user';

const ButtonWrapper = styled.div`
    margin-top: 10px; 
`;

const FormWrapper = styled(Form)`
    padding: '10px';
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput(''); // --> custom hooks로 중복 제거

  const onSubmitForm = useCallback(() => {
    // onFinish에는 e.preventDefault가 이미 적용돼있음 --> 중복 x
    console.log(email, password);
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]); // [] 안이 callBack의 dependency였음!!!

  // const style = useMemo(() => ({ marginTop: 10}), []);
  // --> styled 사용안하고 usememo로 객체 캐싱해서도 할 수 있음 !

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-email">이메일</label>
        <br />
        <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          value={password}
          onChange={onChangePassword}
          required
        /> {/* 나중엔 react form 등의 라이브러리 쓰면 좋음 */}
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
      <div />
    </FormWrapper>
  );
};

export default LoginForm;

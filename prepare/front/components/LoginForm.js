import React, { useCallback, useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';

import useInput from '../hooks/useInput';
import { loginAction } from '../reducers/user';


const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  const style = useMemo(() => ({ marginTop: 10 }), []);// 이런식으로 useMemo를 해주어야 리렌더링 최적화가 된다.

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <lebel htmlFor="user-id">아이디</lebel>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <lebel htmlFor="user-id">비밀번호</lebel>
        <br />
        <Input
          name="user-id"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper style={style}>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </FormWrapper>
  );
}



export default LoginForm;
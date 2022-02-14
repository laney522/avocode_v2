import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Signup = () => {
  return (
    <>
      <Head>
        <title>회원가입 | Avocode</title>
      </Head>
      <AppLayout>회원가입 페이지</AppLayout>
    </>
  );
}

export default Signup;
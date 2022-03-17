import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { END } from 'redux-saga';
import axios from 'axios';

import { Avatar, Card } from 'antd';
import AppLayout from '../components/AppLayout';
import wrapper from '../store/configureStore';
import { LOAD_USER_REQUEST } from '../reducers/user';

const About = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <AppLayout>
      <Head>
        <title>Laney | AvoCode</title>
      </Head>
      {userInfo
        ? (
          <Card
            actions={[
              <div key="twit">
                트윗
                <br />
                {userInfo.Posts}
              </div>,
              <div key="following">
                팔로잉
                <br />
                {userInfo.Followings}
              </div>,
              <div key="follower">
                팔로워
                <br />
                {userInfo.Followers}
              </div>,
            ]}
            >
              <Card.Meta
                avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
                title={userInfo.nickname}
                description="아보카도 매니아"
              />
            </Card>
          )
          : null}
    </AppLayout>
  );
};


export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ req }) => {
    const cookie = req ? req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    store.dispatch({
      type: LOAD_USER_REQUEST,
      data: 1,
    });
    store.dispatch(END);
    await store.sagaTask.toPromise();
});

export default About;


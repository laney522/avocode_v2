import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followerList = [{ nickname: '레니' }, { nickname: '콜리' }, { nickname: '하품' }];
  const followingList = [{ nickname: '레니' }, { nickname: '콜리' }, { nickname: '하품' }];

  return (
    <>
      <Head>
        <title>내 프로필 | Avocode</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
}

export default Profile;
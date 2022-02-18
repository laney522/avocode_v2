import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch } from 'react-redux';

import { logoutAction } from '../reducers/user';  // 쪼갤 때는 항상 경로를 신경을써준다.

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">짹짹<br />0</div>, // React에서 배열로 JSX써줄때는 Key 프로퍼티를 작성해야 한다.
        <div key="followings">팔로잉<br />0</div>,
        <div key="follower">팔로워<br />0</div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>LN</Avatar>}
        title="Laney"
      />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
}

export default UserProfile;
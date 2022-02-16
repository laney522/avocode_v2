import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
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
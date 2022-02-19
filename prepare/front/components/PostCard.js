import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Popover, Avatar, List, Comment } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import PostImages from './PostImages';


const PostCard = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  return (
    <div style={{ marginButtom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[                                // 배열안에 JSX를 넣어줄때는 항상 key를 넣어준다.
          <RetweetOutlined key="retweet" />,
          <HeartOutlined key="heart" />,
          <MessageOutlined key="message" />,
          <Popover key="more" content={(
            <Button.Group>
              {id && post.User.id === id
                ? (
                  <>
                    <Button>수정</Button>
                    <Button type='danger'>삭제</Button>
                  </>
                ) : <Button>신고</Button>}
            </Button.Group>
          )}>
            <EllipsisOutlined />
          </Popover>
        ]}
      >
        <Card.Meta
          title={post.User.nickname}
          description={post.content}
        />
      </Card>

    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;
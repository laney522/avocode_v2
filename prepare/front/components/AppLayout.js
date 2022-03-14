import React, { useState, useCallback, userMemo } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Input, Menu, Row, Col } from 'antd';
import { useSelector } from 'react-redux';

import LoginForm from './LoginForm';
import UserProfile from '../components/UserProfile';
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/"><a>avocode</a></Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile"><a>profile</a></Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <SearchInput enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>signup</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6} >
          {me 
            ? <UserProfile /> 
            : <LoginForm />}
        </Col>
        <Col xs={24} md={12} >
          {children}
        </Col>
        <Col xs={24} md={6} >
          <a href="https://pm522.tistory.com" target="_blank" rel='noreferrer noopener'>Made by Laney</a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
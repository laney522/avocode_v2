import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>avocode</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>profile</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>signup</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6} >
          왼쪽 메뉴
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

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
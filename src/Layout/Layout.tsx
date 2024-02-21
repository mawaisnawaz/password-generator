'use client';

import React from 'react';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: '1',
    label: 'Password Generator',
  },
  {
    key: '2',
    label: 'Pin Generator',
  },
  {
    key: '3',
    label: 'Hex to RGB',
  },
  {
    key: '4',
    label: 'RGB to Hex',
  },
];

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Web Tools ©{new Date().getFullYear()}</Footer>
    </Layout>
  );
};

export default PageLayout;

import React, { memo, useState } from 'react'
import { Layout, Breadcrumb } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { XZhomeWrapper } from './style';
import { Outlet } from 'react-router-dom';
import LeftBar from '../../components/leftBar';

const { Header, Content } = Layout;

const Home = memo(() => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <XZhomeWrapper>
      <Layout className="container">
        <LeftBar collapsed={collapsed} />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className='toggleIcon' onClick={ toggle }>
              {
                collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>
              }
            </div>
            <div className='breadBox'>
              <Breadcrumb>
                <Breadcrumb.Item>系统总览</Breadcrumb.Item>
                <Breadcrumb.Item>核心技术</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </XZhomeWrapper>
  )
})

export default Home

import React, { memo, useEffect, useState } from 'react'
import { Layout, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { XZhomeWrapper } from './style';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import LeftBar from '../../components/leftBar';
import SubTitle from '../../components/subTitle';
import { rm } from '../../network/request/storage';

const { Header, Content } = Layout;

const Home = memo(() => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  const navigate = useNavigate()
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/home') {
      navigate("/home/analysis/overview")
    }
  })

  const loginOut = () => {
    rm('token')
    navigate("/login");
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
              <SubTitle />
            </div>
            <div className='loginOut'>
              <Button
                type="primary"
                onClick={ e => loginOut() }
              >
                退出登录
              </Button>
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

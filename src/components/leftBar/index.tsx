import React, { memo } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { leftRouter, IRouter } from '../../router'

const { Sider } = Layout;
const { SubMenu } = Menu;

interface LeftProps {
  collapsed: boolean
}

const LeftBar:React.FC<LeftProps> = memo((props) => {
  const getMenu = (rouerList: IRouter[]) => {
    return (
      <>
        {
          rouerList?.map(item => {
            if(item.children) {
              return (
                <SubMenu key={ item.key } icon={ item.icon } title={ item.title }>
                  { getMenu(item.children) }
                </SubMenu>
              )
            }
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.path}>{item.title}</Link>
              </Menu.Item>
            )
          })
        }
      </>
    )
  }
  return (
    <>
      <Sider trigger={null} collapsible collapsed={props.collapsed}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            { getMenu(leftRouter[0].children) }
          </Menu>
      </Sider>
    </>
  )
})

export default LeftBar

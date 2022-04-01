// 左侧菜单栏
import React, { memo, useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { leftRouter, IRouter } from '../../router'

const { Sider } = Layout;
const { SubMenu } = Menu;

interface LeftProps {
  collapsed: boolean
}

const LeftBar:React.FC<LeftProps> = memo((props) => {
  // state hooks
  const [defaultSelectedKey, setDefaultSelectedKey] = useState<string[]>()

  // other hooks
  const location =  useLocation();
  // bingding events
  useEffect(() => {
    const heightMenu = (leftRouters: IRouter[]) => {
      for(let r of leftRouters) {
        let match = matchPath(location.pathname, r.path);
        if(match) {
          let path = [r.key]
          setDefaultSelectedKey(path);
        }
        if(r.children) {
          heightMenu(r.children)
        }
      }
    }
    heightMenu(leftRouter[0].children)
  }, [location.pathname])

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
      <Sider
         trigger={null}
         collapsible
         collapsed={props.collapsed}
         style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
         >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={ ['/home/analysis/overview'] }
            selectedKeys={ defaultSelectedKey }
          >
            { getMenu(leftRouter[0].children) }
          </Menu>
      </Sider>
    </>
  )
})

export default LeftBar

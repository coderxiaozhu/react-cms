import React, { lazy, Suspense, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { get } from '../network/request/storage';
import {
  DesktopOutlined,
  SettingOutlined,
  ShoppingOutlined,
  MessageOutlined
} from '@ant-design/icons';

const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'))
const Overview = lazy(() => import("../pages/Analysis/overview"))
const Dahboard = lazy(() => import("../pages/Analysis/dashboard"))
const User = lazy(() => import("../pages/System/user"))
const Department = lazy(() => import("../pages/System/department"))
const Menu = lazy(() => import("../pages/System/menu"))
const Role = lazy(() => import("../pages/System/role"))
const Category = lazy(() => import("../pages/Product/category"))
const Goods = lazy(() => import("../pages/Product/goods"))
const Chat = lazy(() => import("../pages/Story/chat"))
const List = lazy(() => import("../pages/Story/list"))
const lazyLoad = (children: React.ReactNode) => {
  return <Suspense fallback={ <>loding....</> }>
    { children }
  </Suspense>
}

export interface IRouter {
  title?: string
  path: string
  key: string
  icon?: ReactNode
  element?: ReactNode
  children?: IRouter[]
}

const token = get('token');

const RootRouter = [
  {
    path: "/",
    element:  token ? <Navigate to="/home" /> : <Navigate to="/login" />,
  }
]

const leftRouter = [
  {
    path: "/home",
    key: "home",
    element: lazyLoad(<Home />),
    children: [
      {
        title: "系统总览",
        key: "/home/analysis",
        path: "/home/analysis",
        icon: <DesktopOutlined />,
        children: [
          {
            path: "/home/analysis/overview",
            key: "/home/analysis/overview",
            element: lazyLoad(<Overview />),
            title: "核心技术"
          },
          {
            path: "/home/analysis/dashboard",
            key: "/home/analysis/dashboard",
            element: lazyLoad(<Dahboard />),
            title: "商品统计"
          }
        ]
      },
      {
        title: "系统管理",
        key: "/home/system",
        path: "/home/system",
        icon: <SettingOutlined />,
        children: [
          {
            path: "/home/system/user",
            key: "/home/system/user",
            element: lazyLoad(<User />),
            title: "用户管理"
          },
          {
            path: "/home/system/department",
            key: "/home/system/department",
            element: lazyLoad(<Department />),
            title: "部门管理"
          },
          {
            path: "/home/system/menu",
            key: "/home/system/menu",
            element: lazyLoad(<Menu />),
            title: "菜单管理"
          },
          {
            path: "/home/system/role",
            key: "/home/system/role",
            element: lazyLoad(<Role />),
            title: "角色管理"
          }
        ]
      },
      {
        title: "商品中心",
        path: "/home/product",
        key: "/home/product",
        icon: <ShoppingOutlined />,
        children: [
          {
            path: "/home/product/category",
            key: "/home/product/category",
            title: "商品类别",
            element: lazyLoad(<Category />)
          },
          {
            path: "/home/product/goods",
            key: "/home/product/goods",
            title: "商品信息",
            element: lazyLoad(<Goods />)
          }
        ]
      },
      {
        title: "随便聊聊",
        path: "/home/story",
        key: "/home/story",
        icon: <MessageOutlined />,
        children: [
          {
            path: "/home/story/chat",
            key: "/home/story/chat",
            title: "你的故事",
            element: lazyLoad(<Chat />)
          },
          {
            path: "/home/story/list",
            key: "/home/story/list",
            title: "故事列表",
            element: lazyLoad(<List />)
          }
        ]
      }
    ]
  }
]

const loginRouter = [
  {
    path: "/login",
    noLogin: true,
    element:  lazyLoad(<Login />)
  }
]

const router = [
  ...RootRouter,
  ...leftRouter,
  ...loginRouter,
]

export {
  router,
  leftRouter,
}

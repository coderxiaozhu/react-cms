import React, { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { get } from '../network/request/storage';

const Login = lazy(() => import('../pages/Login/index'));
const Home = lazy(() => import('../pages/Home/index'))
// import Home from '../pages/Home/index';
// import Login from '../pages/Login/index'
const lazyLoad = (children: React.ReactNode) => {
  return <Suspense fallback={ <>loding....</> }>
    { children }
  </Suspense>
}

const token = get('token');

const router = [
  {
    path: "/",
    element:  token ? <Navigate to="/home" /> : <Navigate to="/login" />,
  },
  {
    path: "/home",
    element: lazyLoad(<Home />)
  },
  {
    path: "/login",
    noLogin: true,
    element:  lazyLoad(<Login />)
  }
]

export {
  router
}

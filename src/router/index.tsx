import React, { lazy, Suspense } from 'react';

const Login = lazy(() => import('../pages/Login/index'));
const lazyLoad = (children: React.ReactNode) => {
  return <Suspense fallback={ <>loding....</> }>
    { children }
  </Suspense>
}

const router = [
  {
    path: "/",
    element: lazyLoad(< Login />),
    children: [
      {
        index: true,
        path: "/login",
        element: lazyLoad(<Login />)
      }
    ]
  }
]

export default router

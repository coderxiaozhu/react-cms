// 面包屑导航
import React, { Fragment, memo } from 'react'
import { Breadcrumb } from 'antd'
import { IRouter, leftRouter } from '../../router'
import { matchPath, useLocation } from 'react-router-dom'

const SubTitle = memo(() => {
  const location = useLocation();
  let index = location.pathname.split('/').filter(i=>i)
  const getTitle = (routerList: IRouter[]) => {
    return (
      <>
        {
          routerList?.map((item) => {
            let newUrl = "/home/" + index[1];
            if(item.hasOwnProperty("element")) {
              // 判断是否内层children，如果是就把路径重换
              newUrl = "/home/" + index[1] +  "/" + index[2];
            }
            let match = matchPath(newUrl, item.path);
            if(match !== null) {
              return (
                <Fragment key={ item.key }>
                  <Breadcrumb.Item key={ item.key }>
                    { item.title }
                  </Breadcrumb.Item>
                  {
                    item.children ?
                    getTitle(item.children) : null
                  }
                </Fragment>
              )
            }
            return null;
          })
        }
      </>
    )
  }
  return (
    <div>
      <Breadcrumb>
        { getTitle(leftRouter[0].children) }
      </Breadcrumb>
    </div>
  )
})

export default SubTitle

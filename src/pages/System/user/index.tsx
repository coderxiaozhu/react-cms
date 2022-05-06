import React, { memo, useEffect } from 'react'
import { XZuserWapper } from './style'
import XZadvanceSearch from '../../../components/advanceSearch';
import XZuserList from '../../../components/userList';
import { getUserListAction } from './createActions';
import { useDispatch } from 'react-redux';

const User = memo(() => {
  // state hook

  // other hook
  const dispatch = useDispatch();
  useEffect(() => {
    // 获取用户列表
    dispatch(getUserListAction({
      offset: 0,
      size: 10
    }));
  }, [dispatch])

  // bind event
  return (
    <XZuserWapper>
      <XZadvanceSearch />
      <XZuserList />
    </XZuserWapper>
  )
})

export default User

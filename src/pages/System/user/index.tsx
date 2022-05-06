import React, { memo } from 'react'
import { XZuserWapper } from './style'
import XZadvanceSearch from '../../../components/advanceSearch'
import XZuserList from '../../../components/userList'

const User = memo(() => {
  return (
    <XZuserWapper>
      <XZadvanceSearch />
      <XZuserList />
    </XZuserWapper>
  )
})

export default User

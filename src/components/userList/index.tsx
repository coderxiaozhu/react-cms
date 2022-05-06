import React, { memo, useState } from 'react';
import {
  Button,
  Table
} from 'antd'
import { XZuserListWapper } from './style';
import { DataType } from './types';

const columns = [
  {
    title: '序号',
    dataIndex: 'key',
  },
  {
    title: '用户名',
    dataIndex: 'name',
  },
  {
    title: '真实姓名',
    dataIndex: 'realname',
  },
  {
    title: '手机号码',
    dataIndex: 'cellphone'
  },
  {
    title: '状态',
    dataIndex: 'enable'
  },
  {
    title: '创建时间',
    dataIndex: 'createAt'
  },
  {
    title: '更新时间',
    dataIndex: 'updateAt'
  },
  {
    title: '操作',
    dataIndex: 'operation'
  }
];


const data: DataType[] = [
  {
    key: 1,
    name: "coderwhy",
    realname: "coderwhy",
    cellphone: 18812345678,
    enable: 1,
    departmentId: 1,
    roleId: 1,
    createAt: "2021-01-02T10:20:26.000Z",
    updateAt: "2021-01-03T04:50:13.000Z"
  }
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    name: record.name,
  }),
};

const XZuserList = memo(() => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  return (
    <XZuserListWapper>
      <div className='header'>
        <div className='headerTitle'>
          <span>用户列表</span>
        </div>
        <Button
        type="primary"
        size="large"
        >新建用户</Button>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
      />
    </XZuserListWapper>
  )
})

export default XZuserList

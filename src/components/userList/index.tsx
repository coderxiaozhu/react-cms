import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Button,
  Table,
  Tag,
  Space
} from 'antd';
import {
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons'

import { XZuserListWapper } from './style';
import { DataType } from './types';
import { formatDate } from '../../utils/date-formate';
import { RootState } from '../../store';

// 表格列的数据
const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    render: (text:any, record:any, index:number)=> `${index + 1}`
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
    dataIndex: 'enable',
    render: (enable: Number) => {
      let color = enable === 1 ? "success" : "error";
      let text = enable === 1 ? "启用" : "禁用";
      return (
        <Tag color={color}>
          { text }
        </Tag>
      )
    }
  },
  {
    title: '创建时间',
    dataIndex: 'createAt',
    render: (createAt: string) => {
      return formatDate(createAt);
    }
  },
  {
    title: '更新时间',
    dataIndex: 'updateAt',
    render: (createAt: string) => {
      return formatDate(createAt);
    }
  },
  {
    title: '操作',
    dataIndex: 'operation',
    render: (operation: string) => {
      return (
        <Space
        style={{ display: 'flex', justifyContent: "space-around" }}
        >
          <Button type='primary'>
          <EditOutlined/>
          编辑
          </Button>
          <Button type='primary'>
          <DeleteOutlined />
          删除
          </Button>
        </Space>
      )
    }
  }
];

const XZuserList = memo(() => {
  // state hook
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

  // other hook
  const tableData = useSelector((state: RootState) => state.userReducer.userListData.data);
  console.log(tableData.list);

  // bind event
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      name: record.name,
    }),
  };
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
        dataSource={tableData.list}
        rowKey={record => record.id}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
      />
    </XZuserListWapper>
  )
})

export default XZuserList

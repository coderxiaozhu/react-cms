import React, { memo } from 'react'
import { XZpageSearchWrapper } from './style'
import { Form, Row, Col, Button, Select, Input, DatePicker } from 'antd';
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const { Option } = Select;
const { RangePicker } = DatePicker;

const XZadvanceSearch = memo(() => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const formItemLayout = {
    labelCol: { span: 6 }
  };
  return (
    <XZpageSearchWrapper>
      <div className='xz-form'>
          <div className='header'>
            <h1>高级检索</h1>
          </div>
          <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
          >
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item
                 label="id"
                 colon
                 className='contentFormInput'
                 {...formItemLayout}
                >
                  <Input placeholder='请输入id' size="large" style={{ width: 200 }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="用户名"
                  colon
                  className='contentFormInput'
                  {...formItemLayout}
                  >
                  <Input placeholder='请输入用户名' size="large" style={{ width: 200 }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="真实姓名"
                  colon
                  className='contentFormInput'
                  {...formItemLayout}
                  >
                  <Input placeholder='请输入真实姓名' size="large" style={{ width: 200 }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                label="电话号码"
                className='contentFormInput'
                colon
                {...formItemLayout}
                >
                  <Input placeholder='请输入电话号码' size="large" style={{ width: 200 }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                label="用户状态"
                className='contentFormInput'
                colon
                {...formItemLayout}
                >
                  <Select
                      placeholder="请选择用户状态"
                      style={{ width: 200 }}
                      size="large"
                      allowClear
                  >
                    <Option value="启动">启动</Option>
                    <Option value="禁用">禁用</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                label="创建时间"
                className='contentFormInput'
                colon
                {...formItemLayout}
                >
                  <RangePicker
                    size='large'
                    style={{ width: 200 }}
                    locale={ locale }
               />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col
              span={24}
              style={{
                textAlign: 'right',
                paddingRight: '96px',
                marginBottom: '20px'
              }}
              >
                <Button
                  style={{ margin: '0 8px' }}
                  onClick={() => {
                    form.resetFields();
                  }}
                  size="large"
                >
                  重置
                </Button>
                <Button
                   type="primary"
                   htmlType="submit"
                   size="large"
                   >
                  搜索
                </Button>
              </Col>
            </Row>
          </Form>
      </div>
    </XZpageSearchWrapper>
  )
})

export default XZadvanceSearch

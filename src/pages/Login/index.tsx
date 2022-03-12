import React, { memo, useCallback, useEffect, useState } from 'react'
import { Tabs, Form, Input, Button, Row, Col } from 'antd';
import { useDispatch } from 'react-redux'
import { XZloginWrapper } from './style'
import { changeLoginAction } from './store/actionCreators'

// antd tabPanel引入
const { TabPane } = Tabs

const XZlogin = memo(() => {
  // state hooks
  // 账号名和密码的输入框参数
  const [loginInfo, setLoginInfo] = useState();

  // redux hooks
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    let userInfo = {
      username: 'coderwhy',
      password: '123456'
    }
    dispatch(changeLoginAction(userInfo))
  }, [dispatch])

  const getLoginInfo = useCallback((changedValues) => {
    console.log(changedValues);
    setLoginInfo(changedValues);
  }, [])

  const loginEvent = () => {
    console.log(loginInfo);
  }

  return (
    <XZloginWrapper>
      <div className='loginPanel'>
        <h1>后台管理系统</h1>
        <div className='TabWrapper'>
          <Tabs
            type='card'
          >
            <TabPane tab="账号登录" key="1">
              <Form
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 15 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                onFinish={ getLoginInfo }
              >
                 <Form.Item
                    label="账号"
                    name="username"
                    rules={[{ required: true, message: '请输入您的用户名!' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入您的密码!' }]}
                  >
                    <Input.Password />
                  </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="手机登录" key="2">
            <Form
                name="basic"
                labelCol={{ span: 6 }}
                initialValues={{ remember: true }}
                autoComplete="off"
              >
                 <Form.Item
                    label="手机号"
                    name="username"
                    wrapperCol={{ span: 15 }}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="验证码"
                    name="password"
                    wrapperCol={{ span: 12 }}
                  >
                    <Row gutter={8}>
                      <Col span={14}>
                        <Form.Item
                          name="验证码"
                          noStyle
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Button type='primary'>
                          获取验证码
                        </Button>
                      </Col>
                    </Row>
                  </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
        </div>
        <div className='submit'>
          <Button
            type="primary"
            size={'large'}
            block
            onClick={ loginEvent }
          >
            立即登录
          </Button>
        </div>
      </div>
    </XZloginWrapper>
  )
})

export default XZlogin

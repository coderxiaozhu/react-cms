import React, { memo, createRef } from 'react'
import { Form, Input, Button, FormInstance, message } from 'antd';
import { getAccountLogin } from '../../network/Login'
import { XZloginWrapper } from './style'
import { add } from '../../network/request/storage';
import { useNavigate } from 'react-router-dom';


const XZlogin = memo(() => {
  // state hooks

  // redux hooks

  // other hooks
  const formRef = createRef<FormInstance>();
  const navigate = useNavigate()

  const GetAccountInfo = (form: any) => {
    // 账号密码调用接口
    getAccountLogin(form.username, form.password)
    .then(res =>{
      const { code } = res;
      const { token, name } = res.data;
      if(code === 0) {
        message.success("登陆成功");
        add('token', token);
        add('username', name);
        navigate('/home')
      }
    })
  }

  return (
    <XZloginWrapper>
      <div className='loginPanel'>
        <h1>后台管理系统</h1>
        <div className='TabWrapper'>
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 15 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={ GetAccountInfo }
            ref={ formRef }
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
                <Form.Item>
                  <div className='submit'>
                    <Button
                      type="primary"
                      size={'large'}
                      block
                      htmlType="submit"
                    >
                      立即登录
                    </Button>
                  </div>
                </Form.Item>
            </Form>
        </div>
      </div>
    </XZloginWrapper>
  )
})

export default XZlogin

import React from 'react'
import { Form, Button, Checkbox, DatePicker, Input, Select, Upload } from 'antd'
import { type } from '@testing-library/user-event/dist/type'

function Login() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'cadetblue',
      }}
    >
      <Form
        autoComplete='off'
        wrapperCol={{ span: 12 }}
        labelCol={{ span: 9 }}
        style={{
          borderStyle: 'solid',
          borderColor: '#F9E45B',
          padding: '10px',
          backgroundColor: 'white',
        }}
      >
        <h2>Admin Login</h2>

        <Form.Item
          name='userName'
          label='Username'
          rules={[
            { required: true, message: 'Require to fill-in this field' },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
          <Input placeholder='Username' />
        </Form.Item>

        <Form.Item
          name='password'
          type='password'
          label='Password'
          rules={[
            { required: true, message: 'Require to fill-in this field' },
            { whitespace: true },
            { min: 9 },
          ]}
          hasFeedback
        >
          <Input.Password placeholder='Password' />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
          <Button block type='primary' htmlType='submit'>
            login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login

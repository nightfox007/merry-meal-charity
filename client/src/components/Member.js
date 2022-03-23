import React, { Component } from 'react'
import { Form, Button, Checkbox, DatePicker, Input, Select, Upload } from 'antd'

class Member extends Component {
  render() {
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
          <h2>Member Registration</h2>

          <Form.Item
            name='firstName'
            label='First Name'
            rules={[
              { required: true, message: 'Require to fill-in this field' },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder='First name:' />
          </Form.Item>

          <Form.Item
            name='lastName'
            label='Last Name'
            rules={[
              { required: true, message: 'Require to fill-in this field' },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder='Last name:' />
          </Form.Item>

          <Form.Item
            name='email'
            type='email'
            label='Email'
            requiredMark='optional'
            rules={[
              {
                type: 'email',
                message: 'Please enter a valid Email',
              },
            ]}
            hasFeedback
          >
            <Input placeholder='Email:' />
          </Form.Item>

          <Form.Item
            name='contactNumber'
            label='Contact Number'
            rules={[
              { required: true, message: 'Please fil-in your contact number' },
              { min: 9, message: 'Please enter at least 9 numbers' },
            ]}
            hasFeedback
          >
            <Input placeholder='Contact Number:' />
          </Form.Item>

          <Form.Item
            name='gender'
            label='Gender'
            rules={[{ required: true, message: 'Please Select your gender' }]}
            hasFeedback
          >
            <Select placeholder='Select a Gender'>
              <Select.Option value='male'>Male</Select.Option>
              <Select.Option value='female'>Female</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name='dob'
            label='D.O.B'
            rules={[
              { required: true, message: 'Please Select your Date of Birth' },
            ]}
            hasFeedback
          >
            <DatePicker
              style={{ width: '100%' }}
              picker='date'
              placeholder='Choose Date of Birth:'
            />
          </Form.Item>

          <Form.Item
            name='diseaseType'
            label='Disease Type'
            requiredMark='optional'
          >
            <Select placeholder='Choose your Disease Type'>
              <Select.Option value='diabetes'>Diabetes</Select.Option>
              <Select.Option value='fattyLiver'>Fatty Liver</Select.Option>
              <Select.Option value='chronicKidney'>
                Chronic kidney
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name='disability'
            label='Disability'
            requiredMark='optional'
          >
            <Input placeholder='Describe your Disability' />
          </Form.Item>

          <Form.Item
            label='Identify Card'
            name='photos'
            rules={[
              {
                required: true,
                message: 'Please upload for verification purpose',
              },
            ]}
            hasFeedback
          >
            <Upload
              listType='picture'
              action={'http://localhost:3000/'}
              accept='.png,.jpeg,.jpg'
            >
              <Button>Click to Upload Picture</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name='location'
            label='Available Location'
            rules={[{ required: true, message: 'Please Select a location' }]}
            hasFeedback
          >
            <Select placeholder='Available Location within 10km radius'>
              <Select.Option value='pj'>Petaling Jaya</Select.Option>
              <Select.Option value='kl'>Kuala Lumpur</Select.Option>
              <Select.Option value='pg'>Penang</Select.Option>
              <Select.Option value='mumbai'>Mumbai</Select.Option>
              <Select.Option value='chennai'>Chennai</Select.Option>
            </Select>
          </Form.Item>
          <p style={{ color: 'blue' }}>
            If your location is not within this area you will recieve the frozen
            food
          </p>

          <Form.Item
            name='street'
            label='Street Address'
            rules={[
              { required: true, message: 'Please type in your Street Address' },
              { whitespace: true },
              {
                min: 3,
                message: 'Street Address must at least have 3 character',
              },
            ]}
            hasFeedback
          >
            <Input placeholder='Member Street Address' />
          </Form.Item>

          <Form.Item
            name='street2'
            label='Street Address'
            rules={[
              { required: true, message: 'Please type in your Street Address' },
              { whitespace: true },
              {
                min: 3,
                message: 'Street Address must at least have 3 character',
              },
            ]}
            hasFeedback
          >
            <Input placeholder='Member Street Address 2' />
          </Form.Item>

          <Form.Item
            name='city'
            label='City'
            rules={[
              { required: true, message: 'Please type in your city name' },
              { whitespace: true },
            ]}
            hasFeedback
          >
            <Input placeholder='City' />
          </Form.Item>

          <Form.Item
            name='state'
            label='State'
            rules={[
              {
                required: true,
                message: 'Please type in your State/Province name',
              },
              { whitespace: true },
            ]}
            hasFeedback
          >
            <Input placeholder='State/Province' />
          </Form.Item>

          <Form.Item
            name='zipCode'
            label='Zip Code'
            rules={[
              { required: true, message: 'Please type in your Zip Code' },
              { whitespace: true },
              { min: 5, message: 'Zip code must at least have 5 numbers' },
            ]}
            hasFeedback
          >
            <Input placeholder='Zip Code' />
          </Form.Item>

          <Form.Item
            name='Country'
            label='Country'
            rules={[{ required: true, message: 'Please choose your country' }]}
            hasFeedback
          >
            <Select placeholder='Select your Country'>
              <Select.Option value='malaysia'>Malaysia</Select.Option>
              <Select.Option value='india'>India</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name='agreement'
            wrapperCol={{ span: 24 }}
            valuePropName='checked'
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        'To proceed, you need to agree with our terms and conditions'
                      ),
              },
            ]}
          >
            <Checkbox>
              I agree to the <a href='#'>Terms of Service/Privacy Policy</a>
            </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
            <Button block type='primary' htmlType='submit'>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Member

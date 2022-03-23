import React, { Component } from 'react';
import {Form, Button, Checkbox, DatePicker , Input, Select} from "antd";

class Volunteer extends Component{
    render(){
        return(
            <div style={{display:"flex", justifyContent:"center", backgroundColor:"cadetblue"}}>
               <Form autoComplete='off' wrapperCol={{span:12}} labelCol={{span:10}} 
               style={{borderStyle:"solid", borderColor:"#F9E45B", padding:"20px", width:"16cm", backgroundColor:"white"}} >
               <h2>Volunteer Registration</h2>
                   
                   <Form.Item name="firstName" label="First Name" rules={[{required:true, 
                    message:"Require to fill-in this field"}, {whitespace:true}, {min:3}]}
                    hasFeedback>
                       <Input placeholder='First name:'/>
                   </Form.Item>

                   <Form.Item name="lastName" label="Last Name" rules={[{required:true, 
                    message:"Require to fill-in this field"}, {whitespace:true}, {min:3}]}
                    hasFeedback>
                       <Input placeholder='Last name:'/>
                   </Form.Item>

                   <Form.Item name="email" type="email" label="Email" rules={[{required:true, 
                    type:"email", message:"Please enter a valid Email"}]}
                    hasFeedback >
                       <Input placeholder='Email:'/>
                   </Form.Item>

                   <Form.Item name="contactNumber" label="Contact Number" rules={[{required:true, 
                    message:"Please fil-in your contact number"},  {min:9, message:"Please enter at least 9 numbers"}]}
                    hasFeedback>
                       <Input placeholder='Contact Number:'/>
                   </Form.Item>

                   <Form.Item name="gender" label="Gender" rules={[{required:true, 
                    message:"Please Select your gender"},]}
                    hasFeedback>
                       <Select placeholder='Select a Gender'>
                            <Select.Option value="male">Male</Select.Option> 
                            <Select.Option value="female">Female</Select.Option> 
                        </Select>
                   </Form.Item>

                   <Form.Item name="dob" label="D.O.B" rules={[{required:true, 
                    message:"Please Select your Date of Birth"},]}
                    hasFeedback>
                       <DatePicker style={{width:"100%"}} picker='date' placeholder='Choose Date of Birth:'/>
                   </Form.Item>

                   <Form.Item name="employmentStatus" label="Employment Status" rules={[{required:true, 
                    message:"Require to choose employment status"},]}hasFeedback>
                       <Select placeholder='Employment Status'>
                            <Select.Option value="fullTime">Full-Time</Select.Option> 
                            <Select.Option value="partTime">Part-Time</Select.Option>
                        </Select>
                   </Form.Item>

                   <Form.Item name="avilability" label="Availability for Part-time workers" rules={[{required:true, 
                    message:"Require to choose availability"},]}hasFeedback>
                       <Select placeholder='Availability'>
                            <Select.Option value="aWeek">Once a week</Select.Option> 
                            <Select.Option value="twoWeek">2 Times a week</Select.Option>
                            <Select.Option value="threeWeek">3 Times a week</Select.Option>
                            <Select.Option value="Weekends">On Weekends</Select.Option>
                        </Select>
                   </Form.Item>

                   <Form.Item name="volunteerRole" label="Volunteer Role" rules={[{required:true, 
                    message:"Require to choose Volunteer Role"},]}hasFeedback>
                       <Select placeholder='Volunteer Role'>
                            <Select.Option value="packgaing">Packgaing</Select.Option> 
                            <Select.Option value="cook">Cook</Select.Option>
                            <Select.Option value="serving">Serving</Select.Option>
                            <Select.Option value="safetyInspection">Safety Inspection</Select.Option>
                            <Select.Option value="eventManagement">Event Management</Select.Option>
                            <Select.Option value="adminstration">Adminstration</Select.Option>
                            <Select.Option value="adminstration">Warehouse Team</Select.Option>
                        </Select>
                   </Form.Item>

                   <Form.Item name="gettingInvolved" label="Reasons for getting involved" rules={[{required:true, 
                    message:"Require to fill-in this field"}, {whitespace:true}, {min:3}]}
                    hasFeedback>
                       <Input placeholder='Describe your Reasons'/>
                   </Form.Item>

                   <Form.Item name="street" label="Street Address" rules={[{required:true, 
                    message:"Please type in your Street Address"}, {whitespace:true}, {min:3, 
                        message:"Street Address must at least have 3 character"}]}
                    hasFeedback>
                       <Input placeholder='Volunteer Street Address'/>
                   </Form.Item>

                   <Form.Item name="street2" label="Street Address" rules={[{required:true, 
                    message:"Please type in your Street Address"}, {whitespace:true}, {min:3, 
                        message:"Street Address must at least have 3 character"}]}
                    hasFeedback>
                       <Input placeholder='Volunteer Street Address 2'/>
                   </Form.Item>
                   
                   <Form.Item name="city" label="City" rules={[{required:true, 
                    message:"Please type in your city name"}, {whitespace:true},]}
                    hasFeedback>
                       <Input placeholder='City'/>
                   </Form.Item>

                   <Form.Item name="state" label="State" rules={[{required:true, 
                    message:"Please type in your State/Province name"}, {whitespace:true},]}
                    hasFeedback>
                       <Input placeholder='State/Province'/>
                   </Form.Item>

                   <Form.Item name="zipCode" label="Zip Code" rules={[{required:true, 
                    message:"Please type in your Zip Code"}, {whitespace:true}, {min:5, message:"Zip code must at least have 5 numbers"}]}
                    hasFeedback >
                       <Input placeholder='Zip Code'/>
                   </Form.Item>

                   <Form.Item name="Country" label="Country" rules={[{required:true, 
                    message:"Please choose your country"},]}
                    hasFeedback>
                       <Select placeholder='Select your Country'>
                            <Select.Option value="malaysia">Malaysia</Select.Option> 
                            <Select.Option value="india">India</Select.Option> 
                        </Select>
                   </Form.Item>

                   <Form.Item name="agreement"  wrapperCol={{span:24}} valuePropName="checked" rules={[{validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        "To proceed, you need to agree with our terms and conditions"
                      ),}]}>
                       <Checkbox>
                          I agree to the <a href='#'>Terms of Service/Privacy Policy</a> 
                       </Checkbox>
                   </Form.Item>

                   <Form.Item  wrapperCol={{span:14, offset:6}}>
                       <Button block type='primary' htmlType='submit' >
                           Register
                       </Button>
                   </Form.Item>

               </Form>
            </div>
        )
    }
}

export default Volunteer;
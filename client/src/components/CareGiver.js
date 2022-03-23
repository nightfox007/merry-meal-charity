import React, { Component } from 'react';
import {Form, Button, Checkbox, DatePicker , Input, Select, Upload} from "antd";

class Caregiver extends Component{
    render(){
        return(
            <div style={{display:"flex", justifyContent:"center", backgroundColor:"cadetblue"}}>
               <Form autoComplete='off' wrapperCol={{span:15}} labelCol={{span:10}} 
               style={{borderStyle:"solid", borderColor:"#F9E45B", padding:"30px", backgroundColor:"white"}} >
               <h2>Caregiver Registration</h2>
                   
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

                   <Form.Item name="email" type="email" label="Email" requiredMark="optional" rules={[{ 
                    type:"email", message:"Please enter a valid Email"}]}
                    hasFeedback >
                       <Input placeholder='Email:'/>
                   </Form.Item>

                   <Form.Item name="contactNumber" label="Contact Number"  rules={[{required:true, 
                    message:"Please fil-in your contact number"},   {min:9, message:"Please enter at least 9 numbers"}]}
                    hasFeedback>
                       <Input placeholder='Contact Number'/>
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

                   <Form.Item name="relation" label="Relation" rules={[{required:true, 
                    message:"Please state your relationship with the Member"}, {whitespace:true}, {min:3, 
                        message:"name must at least have 3 character"}]}
                    hasFeedback>
                       <Input placeholder='Relation'/>
                   </Form.Item>

                   <Form.Item label="Identify Card" name="photos"  rules={[{required:true, 
                    message:"Please upload for verification purpose"}]}
                    hasFeedback>
                       <Upload listType='picture' action={"http://localhost:3000/" }
                       accept=".png,.jpeg,.jpg">
                           <Button>Click to Upload Picture</Button>
                        </Upload>
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

export default Caregiver;
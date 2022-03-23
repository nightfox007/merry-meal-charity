import React, { Component } from 'react';
import {Form, Button, Checkbox,  Input, Select,Upload} from "antd";

class FoodPartner extends Component{
    render(){
        return(
            <div style={{display:"flex", justifyContent:"center", backgroundColor:"cadetblue"}}>
               <Form autoComplete='off' wrapperCol={{span:17}} labelCol={{span:12}} 
               style={{borderStyle:"solid", borderColor:"#F9E45B", padding:"40px", backgroundColor:"white"}} >
               <h2>Food Service Partner Registration</h2>
                   
                   <Form.Item name="companyName" label="Company Name" rules={[{required:true, 
                    message:"Require to fill-in this field"}, {whitespace:true}, {min:3}]}
                    hasFeedback>
                       <Input placeholder='Company name'/>
                   </Form.Item>

                   <Form.Item name="contactName" label="Contact Name" rules={[{required:true, 
                    message:"Require to fill-in this field"}, {whitespace:true}, {min:3}]}
                    hasFeedback>
                       <Input placeholder='Contact name'/>
                   </Form.Item>

                   <Form.Item name="email" type="email" label="Email" rules={[{ required:true, 
                    type:"email", message:"Please enter a valid Email"}]}
                    hasFeedback >
                       <Input placeholder='Email'/>
                   </Form.Item>

                   <Form.Item name="contactNumber" label="Contact Number" rules={[{required:true, 
                    message:"Please fil-in your contact number"},  {min:9, message:"Please enter at least 9 numbers"}]}
                    hasFeedback>
                       <Input placeholder='Contact Number'/>
                   </Form.Item>

                   <Form.Item name="mealType" label="Meals Provided"  rules={[{required:true, 
                    message:"Please choose a meal"},]} hasFeedback>
                       <Select placeholder='Types of Meal'>
                            <Select.Option value="HNVM">Hindu Non-Vegeterian Meal</Select.Option> 
                            <Select.Option value="Halal">Muslim Meal</Select.Option>
                            <Select.Option value="AVML">Vegetarian Indian Meal</Select.Option>
                            <Select.Option value="VGML">Vegetarian Vegan Mea</Select.Option>
                            <Select.Option value="DBML">Diabetic Meal</Select.Option>
                            <Select.Option value="LFML">Low Fat Meall</Select.Option>
                            <Select.Option value="LSML">Low Salt Meal</Select.Option>
                        </Select>                    
                   </Form.Item>

                   <Form.Item name="mealAmount" label="Meal Amount"  rules={[{required:true, 
                    message:"Please choose a meal"},]} hasFeedback>
                       <Select placeholder='Amount of Meals Providing'>
                            <Select.Option value="10">10</Select.Option> 
                            <Select.Option value="20">20</Select.Option>
                            <Select.Option value="30">50</Select.Option>
                            <Select.Option value="40">100</Select.Option>
                        </Select>                    
                   </Form.Item>

                   <Form.Item name="foodDescription" label="Food Description" rules={[{required:true, 
                    message:"Require to fill-in this field"}, {whitespace:true}, {min:3}]}
                    hasFeedback>
                       <Input placeholder='Food Description'/>
                   </Form.Item>

                   <Form.Item label="Food Safety Manual" name="foodSafetyManual" rules={[{required:true, 
                    message:"Please upload for verification purpose"}]}
                    hasFeedback>
                       <Upload listType='picture' action={"http://localhost:3000/" }
                       accept=".pdf,.doc">
                           <Button>Click to Upload</Button>
                        </Upload>
                   </Form.Item>

                   <Form.Item label="Company Registration" name="companyRegistration" rules={[{required:true, 
                    message:"Please upload for verification purpose"}]}
                    hasFeedback>
                       <Upload listType='picture' action={"http://localhost:3000/" }
                       accept=".pdf,.doc">
                           <Button>Click to Upload</Button>
                        </Upload>
                   </Form.Item>

                   <Form.Item label="Halal Certifications" name="halalCertifications" rules={[{required:true, 
                    message:"Please upload for verification purpose"}]}
                    hasFeedback>
                       <Upload listType='picture' action={"http://localhost:3000/" }
                       accept=".pdf,.doc,.jpg,.png,.jpeg">
                           <Button>Click to Upload</Button>
                        </Upload>
                   </Form.Item>
    
                   <Form.Item name="street" label="Street Address" rules={[{required:true, 
                    message:"Please type in your Street Address"}, {whitespace:true}, {min:3, 
                        message:"Street Address must at least have 3 character"}]}
                    hasFeedback>
                       <Input placeholder='Company Street Address'/>
                   </Form.Item>

                   <Form.Item name="street2" label="Street Address" rules={[{required:true, 
                    message:"Please type in your Street Address"}, {whitespace:true}, {min:3, 
                        message:"Street Address must at least have 3 character"}]}
                    hasFeedback>
                       <Input placeholder='Company Street Address 2'/>
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

export default FoodPartner;
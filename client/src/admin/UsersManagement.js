import React, { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import axios from 'axios'
import Sidebar from './Sidebar'

const UsersManagement = () => {
  const [data, setData] = useState([])

  const loadData = async () => {
    const response = await axios.get('http://localhost:3001/members/get')
    setData(response.data)
  }

  useEffect(() => {
    loadData()
  }, [])

  const [data2, setData2] = useState([])

  const loadData2 = async () => {
    const response = await axios.get('http://localhost:3001/caregiver/get')
    setData2(response.data)
  }

  useEffect(() => {
    loadData2()
  }, [])

  return (
    <div className='d-flex'>
      <div>
        <Sidebar />
      </div>
      <div
        style={{
          flex: '1 1 auto',
          display: 'flex',
          flexFlow: 'column',
          height: '100vh',
          overflowY: 'hidden',
        }}
      >
        <div style={{ height: '100%' }}>
          <div
            style={{
              padding: '20px 5%',
              height: 'calc(100% - 64px)',
              overflowY: 'scroll',
            }}
          >
            <h4 className='font-weight-bold mb-3'>Members</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td scope='row'>{index + 1}</td>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.email}</td>
                      <td>{item.contact_number}</td>
                      <td>
                        <Button variant='primary'>View</Button>
                        <Button variant='success'>Accept</Button>
                        <Button variant='danger'>Decline</Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>

            <h4 className='font-weight-bold mb-3'>Caregivers</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data2.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td scope='row'>{index + 1}</td>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.email}</td>
                      <td>{item.contact_number}</td>
                      <td>
                        <Button variant='primary'>View</Button>
                        <Button variant='success'>Accept</Button>
                        <Button variant='danger'>Decline</Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersManagement

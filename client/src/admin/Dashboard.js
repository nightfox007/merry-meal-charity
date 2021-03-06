import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
// import Sidebar from './Sidebar'
import axios from 'axios'

const Dashboard = () => {
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
    const response = await axios.get(
      'http://localhost:3001/delivery_partner/get'
    )
    setData2(response.data)
  }

  useEffect(() => {
    loadData2()
  }, [])

  return (
    <div className='d-flex'>
      <div>{/* <Sidebar /> */}</div>
      <div
        style={{
          flex: '1 1 auto',
          display: 'flex',
          flexFlow: 'column',
          height: '100vh',
          overflowY: 'hidden',
        }}
      >
        <div>
          <div
            style={{
              padding: '20px 5%',
            }}
          >
            <h4 className='font-weight-bold mb-3'>Users</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Contact</th>
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
                    </tr>
                  )
                })}
              </tbody>
            </Table>

            <h4 font-weight-bold mb-3>
              Partners
            </h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Company Name</th>
                  <th>Contact Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {data2.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td scope='row'>{index + 1}</td>
                      <td>{item.company_name}</td>
                      <td>{item.contact_name}</td>
                      <td>{item.email}</td>
                      <td>{item.contact_number}</td>
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

export default Dashboard

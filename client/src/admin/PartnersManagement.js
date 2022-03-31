import React, { useState, useEffect } from 'react'
// import Sidebar from './Sidebar'
// import { Card, Button } from 'react-bootstrap'
import axios from 'axios'
import { Table, Button, Modal } from 'react-bootstrap'

const PartnersManagement = () => {
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

  // Modal
  const [view, setView] = useState(false)

  const handleClose1 = () => setView(false)
  const handleView = () => setView(true)

  const [accept, setAccept] = useState(false)

  const handleClose2 = () => setAccept(false)
  const handleAccept = () => setAccept(true)

  const [decline, setDecline] = useState(false)

  const handleClose3 = () => setDecline(false)
  const handleDecline = () => setDecline(true)

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
                  <th>Actions</th>
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
                      <td>
                        <Button variant='primary' onClick={handleView}>
                          View
                        </Button>
                        <Button variant='success' onClick={handleAccept}>
                          Accept
                        </Button>
                        <Button variant='danger' onClick={handleDecline}>
                          Decline
                        </Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>

            {/* Modal */}
            <Modal show={view} onHide={handleClose1}>
              <Modal.Header closeButton>
                <Modal.Title>Partners Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Company Name: Contact Name: Email: Contact Number:
              </Modal.Body>
              <Modal.Footer>
                <Button variant='secondary' onClick={handleClose1}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            <Modal show={accept} onHide={handleClose2}>
              <Modal.Header closeButton>
                <Modal.Body>
                  Are you sure you want to accept this partnership?
                </Modal.Body>
              </Modal.Header>
              <Modal.Footer>
                <Button variant='secondary' onClick={handleClose2}>
                  No, cancel
                </Button>
                <Button variant='primary' onClick={handleClose2}>
                  Yes, confirm
                </Button>
              </Modal.Footer>
            </Modal>

            <Modal show={decline} onHide={handleClose3}>
              <Modal.Header closeButton>
                <Modal.Body>
                  Are you sure you want to decline this partnership?
                </Modal.Body>
              </Modal.Header>
              <Modal.Footer>
                <Button variant='secondary' onClick={handleClose3}>
                  No, cancel
                </Button>
                <Button variant='primary' onClick={handleClose3}>
                  Yes, confirm
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>

      {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card> */}
    </div>
  )
}

export default PartnersManagement

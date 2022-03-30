import React from 'react'
import { CDBBtn } from 'cdbreact'
import Sidebar from './Sidebar'

export const PartnerManagement2 = () => {
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
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(1, minmax(200px, 700px))',
              }}
            >
              <div style={{ height: '100%' }}>
                <div
                  style={{
                    height: 'calc(100% - 64px)',
                    padding: '20px 5%',
                    overflowY: 'scroll',
                  }}
                >
                  <div style={{ margin: '0 auto', maxWidth: '1320px' }}>
                    {/* <div className='mini-container'> */}
                    <div className='mini-container'>
                      <div>
                        <div className='card shadow border-0'>
                          <img
                            alt='cardImg'
                            className='img-fluid'
                            style={{ objectFit: 'cover' }}
                            src='/img/cardImage.png'
                          />
                          <div className='p-3'>
                            <h6>Comapny Name:Koepp Group</h6>
                            <h6>Email:angworth.jedidiah@connelly.info</h6>
                            <p>Cross-Group Maximized Conglomeration </p>
                            <td class='float-left'>
                              <CDBBtn class='btn btn-primary mr-2'>View</CDBBtn>
                              <CDBBtn class='btn btn-dark mr-2'>Accept</CDBBtn>
                              <CDBBtn class='btn btn-danger mr-2'>
                                Decline
                              </CDBBtn>
                            </td>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className='mx-auto my-3 text-center'>
                  <small>&copy; MerryMeal Partners</small>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

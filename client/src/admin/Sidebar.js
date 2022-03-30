import React from 'react'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div
      className={`app`}
      style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor='#fff' backgroundColor='#333'>
        <CDBSidebarHeader prefix={<i className='fa fa-bars fa-large'></i>}>
          <a
            href='/dashboard'
            className='text-decoration-none bar'
            style={{ color: 'inherit' }}
          >
            MerryMeal
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className='sidebar-content'>
          <CDBSidebarMenu>
            <NavLink exact to='/dashboard' activeclassname='activeClicked'>
              <CDBSidebarMenuItem icon='columns'>Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/partners' activeclassname='activeClicked'>
              <CDBSidebarMenuItem icon='users'>
                Partners Management
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/users' activeclassname='activeClicked'>
              <CDBSidebarMenuItem icon='user'>
                Users Management
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
          <CDBSidebarMenu></CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className='sidebar-btn-wrapper'
            style={{
              padding: '20px 5px',
            }}
          >
            MerryMeal @2022
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  )
}

export default Sidebar

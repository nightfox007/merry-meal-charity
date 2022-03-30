import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './admin/Dashboard'
import Login from './admin/Login'
import UsersManagement from './admin/UsersManagement'
import PartnersManagement from './admin/PartnersManagement'

const AdminC = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/users' element={<UsersManagement />} />
          <Route path='/partners' element={<PartnersManagement />} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default AdminC

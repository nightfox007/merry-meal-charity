import React from 'react'
import Components from './Components'
import AdminC from './AdminC'
import './styles/App.css'
import Footer from './components/Footer'
import NavbarC from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <NavbarC />
      <Components />
      <AdminC />
      <Footer />
    </div>
  )
}

export default App

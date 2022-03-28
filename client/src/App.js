import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavbarC from './components/Navbar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Volunteer from './components/Volunteer'
import FoodPartner from './components/FoodPartner'
import Member from './components/Member'
import DeliveryPartner from './components/DeliveryPartner'
import CareGiver from './components/CareGiver'
import FoodMenu from './components/FoodMenu'
import FoodSafety from './components/FoodSafety'
import FoodHelp from './components/FoodHelp'
import Donation from './components/Donation'
import Login from './admin/Login'
import MealRequest from './components/MealRequest'
import { PartnersManagement } from './admin/PartnersManagement'
import { UsersManagement } from './admin/UsersManagement'
import { Dashboard } from './admin/Dashboard'
import { Profile } from './admin/Profile'
import Footer from './components/Footer'
import MemberThankyou from './components/Thankyou/MemberThankyou'
import CGThankyou from './components/Thankyou/CGThankyou'
import FPThankyou from './components/Thankyou/FPThankyou'
import DPThankyou from './components/Thankyou/DPThankyou'
import VThankyou from './components/Thankyou/VThankyou'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavbarC />
        <Routes>
          {/* Pages */}
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />

          {/* Jarrod's Module */}
          <Route path='/member' element={<Member />} />
          <Route path='/caregiver' element={<CareGiver />} />
          <Route path='/volunteer' element={<Volunteer />} />
          <Route path='/foodpartner' element={<FoodPartner />} />
          <Route path='/deliverypartner' element={<DeliveryPartner />} />
          <Route path='/thankyou(member)' element={<MemberThankyou />} />
          <Route path='/thankyou(caregiver)' element={<CGThankyou />} />
          <Route path='/thankyou(FoodPartner)' element={<FPThankyou />} />
          <Route path='/thankyou(DeliveryPartner)' element={<DPThankyou />} />
          <Route path='/thankyou(volunteer)' element={<VThankyou />} />

          {/* Hibraheem's Module */}
          <Route path='/donate' element={<Donation />} />
          <Route path='/mealrequest' element={<MealRequest />} />

          <Route path='/foodmenu' element={<FoodMenu />} />
          <Route path='/foodhelp' element={<FoodHelp />} />

          {/* Nikhat's Module */}
          <Route path='/foodsafety' element={<FoodSafety />} />

          {/* Judith's & Neha's Module */}
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/users' element={<UsersManagement />} />
          <Route path='/partners' element={<PartnersManagement />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        {/* <Footer /> */}
        <Footer/>
      </Router>
    </div>
  )
}

export default App

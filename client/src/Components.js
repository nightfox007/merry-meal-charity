import React, { Fragment } from 'react'
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
import MemberThankyou from './components/Thankyou/MemberThankyou'
import CGThankyou from './components/Thankyou/CGThankyou'
import FPThankyou from './components/Thankyou/FPThankyou'
import DPThankyou from './components/Thankyou/DPThankyou'
import VThankyou from './components/Thankyou/VThankyou'

import FoodMenu from './components/FoodMenu'
import FoodSafety from './components/FoodSafety'
import KnowYourFood from './components/FoodSafety/KnowYourFood'
import FrozenMeal from './components/FoodSafety/FrozenMeal'
import FrozenMealBenefit from './components/FoodSafety/FrozenMealBenefit'
import FoodHelp from './components/FoodHelp'
import Donation from './components/Donation'
import MealRequest from './components/MealRequest'
import TermsCondition from './pages/TermsCondition'
import Footer from './components/Footer'
import DThankyou from './components/Thankyou/DThankyou'

function Components() {
  return (
    <Fragment>
      <Router>
        {/* <NavbarC /> */}
        <Routes>
          {/* Pages */}
          <Route exact path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/TermsCondition' element={<TermsCondition />} />

          {/* Jarrod's Module */}
          <Route path='/member' element={<Member />} />
          <Route path='/caregiver' element={<CareGiver />} />
          <Route path='/volunteer' element={<Volunteer />} />
          <Route path='/foodpartner' element={<FoodPartner />} />
          <Route path='/deliverypartner' element={<DeliveryPartner />} />
          <Route path='/thankyou(member)' element={<MemberThankyou />} />
          <Route path='/thankyoucaregiver' element={<CGThankyou />} />
          <Route path='/thankyou(FoodPartner)' element={<FPThankyou />} />
          <Route path='/thankyou(DeliveryPartner)' element={<DPThankyou />} />
          <Route path='/thankyou(volunteer)' element={<VThankyou />} />
          <Route path='/thankyoudonors' element={<DThankyou />} />

          {/* Hibraheem's Module */}
          <Route path='/donate' element={<Donation />} />
          <Route path='/mealrequest' element={<MealRequest />} />

          <Route path='/foodmenu' element={<FoodMenu />} />
          <Route path='/foodhelp' element={<FoodHelp />} />

          {/* Nikhat's Module */}
          <Route path='/foodsafety' element={<FoodSafety />} />
          <Route path='/KnowYourFood' element={<KnowYourFood />} />
          <Route path='/FrozenMeal' element={<FrozenMeal />} />
          <Route path='/FrozenMealBenefit' element={<FrozenMealBenefit />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </Fragment>
  )
}

export default Components

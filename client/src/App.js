import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Header from './components/Header'
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
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          {/* Pages */}
          <Route path='/' exact component={Home}></Route>
          <Route path='/AboutUs/' exact component={AboutUs}></Route>
          <Route path='/ContactUs/' exact component={ContactUs}></Route>

          {/* Jarrod's Module */}
          <Route path='/Member/' exact component={Member}></Route>
          <Route path='/CareGiver/' exact component={CareGiver}></Route>
          <Route path='/Volunteer/' exact component={Volunteer}></Route>
          <Route path='/FoodPartner/' exact component={FoodPartner}></Route>
          <Route
            path='/DeliveryPartner/'
            exact
            component={DeliveryPartner}
          ></Route>

          {/* Hibraheem's Module */}
          <Route path='/Donation/' exact component={Donation}></Route>
          <Route path='/FoodMenu/' exact component={FoodMenu}></Route>
          <Route path='/FoodHelp/' exact component={FoodHelp}></Route>

          {/* Nikhat's Module */}
          <Route path='/FoodSafety/' exact component={FoodSafety}></Route>

          {/* Judith's & Neha's Module */}

          <Footer />
        </Routes>
      </Router>
    </div>
  )
}

export default App

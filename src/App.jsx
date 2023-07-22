import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Home from './components/home/Home'
import Sidebar from './components/home/Sidebar'
import AddIssue from './components/home/AddIssue'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Contact from './components/contact/Contact'
import TopBar from './components/home/TopBar'
import About from './components/about/About'
import PrivateRoutes from './PrivateRoutes'
function App() {
  const locations = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const HandleShowMenu = () => {
    setShowMenu(!showMenu);
  }
  const HandleHideMenu = () => {
    setShowMenu(false);
  }
  return (
    <div>
      <ToastContainer position='center' />
      <Sidebar HandleShowMenu={HandleShowMenu} HandleHideMenu={HandleHideMenu} showMenu={showMenu} />
      <TopBar HandleShowMenu={HandleShowMenu} />
      <Routes>
        {
          locations.pathname == '/SignIn' ? <Route path='/SignIn' element={<SignIn />} /> :
            <Route path='/SignUp/:id' element={<SignUp />} />
        }
        <Route path='/' element={<Home />} />
        <Route path='/AddIssue' element={<PrivateRoutes/>}>
          <Route path='/AddIssue' element={<AddIssue />} />
        </Route>
        <Route path='/Contact' element={<PrivateRoutes/>}>
          <Route path='/Contact' element={<Contact />} />
        </Route>
        <Route path='/About' element={<About />} />
      </Routes>
    </div>
  )
}

export default App

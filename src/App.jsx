import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Home from './components/home/Home'
import AddIssue from './components/home/AddIssue'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import PrivateRoutes from './PrivateRoutes'
import Detail from './components/detail/Detail'
import AllIssues from './components/post issues/AllIssues'
import UpdateIssue from './components/UpdateIssue/UpdateIssue'
import Profile from './components/profile/Profile'
import Footer from './components/footer/Footer'
import MyIssues from './components/post issues/MyIssues'
import Header from './components/home/Header'
import Opps from './components/opps/Opps'
import Dashboard from './components/dashboard/Dashboard'
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
    <>
      <ToastContainer position="top-center" />
      {/* <Sidebar HandleShowMenu={HandleShowMenu} HandleHideMenu={HandleHideMenu} showMenu={showMenu} />
      <TopBar HandleShowMenu={HandleShowMenu} /> */}
      <Header HandleShowMenu={HandleShowMenu} HandleHideMenu={HandleHideMenu} showMenu={showMenu}/>
      <Routes>
        {
          locations.pathname == '/SignIn' ? <Route path='/SignIn' element={<SignIn />} /> :
            <Route path='/SignUp' element={<SignUp />} />
        }
        <Route path='/' element={<Home />} />
        <Route path='/AddIssue' element={<PrivateRoutes />}>
          <Route path='/AddIssue' element={<AddIssue />} />
        </Route>
        <Route path='/Contact' element={<PrivateRoutes />}>
          <Route path='/Contact' element={<Contact />} />
        </Route>
        <Route path='/AllIssues' element={<AllIssues />} />
        {
          locations.pathname === "/AllIssues" ? <Route path='/AllIssues' element={<AllIssues />} /> :
          <Route path='/AllIssues/:id' element={<AllIssues />} />
        }
        <Route path='/Detail/:id' element={<Detail />} />
        <Route path='/UpdateIssue' element={<PrivateRoutes />}>
          <Route path='/UpdateIssue/:id' element={<UpdateIssue />} />
        </Route>
        <Route path='/About' element={<About />} />

        <Route path='/Dashboard' element={<Dashboard/>}>
          <Route path='Profile' element={<Profile />} />
          <Route index element={<MyIssues />} />
          <Route path='MyIssues' element={<MyIssues />} />
        </Route>
        <Route path="*" element={<Opps/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App

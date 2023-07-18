import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Welcome from './components/welcome/Welcome'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Home from './components/home/Home'
import Dashboard from './components/home/Dashboard'
import AddIssue from './components/home/AddIssue'
function App() {
  const locations = useLocation();
  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />} />
        {
          locations.pathname == '/SignIn' ? <Route path='/SignIn' element={<SignIn />} /> :
            <Route path='/SignUp/:id' element={<SignUp />} />
        }
        <Route path='/Home' element={<Home/>}>
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path='AddIssue' element={<AddIssue/>} />
        </Route>

      </Routes>
    </>
  )
}

export default App

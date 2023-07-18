import Sidebar from "./Sidebar"
import { LuSearch, LuBell } from 'react-icons/lu'
import Miirshe from '../../assets/miirshe.jpg'
import { Outlet } from "react-router-dom"
import { useState } from "react"
import { HiMenuAlt2 } from "react-icons/hi"
const Home = () => {
    const [showMenu, setShowMenu] = useState(false);
    const HandleShowMenu = () => {
        setShowMenu(!showMenu);
    }
    const HandleHideMenu = () => {
        setShowMenu(false);
    }
    return (
        <div>
            <Sidebar HandleShowMenu={HandleShowMenu} HandleHideMenu={HandleHideMenu}  showMenu={showMenu}/>
            <div className="w-full p-4 shadow-md border-b-2 bg-white lg:w-[80%] lg:ml-[20%] flex flex-row justify-start  lg:justify-between  items-start lg:items-center">
                <div className="flex flex-row justify-start items-start lg:items-center ml-4">
                    <p className='lg:hidden'><HiMenuAlt2 size={28} onClick={HandleShowMenu} /></p>
                    <LuSearch size={25} className="text-[#474E68] mt-2" />
                    <input className="p-2 rounded outline-none" type="text" placeholder="Search..." />
                </div>
                <div className="flex flex-row justify-start items-center gap-4 lg:mr-20">
                    <LuBell size={25} />
                    <div className="border-l-2 flex flex-row justify-start items-center gap-4">
                        <img className="ml-5  w-10 h-8 lg:h-10 rounded-[50%]" src={Miirshe} alt="photo profile" />
                        <p className="hidden lg:visible">Miirshe</p>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Home
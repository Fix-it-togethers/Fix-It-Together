import { LuLocateFixed } from 'react-icons/lu'
import { RxDashboard } from 'react-icons/rx'
import { BiSolidAddToQueue } from 'react-icons/bi'
import { VscIssues } from 'react-icons/vsc'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdContacts, IoMdLogIn } from 'react-icons/io'
import { FcAbout } from 'react-icons/fc'
import './style.css'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
const Sidebar = ({ HandleHideMenu, showMenu }) => {
    const navigate = useNavigate();
    const token = Cookies.get('token');
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        if (token) {
            setAuth(true);
        }
    }, [token])
    const handleLogOut = () => {
        Cookies.remove('token'),
            setAuth(false);
        navigate('/SignIn')
    }
    return (
        <div className={showMenu ? 'show w-full lg:w-[18%] fixed left-0 top-0 bottom-0 bg-[#ffffff] shadow' : 'hide w-full lg:w-[18%] fixed left-0 top-0 bottom-0  bg-[#F4F4F4] shadow'}>
            <div className='flex flex-col justify-start items-start ml-10 text-[#03256C] space-y-5 relative'>
                <LuLocateFixed size={100} />
                <nav>
                    <ul className='show flex flex-col justify-start items-start space-y-4' onClick={HandleHideMenu}>
                        <li className=' flex flex-row justify-start items-center gap-3'><RxDashboard className='mt-3' size={20} /><Link className='text-base tracking-widest mt-3' to='/'>Home</Link></li>
                        {
                            auth && (
                                <>
                                    <li className='flex flex-row justify-start items-center gap-3'><BiSolidAddToQueue className='mt-3' size={20} /><Link className='text-base tracking-widest mt-3' to='/AddIssue'>Add Issue</Link></li>
                                    <li className='flex flex-row justify-start items-center gap-3'><VscIssues className='mt-3' size={20} /><Link className='text-base tracking-widest mt-3'>My Issue</Link></li>
                                    <li className='flex flex-row justify-start items-center gap-3'><VscIssues className='mt-3' size={20} /><Link className='text-base tracking-widest mt-3' to='/AllIssues'>All Issues</Link></li>
                                    <li className='flex flex-row justify-start items-center gap-3'><IoMdContacts className='mt-3' size={20} /><Link className='text-base tracking-widest mt-3' to='/Contact'>Contact</Link></li>
                                </>
                            )
                        }
                        <li className='flex flex-row justify-start items-center gap-3'><FcAbout className='mt-3' size={20} /><Link className='text-base tracking-widest mt-3' to='/About'>About</Link></li>
                        {
                            auth && (
                                <li className='flex flex-row justify-start items-center gap-3'><IoMdLogIn className='mt-3' size={20} /><button className='text-base tracking-widest mt-3' onClick={handleLogOut}>Signout </button></li>
                            )
                        }
                        {
                            !auth && (
                                <li className='flex flex-row justify-start items-center gap-3'><IoMdLogIn className='mt-3' size={20} /><Link className='text-base tracking-widest mt-3' to='/SignIn'>Signin</Link></li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
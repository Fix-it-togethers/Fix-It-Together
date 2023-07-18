import { LuLocateFixed } from 'react-icons/lu'
import { RxDashboard} from 'react-icons/rx'
import { BiSolidAddToQueue} from 'react-icons/bi'
import { VscIssues } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { AiOutlineSetting } from 'react-icons/ai'
import './style.css'
const Sidebar = ( {HandleHideMenu , showMenu}) => {
    return (
        <div className={showMenu ? 'show w-full lg:w-[20%] fixed left-0 top-0 bottom-0 bg-[#474E68]' : 'hide w-full lg:w-[20%] fixed left-0 top-0 bottom-0 bg-[#474E68]'}>
            <div className='flex flex-col justify-start items-start ml-10 text-white space-y-5 relative'>
                <LuLocateFixed size={100}/>
                <nav>
                    <ul className='show flex flex-col justify-start items-start space-y-4' onClick={HandleHideMenu}>
                        <li className=' flex flex-row justify-start items-center gap-3'><RxDashboard className='mt-3' size={20}/><Link className='text-base tracking-widest mt-3' to='/Home/Dashboard'>Dashboard</Link></li>
                        <li className='flex flex-row justify-start items-center gap-3'><BiSolidAddToQueue className='mt-3' size={20}/><Link className='text-base tracking-widest mt-3' to='/Home/AddIssue'>Add New Issue</Link></li>
                        <li className='flex flex-row justify-start items-center gap-3'><VscIssues className='mt-3' size={20}/><Link className='text-base tracking-widest mt-3'>My Issue</Link></li>
                        <li className='flex flex-row justify-start items-center gap-3'><VscIssues className='mt-3' size={20}/><Link className='text-base tracking-widest mt-3'>All Issues</Link></li>
                        <li className='flex flex-row justify-start items-center gap-3'><AiOutlineSetting className='mt-3' size={20}/><Link className='text-base tracking-widest mt-3' to='/'>Setting</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
import { LuBell } from 'react-icons/lu'
import avator from '../../assets/avator.png'
import { HiMenuAlt2 } from "react-icons/hi"
import { useGetUsersQuery } from '../../store/Api/UserSlice'
const TopBar = ({HandleShowMenu}) => {
    const {data:user=[]} = useGetUsersQuery();
    console.log("hi miirshe data",user.first_name)
    return (
        <div className="w-full p-4 shadow border-b-1 bg-white lg:w-[82%] lg:ml-[18%] flex flex-row justify-between items-center">
            <div className="flex flex-row justify-between items-center  ml-4">
                <p className='lg:hidden'><HiMenuAlt2 className='mt-2' size={28} onClick={HandleShowMenu} /></p>
                {/* <LuSearch size={25} className="text-[#474E68] mt-2" />
                    <input className="p-2 rounded outline-none" type="text" placeholder="Search..." /> */}
            </div>
            <div className="flex flex-row justify-start items-center gap-4 lg:mr-16">
                <LuBell size={25} />
                <div className="border-l-2 flex flex-row justify-start items-center gap-4">
                    <img className="ml-5  w-10 h-9 lg:h-10 rounded-[50%]" src={avator} alt="photo profile" />
                    <p>{user.first_name}</p>
                </div>
            </div>
        </div>
    )
}

export default TopBar
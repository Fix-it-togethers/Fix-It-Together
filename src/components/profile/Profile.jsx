import { useGetUsersQuery } from "../../store/Api/UserSlice"
import profile from '../../assets/avator.png'
import { BiSolidEdit } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { RiChatDeleteFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Profile = () => {
    const { data: user = [] } = useGetUsersQuery();
    console.log("hi user ", user)
    return (
        <div className=" w-[95%] mx-auto lg:w-[75%] lg:ml-[22%] mt-10 lg:mt-14 text-[#061826] bg-[#fff] p-3 rounded shadow-sm">
            <h1 className="text-base mt-4 ml-2 lg:text-2xl">Profile User</h1>
            <div className="p-10 flex flex-col justify-center items-center gap-2 space-y-5 space-x-3">
                <img className="w-[20%]" src={profile} alt="user profile" />
                <div className=" space-y-4">
                    <p>Name  : {user.first_name} {user.last_name}</p>
                    <p>Email : {user.email}</p>
                    <p>Active :  <span className="ml-3">Online </span> <BsDot size={60} className="text-green-500 inline"/></p>
                    <span className='flex flex-row justify-start gap-4 items-center space-x-5'>
                        <Link>Edit<BiSolidEdit size={25} className="inline ml-3 text-green-500" /></Link>
                        <Link>Delete<RiChatDeleteFill size={25} className="inline ml-3 text-red-500" /></Link>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Profile
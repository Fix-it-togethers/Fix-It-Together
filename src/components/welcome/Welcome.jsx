import {useNavigate} from "react-router-dom"
import PhotoFix from "../../assets/fix.png"
import { LuLocateFixed } from 'react-icons/lu'
const Welcome = () => {
  const navigate = useNavigate();
  const handleLogin = ()=>{
    navigate('/SignIn')
  }
  return (
    <div>
      <div className=" bg-white grid grid-cols-1 lg:grid-cols-2 p-4 lg:w-[85%] lg:mx-auto shadow mt-4 lg:mt-8 rounded">
        <div className="bg-[#474E68] rounded">
          <img src={PhotoFix} alt="Fix Photo " />
        </div>
        <div className="bg-white p-4 rounded flex flex-col justify-center items-center space-y-5">
          <LuLocateFixed size={100} />
          <h1 className="text-3xl lg:text-7xl">Fix It Together</h1>
          <p className="text-base lg:text-xl tracking-wider leading-8 lg:tracking-widest">Better Community , Better World </p>
          <button className="px-6 py-3 text-xl rounded-md shadow-sm text-center border" onClick={handleLogin}>start now</button>
        </div>
      </div>
    </div>
  )
}

export default Welcome
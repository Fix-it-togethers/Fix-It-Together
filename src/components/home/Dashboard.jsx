import PotholePhoto from '../../assets/pothole.gif'
import { CiFlag1 } from 'react-icons/ci'
import { CgCalendarDates } from 'react-icons/cg'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
function Dashboard() {
    return (
        <div className="lg:w-[75%] lg:ml-[22%] mt-10 lg:mt-14 text-[#474E68]">
            <div className="flex flex-col justify-start items-start space-y-3">
                <h1 className="text-xl  ml-4 lg:ml-0 lg:text-4xl lg:tracking-wider">Welcome to Fix It Together </h1>
                <p className="text-base ml-4 lg:ml-0 lg:text-lg lg:tracking-widest">Let`s make our community better a place</p>
            </div>
            <div className='mt-5'>
                <h1 className='lg:text-3xl tracking-widest ml-4 lg:ml-0'>Issues Reported</h1>
                <div className="mt-5 flex flex-col justify-start lg:items-start items-center space-y-4">
                    <div className="w-[90%] mx-auto lg:mx-0 flex flex-col lg:flex-row justify-start items-center lg:items-start  space-x-2">
                        <img className='lg:w-64 lg:h-40 rounded' src={PotholePhoto} alt="photo fix issue" />
                        <div className=' space-y-3'>
                            <h1>Dangarous Pathole </h1>
                            <p>I Found dangarous pathole in the middle of street </p>
                            <div className='flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center space-y-4 lg:space-x-2'>
                                <p className='flex flex-row justify-start lg:items-center items-start'><CiFlag1 className='mt-2' size={20} /> <span>somalia mogadishu </span></p>
                                <p className='flex flex-row justify-start lg:items-center items-start '><CgCalendarDates className='mt-1' size={20} /> <span>17 july 2023 </span></p>
                            </div>
                            <div className='flex flex-row justify-start items-start lg:items-center space-x-2 mt-3'>
                                <AiOutlineLike size={25} />
                                <AiOutlineDislike size={25} />
                            </div>
                        </div>
                    </div>
                    {/* Issuesd two */}

                </div>
            </div>
        </div>
    )
}

export default Dashboard
import PotholePhoto from '../../assets/pothole.gif'
import { CiFlag1 } from 'react-icons/ci'
import { CgCalendarDates } from 'react-icons/cg'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
function Dashboard() {
    return (
        <div className="w-full lg:ml-4 mt-10 lg:mt-14 text-[#03256C]">
            <div className='mt-5'>
                <h1 className='lg:text-3xl tracking-widest ml-4 lg:ml-0'>Issues Reported</h1>
                <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-3 mr-3">
                    <div className="w-[100%] mx-auto lg:mx-0 flex flex-col justify-start items-center lg:items-start transition hover:shadow-md cursor-pointer ease-in-out p-2">
                        <img className='lg:w-80  lg:h-72' src={PotholePhoto} alt="photo fix issue" />
                        <div className=' space-y-2 mt-3'>
                            <h1 className='text-xl'>Dangarous Pathole </h1>
                            <p className='text-base w-11/12'>I Found dangarous pathole in the middle of street </p>
                            <div className='flex flex-col justify-start items-start space-y-1 gap-3'>
                                <p className='flex flex-row justify-start lg:items-center items-start'><CiFlag1 className='mt-2' size={20} /> <span className='ml-2'>somalia mogadishu </span></p>
                                <p className='flex flex-row justify-start lg:items-center items-start '><CgCalendarDates className='mt-1' size={20} /> <span className='ml-2'>17 july 2023 </span></p>
                            </div>
                            <div className='flex flex-row justify-start items-start lg:items-center space-x-2 mt-3'>
                                <AiOutlineLike size={25} />
                                <AiOutlineDislike size={25} />
                            </div>
                        </div>
                    </div>
                    {/* Issuesd two */}
                    <div className="w-[100%] mx-auto lg:mx-0 flex flex-col justify-start items-center lg:items-start">
                        <img className='lg:w-80  lg:h-72' src={PotholePhoto} alt="photo fix issue" />
                        <div className=' space-y-2 mt-3'>
                            <h1 className='text-xl'>Dangarous Pathole </h1>
                            <p className='text-base w-11/12'>I Found dangarous pathole in the middle of street </p>
                            <div className='flex flex-col justify-start items-start space-y-1 gap-3'>
                                <p className='flex flex-row justify-start lg:items-center items-start'><CiFlag1 className='mt-2' size={20} /> <span className='ml-2'>somalia mogadishu </span></p>
                                <p className='flex flex-row justify-start lg:items-center items-start '><CgCalendarDates className='mt-1' size={20} /> <span className='ml-2'>17 july 2023 </span></p>
                            </div>
                            <div className='flex flex-row justify-start items-start lg:items-center space-x-2 mt-3'>
                                <AiOutlineLike size={25} />
                                <AiOutlineDislike size={25} />
                            </div>
                        </div>
                    </div>


                    <div className="w-[100%] mx-auto lg:mx-0 flex flex-col justify-start items-center lg:items-start">
                        <img className='lg:w-80  lg:h-72' src={PotholePhoto} alt="photo fix issue" />
                        <div className=' space-y-2 mt-3'>
                            <h1 className='text-xl'>Dangarous Pathole </h1>
                            <p className='text-base w-11/12'>I Found dangarous pathole in the middle of street </p>
                            <div className='flex flex-col justify-start items-start space-y-1 gap-3'>
                                <p className='flex flex-row justify-start lg:items-center items-start'><CiFlag1 className='mt-2' size={20} /> <span className='ml-2'>somalia mogadishu </span></p>
                                <p className='flex flex-row justify-start lg:items-center items-start '><CgCalendarDates className='mt-1' size={20} /> <span className='ml-2'>17 july 2023 </span></p>
                            </div>
                            <div className='flex flex-row justify-start items-start lg:items-center space-x-2 mt-3'>
                                <AiOutlineLike size={25} />
                                <AiOutlineDislike size={25} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard
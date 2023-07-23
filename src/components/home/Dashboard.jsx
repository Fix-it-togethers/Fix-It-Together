import { CiFlag1 } from 'react-icons/ci'
import { CgCalendarDates } from 'react-icons/cg'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { useFetchIssueQuery } from '../../store/Api/FixSlice'
import { BiMessageEdit } from 'react-icons/bi'
import { RiChatDeleteFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
function Dashboard() {
    const { data: fetchIssue = [] } = useFetchIssueQuery()
    console.log(fetchIssue);
    return (
        <div className="w-full lg:ml-4 mt-10 lg:mt-14 text-[#03256C]">
            <div className='mt-5'>
                <h1 className='lg:text-3xl tracking-widest ml-4 lg:ml-0'>Issues Reported</h1>
                <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-3 mr-3">
                    {
                        fetchIssue?.map(issue => {
                            return (
                                <Link to={`/Detail/${issue.id}`} key={issue.id}>
                                    <div className="w-[100%] mx-auto lg:mx-0 flex flex-col justify-start items-start lg:items-start transition hover:shadow-md cursor-pointer ease-in-out p-3 shadow rounded border-collapse" key={issue.id}>
                                        <img className='lg:w-80  lg:h-72' src={issue.image} alt="photo fix issue" />
                                        <div className=' space-y-2 mt-3 w-full'>
                                            <h1 className='text-xl'>{issue.title}</h1>
                                            <p className='text-base w-11/12'>{issue.description} </p>
                                            <div className='flex flex-col justify-start items-start space-y-1 gap-3'>
                                                <p className='flex flex-row justify-start lg:items-center items-start'><CiFlag1 className='mt-2' size={20} /> <span className='ml-2'>{issue.location}</span></p>
                                                <p className='flex flex-row justify-start lg:items-center items-start '><CgCalendarDates className='mt-1' size={20} /> <span className='ml-2'>{issue.date}</span></p>
                                            </div>
                                            <div className='flex flex-row justify-between items-start lg:items-center  mt-4 space-y-2 border-t-2 w-full p-1 '>
                                                <span className='flex flex-row justify-start items-center space-x-6'>
                                                    <AiOutlineLike size={25} />
                                                    <AiOutlineDislike size={25} />
                                                </span>
                                                <span className='flex flex-row justify-start items-center space-x-2'>
                                                    <BiMessageEdit size={25} />
                                                    <RiChatDeleteFill size={25} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Dashboard
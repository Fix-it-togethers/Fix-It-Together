import { Link, useParams } from "react-router-dom"
import { useFetchIssueQuery } from "../../store/Api/FixSlice"
import { useEffect, useState } from "react";
import { BiMessageEdit } from "react-icons/bi";
import { RiChatDeleteFill } from "react-icons/ri";
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { CiFlag1 } from "react-icons/ci";
import { CgCalendarDates } from "react-icons/cg";
function Detail() {
    const params = useParams();
    const { data: issues = [] } = useFetchIssueQuery();
    console.log(issues)
    const [issue , setIssue] = useState({
        id:'',
        title:'',
        description: '',
        image:'',
        location:'',
        downvotes: '',
        upvotes: ''
    });
    useEffect(() => {
        const result = issues.find(issue => {
            return issue.id === Number(params.id)
        });
        console.log(result)
        if (result) {
            setIssue({
                id: result.id,
                title: result.title,
                description: result.description,
                image: result.image,
                location: result.location,
                downvotes: result.downvotes,
                upvotes: result.upvotes
            });
        }
    }, [issues ,params.id]);
    return (
        <div className=" w-[95%] mx-auto lg:w-[75%] lg:ml-[22%] mt-10 lg:mt-14 text-[#474E68] bg-white p-3 rounded shadow-sm">
            <button className="px-7 py-2 shadow-md rounded bg-[#CACCD6] text-[#03256C]">
                <Link to='/'>Back</Link>
            </button>
            <div className="w-[100%] mt-4 mx-auto lg:mx-0 flex flex-col lg:flex-row  justify-start items-start lg:items-start transition hover:shadow-md cursor-pointer ease-in-out p-3 shadow rounded border-collapse lg:gap-4" key={issue.id}>
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

        </div>
    )
}

export default Detail
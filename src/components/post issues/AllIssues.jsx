import { Link } from 'react-router-dom'
import Dashboard from '../home/Dashboard'
const AllIssues = () => {
  return (
    <div className=" w-[95%] mx-auto lg:w-[75%] lg:ml-[22%] mt-10 lg:mt-14 text-[#474E68] bg-white p-3 rounded shadow-sm">
            <div className="w-full rounded-md p-5 bg-[#03256C] text-white">
                    <div className=" p-4">
                        <div className="p-3">
                            <h1 className="text-4xl tracking-widest text-center">All Issues Post Of Each Information</h1>
                        </div>
                        <span className="flex justify-center items-center space-x-4">
                            <Link to="/" className="text-xl">HOME</Link> <small>/</small> <span className="text-lg">All Issues</span>
                        </span>
                    </div>
                </div>
        <Dashboard/>
    </div>
  )
}

export default AllIssues
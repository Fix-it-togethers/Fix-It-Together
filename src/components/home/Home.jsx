import Dashboard from "./Dashboard"
import profile from '../../assets/issues.png'
const Home = () => {
    return (
        <div className=" w-[95%] mx-auto lg:w-[75%] lg:ml-[22%] mt-10 lg:mt-14 bg-[#fff] p-3 rounded shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 bg-[#061826] text-[#fff] p-5 rounded-md">
                <div className="flex flex-col justify-center items-start space-y-8">
                    <h1 className="text-xl  ml-4 lg:ml-0 lg:text-3xl lg:tracking-widest">Welcome to Fix It Together </h1>
                    <p className="text-base ml-4 lg:ml-0 lg:text-lg lg:tracking-wider font-sans leading-8">Let`s make our community better a place , Ever get frustrated that a problem in your town or neighborhood goes ages without being resolved? You might have road issues (potholes, dangerous areas), overgrown plants</p>
                    <button className="px-3 py-2 text-[#474E68] mt-8 rounded shadow bg-white">Get Started</button>
                </div>
                <img src={profile} alt="profile issues" />
            </div>
            <Dashboard />
        </div>
    )
}

export default Home
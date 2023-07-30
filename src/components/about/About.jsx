import { Link } from "react-router-dom"
import Duraan from '../../assets/duraan.jpg'
import avatar from '../../assets/avator.png'
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
const About = () => {
    return (
        <>
            <div className=" w-[95%] mx-auto lg:w-[75%] lg:ml-[22%] mt-10 lg:mt-14 text-[#061826] bg-white p-3 rounded shadow-sm">
                <div className="flex flex-col justify-center items-center gap-2 space-y-3">
                    <div className="w-full rounded-md p-5 bg-[#061826] text-[#fff]">
                        <div className=" p-4">
                            <div className="p-3">
                                <h1 className="text-4xl tracking-widest text-center">About Us</h1>
                            </div>
                            <span className="flex justify-center items-center space-x-4">
                                <Link to="/" className="text-xl">HOME</Link> <small>/</small> <span className="text-lg">About Us</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={Duraan} className="w-48 h-48 rounded-[100%]" alt="COE Gabi School`avatar" />
                        <div className="flex flex-col justify-center items-center space-y-4 mt-5">
                            <p>Hello I`m Duraan ALi</p>
                            <p className="w-10/12 mx-auto text-center">I`m COE Founder of Gabi School Located in a minesota united state of america this beutifull website builds of one of team in gabi school it`s all about Ever get frustrated that a problem in your town or neighborhood goes ages without being resolved? You might have road issues (potholes, dangerous areas), overgrown plants</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h1 className="text-3xl font-bold text-center">Our<span className="text-red-500">Team</span></h1>
                    <div className='flex flex-col lg:flex-row justify-center mx-auto mt-14  p-3 lg:w-[87%] text-[#000] gap-6'>

                        <div className='rounded-md hover:shadow-lg transition ease-in-out hover:border-2 p-3 space-y-3 lg:w-4/12 w-full'>
                            <img className="w-full rounded-lg" src={avatar} alt="profile team" />
                            <p className="text-xl">Miirshe</p>
                            <p className="text-base">Creative and Owner</p>
                            <span className='flex flex-row justify-start space-x-3 pb-2'>
                                <BsFacebook className='cursor-pointer duration-500  text-base ease-in text-[#000]   inline' size={20} />
                                <BsInstagram className='ml-4 cursor-pointer duration-500  text-base  ease-in text-[#000]   inline ' size={20} />
                                <BsTwitter className='ml-4 cursor-pointer duration-500  text-base  ease-in text-[#000]   inline' size={20} />
                            </span>
                        </div>

                        <div className='rounded-md hover:shadow-lg transition ease-in-out hover:border-2 p-3 space-y-3 lg:w-4/12 w-full'>
                            <img className="w-full rounded-lg" src={avatar} alt="profile team" />                            <p className="text-xl">Hafsa Ali</p>
                            <p className="text-base">Creative and Owner</p>
                            <span className='flex flex-row justify-start space-x-3 pb-2'>
                                <BsFacebook className='cursor-pointer duration-500  text-base ease-in text-[#000]  inline' size={20} />
                                <BsInstagram className='ml-4 cursor-pointer duration-500  text-base  ease-in text-[#000]   inline ' size={20} />
                                <BsTwitter className='ml-4 cursor-pointer duration-500  text-base  ease-in text-[#000]   inline' size={20} />
                            </span>
                        </div>

                        <div className='rounded-md hover:shadow-lg transition ease-in-out hover:border-2 p-3 space-y-3 lg:w-4/12 w-full'>
                            <img className="w-full rounded-lg" src={avatar} alt="profile team" />
                            <p className="text-xl">Abdiqani (Ck) </p>
                            <p className="text-base">Creative and Owner</p>
                            <span className='flex flex-row justify-start space-x-3 pb-2'>
                                <BsFacebook className='cursor-pointer duration-500  text-base ease-in text-[#000]  inline' size={20} />
                                <BsInstagram className='ml-4 cursor-pointer duration-500  text-base  ease-in text-[#000]  inline ' size={20} />
                                <BsTwitter className='ml-4 cursor-pointer duration-500  text-base  ease-in text-[#000]   inline' size={20} />
                            </span>
                        </div>

                    </div>

                    <div className='flex flex-col lg:flex-row justify-center mx-auto mt-14  p-3 lg:w-[87%] text-[#000] gap-6'>

                        <div className='rounded-md hover:shadow-lg transition ease-in-out hover:border-2 p-3 space-y-3 lg:w-4/12 w-full'>
                            <img className="w-full rounded-lg" src={avatar} alt="profile team" />
                            <p className="text-xl">Nasradin Abdikani</p>
                            <p className="text-base">Creative and Owner</p>
                            <span className='flex flex-row justify-start space-x-3 pb-2'>
                                <BsFacebook className='cursor-pointer duration-500  text-base ease-in text-[#000]   inline' size={20} />
                                <BsInstagram className='ml-4 cursor-pointer duration-500  text-base  ease-in text-[#000]   inline ' size={20} />
                                <BsTwitter className='ml-4 cursor-pointer duration-500  text-base  ease-in text-[#000]   inline' size={20} />
                            </span>
                        </div>

                        <div className='rounded-md hover:shadow-lg transition ease-in-out hover:border-2 p-3 space-y-3 lg:w-4/12 w-full'>
                            <img className="w-full rounded-lg" src={avatar} alt="profile team" />                            <p className="text-xl">Sadia Mohmoud (Sadia)</p>
                            <p className="text-base">Creative and Owner</p>
                            <span className='flex flex-row justify-start space-x-3 pb-2'>
                                <BsFacebook className='cursor-pointer duration-500  text-base ease-in text-[#000]  inline' size={20} />
                                <BsInstagram className='ml-4 cursor-pointer duration-500  text-base  ease-in text-[#000]   inline ' size={20} />
                                <BsTwitter className='ml-4 cursor-pointer duration-500  text-base  ease-in text-[#000]   inline' size={20} />
                            </span>
                        </div>

                        <div className='rounded-md hover:shadow-lg transition ease-in-out hover:border-2 p-3 space-y-3 lg:w-4/12 w-full'>
                            <img className="w-full rounded-lg" src={avatar} alt="profile team" />                            <p className="text-xl">Abdijabar farah nuur</p>
                            <p className="text-base">Creative and Owner</p>
                            <span className='flex flex-row justify-start space-x-3 pb-2'>
                                <BsFacebook className='cursor-pointer duration-500  text-base ease-in text-[#000]  inline' size={20} />
                                <BsInstagram className='ml-4 cursor-pointer duration-500  text-base  ease-in text-[#000]  inline ' size={20} />
                                <BsTwitter className='ml-4 cursor-pointer duration-500  text-base  ease-in text-[#000]   inline' size={20} />
                            </span>
                        </div>

                    </div>

                </div>

            </div>


        </>
    )
}

export default About
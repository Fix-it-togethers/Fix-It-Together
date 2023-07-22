import { Link } from "react-router-dom"
import Duraan from '../../assets/duraan.jpg'
const About = () => {
    return (
        <div className=" w-[95%] mx-auto lg:w-[75%] lg:ml-[22%] mt-10 lg:mt-14 text-[#474E68] bg-white p-3 rounded shadow-sm">
            <div className="flex flex-col justify-center items-center gap-2 space-y-3">
                <div className="w-full rounded-md p-5 bg-[#03256C] text-white">
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
        </div>
    )
}

export default About
import { Link } from "react-router-dom";
import Duraan from "../../assets/duraan.jpg";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TeamInfo } from "./TeamInfo";
const About = () => {
  return (
    <>
      <div className=" w-[95%] mx-auto  lg:w-[90%] xl:w-[80%] mt-10 text-[#032443] bg-[#F7F5F5] p-3 shadow">
        <div className="flex flex-col justify-center items-center gap-2 space-y-3">
          <div className="w-full rounded-md p-5 bg-[#032443] text-[#F7F5F5]">
            <div className=" p-4">
              <div className="p-3">
                <h1 className="text-4xl tracking-widest text-center">
                  About Us
                </h1>
              </div>
              <span className="flex justify-center items-center space-x-4">
                <Link to="/" className="text-xl">
                  HOME
                </Link>{" "}
                <small>/</small> <span className="text-lg">About Us</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={Duraan}
              className="w-48 h-48 rounded-[100%]"
              alt="COE Gabi School`avatar"
            />
            <div className="flex flex-col justify-center items-center space-y-4 mt-5">
              <p>Hello I`m Duraan ALi</p>
              <p className="w-10/12 mx-auto text-center">
                I`m COE Founder of Gabi School Located in a minesota united
                state of america this beutifull website builds of one of team in
                gabi school it`s all about Ever get frustrated that a problem in
                your town or neighborhood goes ages without being resolved? You
                might have road issues (potholes, dangerous areas), overgrown
                plants
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-center">
            Our<span className="text-[#E8401B]">Team</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto mt-14  p-3 lg:w-[87%] gap-6">
            {
                TeamInfo.map( info =>{
                    return (
                        <div key={info.id} className='w-full rounded-md relative hover:shadow-lg transition ease-in-out hover:border-2 p-3 space-y-3'>
                            <div className="w-full overflow-hidden relative rounded-lg">
                                <img className="w-full" src={info.image} alt="profile team" />
                            </div>
                            <p className="text-xl">{info.name}</p>
                            <p className="text-base">{info.description}</p>
                            <span className='flex flex-row justify-start space-x-3 pb-2'>
                              <Link to={info.facebook} target="_blank"><BsFacebook className='cursor-pointer duration-500  text-base ease-in  inline' size={20} /></Link>
                              <Link to={info.github} target="_blank"><AiFillGithub className='cursor-pointer duration-500  text-base ease-in  inline' size={20} /></Link>
                              <Link to={info.linkedin} target="_blank"><AiFillLinkedin className='cursor-pointer duration-500  text-base ease-in  inline' size={20} /></Link>
                            </span>
                        </div>
                    )
                })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

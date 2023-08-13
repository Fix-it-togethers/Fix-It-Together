import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
const Footer = () => {
  const navigate = useNavigate();
  const getdate = new Date();
  const getYear = getdate.getFullYear();
  const token = Cookies.get("token");
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    if (token) {
      setAuth(true);
    }
  }, [token]);

  const handleNotAuthlikes = () => {
    if (!auth) {
      navigate("/SignIn");
    }
  }
  const handleSubmit = (e) => {
    handleNotAuthlikes();
    e.preventDefault();
  }
  return (
    <footer className=' mx-auto lg:w-[90%] xl:w-[80%]  mt-14 bg-[#032443] text-[#F7F5F5] p-2'>
      <div className='xl:w-[99%]  lg:mx-auto px-2 py-8  flex flex-col md:flex-row md:justify-between gap-3'>
        <div className='py-2 px-1 md:ml-3 lg:ml-14'>
          <form onSubmit={handleSubmit} className='flex flex-row justify-start items-start '>
            <input className='p-3 border-collapse border-black shadow ' type='email' placeholder='example@gmail.com' />
            {
              auth &&  (
                <button type='submit' className='p-3 text-[#F7F5F5] bg-[#E8401B]  hover:text-[#E8401B] hover:bg-[#F7F5F5]  hover:shadow-lg duration-500 ease-in'>Send email</button>
              )
            }
            {
              !auth &&  (
                <button type='submit' className='p-3 text-[#F7F5F5] bg-[#E8401B]  hover:text-[#E8401B] hover:bg-[#F7F5F5]  hover:shadow-lg duration-500 ease-in'>Send email</button>
              )
            }
          </form>
            <p className='text-base w-64 space-y-3 my-3 tracking-wider leading-6'>Get E-mail updates about our latest Fix it issues and special offers.</p>
          <span>{getYear}  &copy; All rights reserved.</span>
        </div>

        <div className='p-2'>
          <ul className='flex flex-col justify-start space-y-2'>
            <Link className=' transition ease-in-out hover:text-[#E8401B]' to='/'>Home</Link>
            <Link className=' transition ease-in-out hover:text-[#E8401B]' to='/AllIssues'>Issues</Link>
            <Link className=' transition ease-in-out hover:text-[#E8401B]' to='/Contact'>Contact Us</Link>
            <Link className=' transition ease-in-out hover:text-[#E8401B]' to='/About'>About Us</Link>
            <Link className=' transition ease-in-out hover:text-[#E8401B]' to='/Dashboard/Profile'>Profile</Link>
          </ul>
        </div>

        <div className='py-2 px-1 mr-4 space-y-2 '>
          <div className='flex flex-col justify-start p-1 space-y-3  text-base'>
            <h4 className='text-3xl capitalize tracking-widest '>Fix-It-<span className='text-[#E8401B]'>Together</span></h4>
            <p className='tracking-widest'>Phone :+25261XXXXXXXX
            </p>
            <p className='tracking-widest'>Email : Fix-it-together@gmail.com</p>
          </div>
          <span className='flex flex-row justify-start space-x-3 '>
            <Link to=''>
              <BsFacebook className='ml-3 cursor-pointer   text-lg inline transition ease-in-out hover:text-[#E8401B]' size={22} />
            </Link>
            <Link to=''>
              <BsInstagram className='ml-3 cursor-pointer  text-lg   inline  transition ease-in-out hover:text-[#E8401B]' size={22} />
            </Link>
            <Link to=''>
              <AiOutlineWhatsApp className='ml-3 cursor-pointer text-lg inline transition ease-in-out hover:text-[#E8401B]' size={22} />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
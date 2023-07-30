import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { AiOutlineWhatsApp } from 'react-icons/ai';
const Footer = () => {
  const getdate = new Date();
  const getYear = getdate.getFullYear();
  return (
    <footer className=' mx-auto lg:w-[75%] lg:ml-[22%] mt-10 lg:mt-14 text-[#061826] bg-white p-3 rounded shadow-sm'>
      <div className='xl:w-[99%]  lg:mx-auto px-3 py-8 lg:ml-10 flex flex-col md:flex-row md:justify-between gap-3'>
        <div className='py-2 px-1 md:ml-3 lg:ml-14'>
          <div>
            <input className='p-3 border-collapse border-black shadow ' type='email' placeholder='example@gmail.com' />
            <button className='p-3 text-[#fff] bg-[#000]  hover:text-[#000] hover:bg-[#fff]  hover:shadow-lg duration-500 ease-in'>Send email</button>
            <p className='text-base text-[#000] w-64 space-y-3 my-3 tracking-wider leading-6'>Get E-mail updates about our latest Fix it issues and special offers.</p>
          </div>
          <span>{getYear}  &copy; All rights reserved.</span>
        </div>

        <div className='p-2'>
          <ul className='flex flex-col justify-start space-y-1'>
            <Link className='p-2' to='/'>Home</Link>
            <Link className='p-2' to='/AllIssues'>Issues</Link>
            <Link className='p-2' to='/Contact'>Contact Us</Link>
            <Link className='p-2' to='/About'>About Us</Link>
            <Link className='p-2' to='/Profile'>Profile</Link>
          </ul>
        </div>

        <div className='py-2 px-1 mr-4 space-y-2 '>
          <div className='flex flex-col justify-start p-1 space-y-3 text-[#000] text-base'>
            <h4 className='text-[#000] text-3xl capitalize tracking-widest '>Fix-It-<span className='text-[#000]'>Together</span></h4>
            <p className='tracking-widest'>Phone :+25261XXXXXXXX
            </p>
            <p className='tracking-widest'>Email : Fix-it-together@gmail.com</p>
          </div>
          <span className='flex flex-row justify-start space-x-3 '>
            <Link to=''>
              <BsFacebook className='ml-3 cursor-pointer duration-500 text-[#000] text-lg ease-in inline' size={22} />
            </Link>
            <Link to=''>
              <BsInstagram className='ml-3 cursor-pointer duration-500 text-[#000] text-lg  ease-in inline ' size={22} />
            </Link>
            <Link to=''>
              <AiOutlineWhatsApp className='ml-3 cursor-pointer duration-500 text-[#000] text-lg  ease-in inline' size={22} />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
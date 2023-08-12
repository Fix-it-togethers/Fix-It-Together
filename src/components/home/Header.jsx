import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import './style.css'
const Header = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    if (token) {
      setAuth(true);
    }
  }, [token]);
  const handleLogOut = () => {
    Cookies.remove("token");
    setAuth(false);
    navigate("/SignIn");
    window.location.reload();

  };
  const [open, setOpen] = useState(false);

  const handleNavLink = ()=>{
    setOpen(false);
  }
  const handleActiveNavLink = ({isActive}) =>{
    if(isActive){
      return{
        color : "#F7F5F5",
        backgroundColor : "#E8401B",
        borderRadius : "5px",
        padding : "12px 20px"
      }
    }
  }
  return (
    <div className="w-full relative z-40 lg:w-[90%] xl:w-[80%] mx-auto p-2 mt-2 text-[#032443] ">
      <div className=" relative flex flex-col justify-start items-start md:flex-row lg:justify-between lg:items-center gap-3 p-1">
        <div className="w-full relative">
          <h1 className="text-xl font-bold lg:text-4xl p-1 ">
            {/* <Link to></Link> */}
            Fix It <span className="text-[#E8401B]"> Together </span>
          </h1>
            {open ? (
              <AiOutlineClose
                size={30}
                className="text-xl absolute right-7 top-2 md:hidden "
                onClick={() => setOpen(!open)}
              />
            ) : (
              <AiOutlineMenu
                size={30}
                className="text-xl absolute right-7 top-2  md:hidden"
                onClick={() => setOpen(!open)}

              />
            )}
        </div>
        <ul className={ open ? ' h-screen  show flex flex-col justify-start items-start md::flex-row lg:justify-between lg:items-center p-1 gap-7 w-[100%] transition-all ease-in bg-[#F7F5F5] z-[-1]' : 'hide flex flex-col justify-start items-start md:flex-row lg:justify-between lg:items-center p-1 gap-8 w-[100%]   transition-all ease-in bg-[#F7F5F5]'}
        onClick={()=>handleNavLink()}>
          <li className="text-xl capitalize transition ease-in-out hover:text-[#E8401B]">
            <NavLink to="/" style={handleActiveNavLink}>Home</NavLink>
          </li>
          {auth && (
            <>
              <li className="text-xl capitalize transition ease-in-out hover:text-[#E8401B]">
                <NavLink to="/AddIssue" style={handleActiveNavLink}>+issues</NavLink>
              </li>
              <li className="text-xl capitalize transition ease-in-out hover:text-[#E8401B]">
                <NavLink to="/Contact" style={handleActiveNavLink}>contact</NavLink>
              </li>
              <li className="text-xl capitalize transition ease-in-out hover:text-[#E8401B]">
                <NavLink to="/About" style={handleActiveNavLink}>about</NavLink>
              </li>
            </>
          )}
          {!auth && (
            <>
              <li className="text-xl capitalize transition ease-in-out hover:text-[#E8401B]">
                <NavLink to="/About" style={handleActiveNavLink}>about</NavLink>
              </li>
            </>
          )}
            {auth && (
              <>
                <li className="text-xl list-none capitalize transition ease-in-out hover:text-[#E8401B]">
                  <NavLink to="/Dashboard" style={handleActiveNavLink}>Dashboard</NavLink>
                </li>

                <li className="text-xl list-none capitalize transition ease-in-out hover:text-[#E8401B]">
                  <NavLink onClick={() => handleLogOut()} >Logout</NavLink>
                </li>
              </>
            )}
            {!auth && (
              <>
                <li className=" text-xl transition ease-in-out hover:text-[#E8401B] list-none">
                  <NavLink to="/SignIn" style={handleActiveNavLink}>Sign In</NavLink>
                </li>
                <li className=" text-xl transition ease-in-out hover:text-[#E8401B] list-none ">
                  <NavLink to="/SignUp" style={handleActiveNavLink}>Sign Up</NavLink>
                </li>
              </>
            )}
        </ul>
      </div>
    </div>
  );
};

export default Header;

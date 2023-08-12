import profile from "../../assets/fix-it.png";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import Issues from "./Issues";
import DefineProblems from "../others/DefineProblems";
import Quetes from "../quotes/Quetes";
import ClientMap from "./ClientMap";
const Home = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    if (token) {
      setAuth(true);
    }
  }, [token]);
  const handlelikes = () => {
    if (!auth) {
      navigate("/SignIn");
    }
  };
  return (
    <>
      <div className=" w-[95%] mx-auto lg:w-[90%] xl:w-[80%] min-h-screen mt-8 text-[#032443]  p-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-2 rounded-md mt-20">
          <div className="flex flex-col justify-center items-start space-y-8">
            <h1
              className="text-2xl  ml-4 lg:ml-0 lg:text-5xl lg:tracking-widest capitalize"
              style={{ lineHeight: "1.5" }}
            >
              {" "}
              <span className="text-[#E8401B] font-semibold">
                How to fix & solve
              </span>{" "}
              problem issues
            </h1>
            <p className="text-base ml-4 lg:ml-0 lg:text-lg lg:tracking-wide leading-9">
              Let`s make our community better a place , Ever get frustrated that
              a problem in your town or neighborhood goes ages without being
              resolved? You might have road issues (potholes, dangerous areas),
              overgrown plants
            </p>
            {
              auth && (
                <button className="ml-5 md:ml-0 px-5 py-4 text-lg text-[#F7F5F5] mt-8 rounded shadow bg-[#032443] transition ease-in-out hover:bg-[#E8401B] hover:text-[#F7F5F5]">
             <Link className="ml-5 md:ml-0 px-5 py-4 text-[#F7F5F5] mt-8 rounded shadow bg-[#032443] transition ease-in-out hover:bg-[#E8401B] hover:text-[#F7F5F5]" to="/AddIssue"> Get Started</Link>
            </button>
              ) 
            }
            {
              !auth && (
                <button className="ml-5 md:ml-0 px-5 py-4 text-lg text-[#F7F5F5] mt-8 rounded shadow bg-[#032443] transition ease-in-out hover:bg-[#E8401B] hover:text-[#F7F5F5]">
             <Link className="ml-5 md:ml-0 px-5 py-4 text-[#F7F5F5] mt-8 rounded shadow bg-[#032443] transition ease-in-out hover:bg-[#E8401B] hover:text-[#F7F5F5]" to="/SignIn"> Get Started</Link>
            </button>
              ) 
            }
          </div>
          <img src={profile} alt="profile issues" />
        </div>
      </div>
      <DefineProblems />
      <Issues handlelikes={handlelikes} />
      <Quetes/>
      <ClientMap/>
    </>
  );
};

export default Home;

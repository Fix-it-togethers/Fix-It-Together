import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-[90%] mx-auto lg:w-[90%] xl:w-[80%] text-[#032443] bg-[#F7F5F5] p-2">
      <div className="w-full rounded-md p-2 md:p-5 bg-[#032443] text-[#F7F5F5]">
        <div className=" p-2">
          <div className="p-2">
            <h1 className="text-xl lg:text-4xl tracking-widest text-center">
              User Profile{" "}
            </h1>
          </div>
          <span className="flex justify-start items-center lg:justify-center lg:items-center space-x-2 md:space-x-4">
            <Link to="/" className="text-xl">
              HOME
            </Link>{" "}
            <small>/</small>{" "}
            <span className="text-base  lg:text-lg">User Profile Information </span><small>/</small>
            <Link to="/Dashboard/Profile">My Profile</Link><small>/</small>
            <Link to="/Dashboard/MyIssues">My issues</Link>
          </span>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default Dashboard;

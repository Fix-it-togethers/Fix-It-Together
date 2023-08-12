import { Link } from "react-router-dom";
import Issues from "../home/Issues";
const AllIssues = () => {
  return (
    <>
      <div className=" w-[95%] mx-auto lg:w-[90%] xl:w-[80%]  mt-10 text-[#032443 ] bg-[#F7F5F5] p-3">
        <div className="w-full rounded-md p-5 bg-[#061826] text-[#fff]">
          <div className=" p-4">
            <div className="p-3">
              <h1 className="text-4xl tracking-widest text-center">
                All Issues Post Of Each Information
              </h1>
            </div>
            <span className="flex justify-center items-center space-x-4">
              <Link to="/" className="text-xl">
                HOME
              </Link>{" "}
              <small>/</small> <span className="text-lg">All Issues</span>
            </span>
          </div>
        </div>
      </div>
      <Issues />
    </>
  );
};

export default AllIssues;

import { CiFlag1 } from "react-icons/ci";
import { CgCalendarDates } from "react-icons/cg";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import {
  BiMessageEdit,
  BiSolidLeftArrowSquare,
  BiSolidRightArrowSquare,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { useFetchIssueQuery } from "../../store/Api/FixSlice";
import { useState } from "react";
function Dashboard() {
  const { data: fetchIssue = [] } = useFetchIssueQuery();
  console.log("miirshe dhib badnidaa", fetchIssue);
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerge = 6;
  const lastIndex = currentPage * recordPerge;
  const firstIndex = lastIndex - recordPerge;
  const records = fetchIssue?.slice(firstIndex, lastIndex);
  const numberPage = Math.ceil(fetchIssue?.length / recordPerge);
  const numbers = [...Array(numberPage + 1).keys()].slice(1);
  return (
    <div className="w-full lg:ml-4 mt-10 lg:mt-14 text-[#061826]">
      <div className="mt-5">
        <h1 className="lg:text-3xl tracking-widest ml-4 lg:ml-0">
          Issues Reported
        </h1>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-3 mr-3">
          {records?.map((issue) => {
            return (
              <Link to={`/Detail/${issue.id}`} key={issue.id}>
                <div
                  className="w-[100%] mx-auto lg:mx-0 flex flex-col justify-start items-start lg:items-start transition hover:shadow-lg cursor-pointer ease-in-out p-2 shadow rounded border"
                  key={issue.id}
                >
                  <img
                    className="w-full lg:w-72 lg:h-60"
                    src={issue.image}
                    alt="photo fix issue"
                  />
                  <div className=" space-y-1 mt-2 w-full">
                    <h1 className="text-xl font-medium">
                      {issue.title.slice(0, 30) +
                        [issue.title.length >= 30 ? "..." : " "]}
                    </h1>
                    <p className="text-base w-11/12">
                      {issue.description.slice(0, 60) +
                        [
                          issue.description.length > 60
                            ? "  Read more..."
                            : " ",
                        ]}{" "}
                    </p>
                    <div className="flex flex-col justify-start items-start space-y-1 gap-1">
                      <p className="flex flex-row justify-start lg:items-center items-start">
                        <CiFlag1 className="mt-1" size={20} />{" "}
                        <span className="ml-2">{issue.location}</span>
                      </p>
                      <p className="flex flex-row justify-start lg:items-center items-start">
                        <CgCalendarDates className="mt-1" size={20} />{" "}
                        <span className="ml-2">{issue.date}</span>
                      </p>
                    </div>
                    <div className="flex flex-row justify-between items-start lg:items-center space-y-1 border-t-2 w-full p-1 ">
                      <span className="flex flex-row justify-start items-center space-x-6">
                        <AiOutlineLike size={25} />
                        <AiOutlineDislike size={25} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <nav className="mt-20">
        <ul className="flex flex-row justify-start items-center gap-4">
          <li>
            <button
              onClick={prePage}
              className="bg-[#061826] px-3 py-2 text-[#fff] rounded  shadow-lg"
            >
              <BiSolidLeftArrowSquare size={20} />
            </button>
          </li>
          {numbers.map((page, index) => {
            return (
              <li
                key={index}
                className={`${
                  currentPage === page
                    ? "bg-[#061826] rounded px-4 py-1  text-[#fff] text-lg "
                    : ""
                }`}
              >
                <button onClick={() => changeCurrentPage(page)}>{page}</button>
              </li>
            );
          })}
          <li>
            <button
              onClick={nextPage}
              className="bg-[#061826] px-3 py-2  text-[#fff] rounded shadow-lg"
            >
              <BiSolidRightArrowSquare size={20} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCurrentPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== numberPage) {
      setCurrentPage(currentPage + 1);
    }
  }
}

export default Dashboard;

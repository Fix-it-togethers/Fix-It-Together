import { CiFlag1 } from "react-icons/ci";
import { CgCalendarDates } from "react-icons/cg";
import { AiOutlineDislike, AiOutlineLike , AiOutlineComment} from "react-icons/ai";
import {
  BiSearch,
  BiSolidLeftArrowSquare,
  BiSolidRightArrowSquare,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { useFetchIssueQuery } from "../../store/Api/FixSlice";
import { useState } from "react";
import { BiShare } from "react-icons/bi";
function Issues({ handlelikes }) {
  const [InputSearch, setInputSearch] = useState('');
  const [opps , setOpps] = useState(false);
  const { data: fetchIssue = [] } = useFetchIssueQuery();
  console.log("miirshe dhib badnidaa", fetchIssue);
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerge = 15;
  const lastIndex = currentPage * recordPerge;
  const firstIndex = lastIndex - recordPerge;
  const records = fetchIssue?.slice(firstIndex, lastIndex);
  const numberPage = Math.ceil(fetchIssue?.length / recordPerge);
  const numbers = [...Array(numberPage + 1).keys()].slice(1);
  const handleInput = (e)=>{
    setInputSearch(e.target.value);
    setOpps(true);
  }
  return (
    <div className="mt-14 w-[90%] mx-auto lg:w-[90%] xl:w-[80%] text-[#032443] bg-[#F7F5F5] p-2">
      <div className="mt-2">
        <div className="mb-5 flex flex-col justify-start lg:flex-row lg:justify-between items-start gap-3">
          <h1 className="text-xl lg:text-3xl tracking-widest  lg:ml-0 p-1 relative">
            Lastest Post Issues
          </h1>
          <div className="relative w-full md:w-fit">
            <input
              className=" w-full p-2 py-2 px-10 rounded shadow border-[#032443] "
              type="text"
              onChange={(e)=>handleInput(e)}
            />{" "}
            <BiSearch
              className="text-base mt-3 inline absolute right-[12%]"
              size={20}
            />
          </div>
        </div>
        <div className="mt-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
          {records?.filter(issue=>{
            return issue.location.toLowerCase().includes(InputSearch.toLowerCase());
          }).map((issue) => {
            return (
              <div
                className="w-full mx-auto lg:mx-0 flex flex-col lg:flex-row justify-start items-start gap-2 lg:justify-start lg:items-start transition hover:shadow-lg cursor-pointer ease-in-out p-1"
                key={issue.id}
              >
                <Link className="w-full" to={`/Detail/${issue.id}`}>
                  <img
                    className="w-full lg:w-[90%] h-64 object-cover"
                    src={issue.image}
                    alt="photo fix issue"
                  />
                </Link>
                <div className=" space-y-3 lg:mt-0 mt-2 w-full">
                  <h1 className="text-base font-medium">
                    {issue.title.slice(0, 50) +
                      [issue.title.length >= 50 ? "..." : " "]}
                  </h1>
                  <p className=" text-sm w-full">
                    {issue.description.slice(0, 150) +
                      [
                        issue.description.length > 150 ? "  Read more..." : " ",
                      ]}{" "}
                  </p>
                  <div className="flex flex-col justify-start items-start space-y-1 gap-1">
                    <p className="flex flex-row justify-start lg:items-center items-start">
                      <CiFlag1 className="mt-1" size={18} />
                      <span className="ml-2 text-xs">{issue.location}</span>
                    </p>
                    <p className="flex flex-row justify-start lg:items-center items-start">
                      <CgCalendarDates className="mt-1" size={18} />
                      <span className="ml-2 text-xs">{issue.date}</span>
                    </p>
                  </div>

                  <div className="flex flex-row justify-between items-start lg:items-center space-y-1 border-t-2 w-full p-1 ">
                    <span className="flex flex-row justify-start items-center space-x-6">
                      <p>
                        <AiOutlineLike className="inline" onClick={() => handlelikes()} size={20} /> <span>{issue.upvotes > 0 ? issue.upvotes : '' }</span>
                      </p>
                      <p>
                      <AiOutlineDislike
                        onClick={() => handlelikes()}
                        size={20}
                        className="inline"
                      />
                      <span>{issue.downvotes > 0 ? issue.downvotes :'' }</span>
                      </p>
                      <small>
                      <BiShare className="inline" size={20}/>
                      </small>

                      <small>
                       <AiOutlineComment className="inline" size={20}/>
                      </small>

                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <nav className="mt-20">
        <ul className="flex flex-row justify-start items-center gap-4">
          <li>
            <button
              onClick={prePage}
              className="bg-[#032443] px-3 py-2 text-[#F7F5F5] rounded  shadow-lg"
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
                    ? "bg-[#032443] rounded px-4 py-1  text-[#F7F5F5] text-lg "
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
              className="bg-[#032443] px-3 py-2  text-[#F7F5F5] rounded shadow-lg"
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

export default Issues;

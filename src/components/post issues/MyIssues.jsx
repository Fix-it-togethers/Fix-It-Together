import { Link, useNavigate } from "react-router-dom";
import { CiFlag1 } from "react-icons/ci";
import { CgCalendarDates } from "react-icons/cg";
import { AiOutlineDislike, AiOutlineLike , AiOutlineComment} from "react-icons/ai";
import { BiShare } from 'react-icons/bi'; 
import { useFetchIssueQuery } from "../../store/Api/FixSlice";
import { useGetUsersQuery } from "../../store/Api/UserSlice";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
const MyIssues = () => {
  const { data: fetchIssue = [] } = useFetchIssueQuery();
  console.log("miirshe dhib badnidaa", fetchIssue);
  const { data: user = [] } = useGetUsersQuery();
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
      console.log("cliked me");
    }
  };
  return (
    <>
      <div className=" w-full  mt-10 text-[#032443] bg-[#F7F5F5] p-3">
        <div className="w-full lg:ml-4 mt-10 lg:mt-14">
          <div className="mt-5">
            <h1 className="lg:text-3xl tracking-widest ml-4 lg:ml-0">
              My Issues Reported
            </h1>
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-3 mr-3">
              {fetchIssue?.map((issue) => {
                {
                  if (user.id === issue.user_id) {
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
                                issue.description.length > 150
                                  ? "  Read more..."
                                  : " ",
                              ]}{" "}
                          </p>
                          <div className="flex flex-col justify-start items-start space-y-1 gap-1">
                            <p className="flex flex-row justify-start lg:items-center items-start">
                              <CiFlag1 className="mt-1" size={18} />
                              <span className="ml-2 text-xs">
                                {issue.location}
                              </span>
                            </p>
                            <p className="flex flex-row justify-start lg:items-center items-start">
                              <CgCalendarDates className="mt-1" size={18} />
                              <span className="ml-2 text-xs">{issue.date}</span>
                            </p>
                          </div>

                          <div className="flex flex-row justify-between items-start lg:items-center space-y-1 border-t-2 w-full p-1 ">
                            <span className="flex flex-row justify-start items-center space-x-6">
                              <p>
                                <AiOutlineLike
                                  className="inline"
                                  onClick={() => handlelikes()}
                                  size={20}
                                />{" "}
                                <span>
                                  {issue.upvotes > 0 ? issue.upvotes : ""}
                                </span>
                              </p>
                              <p>
                                <AiOutlineDislike
                                  onClick={() => handlelikes()}
                                  size={20}
                                  className="inline"
                                />
                                <span>
                                  {issue.downvotes > 0 ? issue.downvotes : ""}
                                </span>
                              </p>
                              <small>
                                <BiShare className="inline" size={20} />
                              </small>

                              <small>
                                <AiOutlineComment
                                  className="inline"
                                  size={20}
                                />
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyIssues;

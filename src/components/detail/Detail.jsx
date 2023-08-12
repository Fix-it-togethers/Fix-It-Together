import { Link, useParams, useNavigate } from "react-router-dom";
import {
  useAddcommentsMutation,
  useDeleteIssueMutation,
  useDownVotesMutation,
  useFetchIssueQuery,
  useGetCommentsQuery,
  useUpvotesMutation,
} from "../../store/Api/FixSlice";
import { useGetUsersQuery } from "../../store/Api/UserSlice";
// import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { RiChatDeleteFill } from "react-icons/ri";
import {
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineWhatsApp,
  AiOutlineComment,
} from "react-icons/ai";
import { CiFlag1 } from "react-icons/ci";
import { CgCalendarDates } from "react-icons/cg";

import { toast } from "react-toastify";
import Cookies from "js-cookie";
import avator from "../../assets/avator.png";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { BiShare } from "react-icons/bi";
import {
  WhatsappShareButton,
  TwitterShareButton,
  FacebookShareButton,
  TwitterIcon,
  WhatsappIcon,
  FacebookIcon,
} from "react-share";
import { Formik  , Form, Field } from "formik";
import * as Yup from "yup";
import moment from "moment/moment";
function Detail() {
  const params = useParams();
  const { data: issues = [] } = useFetchIssueQuery();
  const [deleteIssue] = useDeleteIssueMutation();
  const { data: user = [] } = useGetUsersQuery();
  const [upvotes] = useUpvotesMutation();
  const [downVotes] = useDownVotesMutation();
  const [Addcomments] = useAddcommentsMutation();
  const navigate = useNavigate();
  const [btnShare, setBtnShare] = useState(false);
  const [issue, setIssue] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    date: "",
    location: "",
    downvotes: "",
    upvotes: "",
    user_id: "",
  });
  useEffect(() => {
    const result = issues.find((issue) => {
      return issue.id === Number(params.id);
    });
    console.log(result);
    if (result) {
      setIssue({
        id: result.id,
        title: result.title,
        description: result.description,
        image: result.image,
        location: result.location,
        date: result.date,
        downvotes: result.downvotes,
        upvotes: result.upvotes,
        user_id: result.user_id,
      });
    }
  }, [issues, params.id]);
  const handleDelete = (id) => {
    deleteIssue(id)
      .unwrap()
      .then(() => {
        toast.success("Succesfull Deleted");
        navigate("/");
      });
  };
  const [likes, setLikes] = useState(false);
  const [Unlikes, setUnLikes] = useState(false);
  const [countLike, setCountLike] = useState(issue.upvotes);
  const [countDesLike, setCountDesLike] = useState(issue.upvotes);
  // handle like post issues
  const handleLike = () => {
    if (!likes) {
      setLikes(true);
      setCountLike(countLike + 1);
      upvotes({
        id: Number(params.id),
        upvote: countLike,
      });
    } else {
      setLikes(false);
      setCountLike(countLike - 1);
      upvotes({
        id: Number(params.id),
        upvote: countLike,
      });
    }
  };
  // handle dislike post issues
  const handleDisLike = () => {
    if (!Unlikes) {
      setUnLikes(true);
      setCountDesLike(countDesLike + 1);
      downVotes({
        id: Number(params.id),
        downvote: countDesLike,
      });
    } else {
      setUnLikes(false);
      setCountDesLike(countDesLike - 1);
      downVotes({
        id: Number(params.id),
        downvote: countDesLike,
      });
    }
  };
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
      console.log("cliked me");
    }
  };
  console.log(likes);
  const dates = moment().format('MMMM Do YYYY, h:mm:ss a')
  console.log("hi dates",dates)
  const initialValues = {
    comment:'',
    date : dates
  }
  const validationSchema = Yup.object({
    comment : Yup.string("make sure you have a comments of this post "),
  })
  const handleComment = (values,{ resetForm }) => {
    handleNotAuthlikes();
    console.log("duraan",values);
    Addcomments({
      id: Number(params.id),
      data:values
    });
    resetForm();
  };

  const { data : commentInfo = []} = useGetCommentsQuery(Number(params.id));
  return (
    <div className=" w-[95%] mx-auto lg:w-[90%] xl:w-[80%]  mt-10 text-[#032443] bg-[#F7F5F5] p-3">
      <div className="w-full rounded-md p-5 bg-[#032443] text-[#F7F5F5]">
        <div className=" p-4">
          <div className="p-3">
            <h1 className="text-xl lg:text-4xl tracking-widest text-center">
              Detail Post Issue
            </h1>
          </div>
          <span className="flex justify-center items-center space-x-4">
            <Link to="/" className="text-xl">
              HOME
            </Link>{" "}
            <small>/</small> <span className="text-lg">Detail</span>
          </span>
        </div>
      </div>
      <div className="w-full  flex flex-col lg:flex-row justify-start items-start gap-3">
        <div
          className="w-full mt-4 mx-auto lg:mx-0 flex flex-col justify-start items-start lg:items-start  cursor-pointer  p-3 lg:gap-4"
          key={issue.id}
        >
          <img
            className="w-full lg:h-96 object-cover"
            src={issue.image}
            alt="photo fix issue"
            style={{ backgroundPosition: "center" }}
          />
          <div className=" space-y-2 mt-3 w-full">
            <h1 className="text-xl font-semibold">{issue.title}</h1>
            <p className="text-base w-11/12 text-justify">{issue.description} </p>
            <div className="flex flex-col justify-start items-start space-y-1 gap-3">
              <p className="flex flex-row justify-start lg:items-center items-start">
                <CiFlag1 className="mt-2" size={20} />{" "}
                <span className="ml-2">{issue.location}</span>
              </p>
              <p className="flex flex-row justify-start lg:items-center items-start ">
                <CgCalendarDates className="mt-1" size={20} />{" "}
                <span className="ml-2">{issue.date}</span>
              </p>
            </div>
            <div className="flex flex-row justify-between items-start lg:items-center  mt-4 space-y-2 border-t-2 w-full p-1 ">
              <span className="flex flex-row justify-start items-center space-x-6">
                {auth && (
                  <>
                    <AiOutlineLike
                      className={
                        likes ? "inline text-gray-500" : "inline text-gray-500"
                      }
                      size={25}
                      onClick={() => handleLike()}
                    />
                    {issue.upvotes > 0 ? issue.upvotes : ""}
                    <AiOutlineDislike
                      className={
                        Unlikes
                          ? "inline text-gray-500"
                          : "inline text-gray-500"
                      }
                      size={25}
                      onClick={() => handleDisLike()}
                    />
                    {issue.downvotes > 0 ? issue.downvotes : ""}
                    <small className=" relative">
                      <BiShare
                        className="inline"
                        size={20}
                        onClick={() => setBtnShare(!btnShare)}
                      />
                      <span className="flex flex-row justify-start items-center gap-4 z-20 absolute top-10">
                        {btnShare ? (
                          <>
                            <FacebookShareButton
                              url="https://fix-it-together.vercel.app/"
                              hashtag="#Fix-It-Together website post issues"
                              className="inline"
                            >
                              <FacebookIcon
                                className="text-xl rounded-lg"
                                size={23}
                              />
                            </FacebookShareButton>
                            <TwitterShareButton
                              url="https://fix-it-together.vercel.app/"
                              hashtag="#Fix-It-Together website post issues"
                              title={
                                issue.title.slice(0, 100) +
                                [issue.title.length > 30 ? "." : " "]
                              }
                              className="inline"
                            >
                              <TwitterIcon
                                className="text-xl rounded-lg"
                                size={23}
                              />
                            </TwitterShareButton>
                            <WhatsappShareButton
                              url="https://fix-it-together.vercel.app/"
                              title={
                                issue.title.slice(0, 100) +
                                [issue.title.length > 30 ? "." : " "]
                              }
                              className="inline"
                            >
                              <WhatsappIcon
                                className="text-xl rounded-lg"
                                size={23}
                              />
                            </WhatsappShareButton>
                          </>
                        ) : (
                          ""
                        )}
                      </span>
                    </small>

                    <small>
                      <AiOutlineComment className="inline" size={20} />
                    </small>
                  </>
                )}
                {!auth && (
                  <>
                    <AiOutlineLike
                      className={
                        likes ? "inline text-gray-500" : "inline text-gray-500"
                      }
                      size={25}
                      onClick={() => handleNotAuthlikes()}
                    />
                    {issue.upvotes > 0 ? issue.upvotes : ""}
                    <AiOutlineDislike
                      className={
                        Unlikes
                          ? "inline text-gray-500"
                          : "inline text-gray-500"
                      }
                      size={25}
                      onClick={() => handleNotAuthlikes()}
                    />
                    {issue.downvotes > 0 ? issue.downvotes : ""}
                    <small>
                      <BiShare className="inline" size={20} />
                    </small>

                    <small>
                      <AiOutlineComment className="inline" size={20} />
                    </small>
                  </>
                )}
              </span>
              {user.id === issue.user_id && (
                <span className="flex flex-row justify-start items-center space-x-1">
                  <Link to={`/UpdateIssue/${issue.id}`}>
                    <BiSolidEdit size={20} className="inline" />
                  </Link>
                  <RiChatDeleteFill
                    size={20}
                    onClick={() => handleDelete(issue.id)}
                  />
                </span>
              )}
            </div>
           {
            auth && (
              <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleComment}>
                <Form
                  
                  className="mt-16 flex flex-row justify-start items-center gap-2"
                >
                  <Field
                    className="w-[85%] px-4 py-[10px]  border-b-[#032443] outline-none border-b-2"
                    type="text"
                    name="comment"
                    id="comment"
                    placeholder="Add comment..."
                  />
                  <button
                    type="submit"
                    className="inline px-4 py-[10px]  rounded   bg-[#032443] text-[#F7F5F5] transition ease-in-out hover:text-[#F7F5F5] hover:bg-[#E8401B]"
                  >
                    Post
                  </button>
                </Form>
              </Formik>
            )
           }
           {
            !auth && (
              <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleComment}>
                <Form
                  
                  className="mt-16 flex flex-row justify-start items-center gap-2"
                >
                  <Field
                    className="w-[85%] px-4 py-[10px]  border-b-[#032443] outline-none border-b-2"
                    type="text"
                    name="comment"
                    id="comment"
                    placeholder="Add comment..."
                  />
                  <button
                    type="submit"
                    className="inline px-4 py-[10px]  rounded   bg-[#032443] text-[#F7F5F5] transition ease-in-out hover:text-[#F7F5F5] hover:bg-[#E8401B]"
                  >
                    Post
                  </button>
                </Form>
              </Formik>
            )
           }
            <div className="w-full flex flex-col justify-start items-start gap-3 p-1 space-y-2">
              {
                commentInfo.map(comments => {
                  return(
                    <div key={comments.id} className="w-full p-5 bg-[#f7f5f5] shadow rounded-sm space-y-4">
                    <p className=" text-xl font-mono font-semibold">
                      {comments.date}
                      </p>
                    <p className="text-base">
                      {comments.comment}
                    </p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="relative lg:w-[37%] mt-7 flex-col justify-center items-center gap-3 p-2 border">
          <div className="flex flex-col justify-center items-center">
            <img className="w-40 rounded" src={avator} alt="user Profile" />
          </div>
          <div className=" space-y-5 p-2 text-center">
            <p>Miirshe</p>
            <p>Researcher</p>
            <p>
              I'm Liam, last year I decided to quit my job and travel the world.
              You can follow my journey on this blog!
            </p>
            <p>Follow me</p>
            <span className="flex flex-row justify-center items-center space-x-3  ">
              <Link to="">
                <BsFacebook
                  className="ml-3 cursor-pointer text-center  text-lg inline transition ease-in-out hover:text-[#E8401B]"
                  size={22}
                />
              </Link>
              <Link to="">
                <BsInstagram
                  className="ml-3 cursor-pointer text-center   text-lg   inline  transition ease-in-out hover:text-[#E8401B]"
                  size={22}
                />
              </Link>
              <Link to="">
                <AiOutlineWhatsApp
                  className="ml-3 cursor-pointer text-center  text-lg inline transition ease-in-out hover:text-[#E8401B]"
                  size={22}
                />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

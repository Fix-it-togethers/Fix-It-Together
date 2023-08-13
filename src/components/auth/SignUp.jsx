import { ErrorMessage, Form, Formik, Field } from "formik";
import { AiOutlineCheck } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useSignUpMutation } from "../../store/Api/AuthSlice";
import { toast } from "react-toastify";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
const SignUp = () => {
  const errors = {};
  const [signUp] = useSignUpMutation();
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const ValiationShema = Yup.object({
    first_name: Yup.string().required("Please enter your first name"),
    last_name: Yup.string().required("Please enter your last name"),
    email: Yup.string().required("Please enter your email"),
    password: Yup.string()
      .required("Please enter your password")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires a uppercase letter")
      .min(8,"Password must be at least 8 or above charecters")
  });
  const handleSubmit = (values) => {
    if (!values.email) {
      errors.email = "Email is required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email = "Not a valid email"
    } else {
      errors.email = null
    }
    signUp({
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
    })
      .unwrap()
      .then(() => {
        toast.success("Successfully");
        navigate("../SignIn");
      })
      .catch((error) => {
        toast.error("user all ready exists ", error);
      });
  };

  return (
    <div className=" w-[95%] mx-auto lg:w-[90%] xl:w-[80%]  mt-10 text-[#032443] bg-[#F7F5F5] p-3 shadow">
      <div className="mt-10 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 p-4 space-y-5 lg:space-y-2">
        <div className="h-[28rem] bg-[#032443] text-[#F7F5F5] rounded flex flex-col justify-center items-center space-y-3 p-8 lg:p-3">
          <h1 className="text-xl font-bold md:text-4xl lg:tracking-wider">
            Better Community
          </h1>
          <div className=" space-y-3">
            <p className="text-base flex flex-row justify-start items-baseline space-y-2 space-x-3">
              <AiOutlineCheck size={18} /> <span>Help your community</span>
            </p>
            <p className="text-base flex flex-row justify-start items-baseline space-y-2 space-x-3">
              <AiOutlineCheck size={18} />{" "}
              <span>Make the world better place</span>
            </p>
            <p className="text-base flex flex-row justify-start items-baseline space-y-2 space-x-3">
              <AiOutlineCheck size={18} /> <span>Make your Community save</span>
            </p>
          </div>
        </div>
        <div className=" mt-20 lg:mt-0">
          <div className="flex flex-row justify-end items-center mr-3 lg:mr-20 space-x-5">
            <h1>Not a member yet ? </h1>
            <button>
              <Link to="/SignIn">Sign In </Link>
            </button>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={ValiationShema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col lg:justify-center lg:items-start lg:space-x-5  space-y-5">
              <p className="lg:w-[80%] text-4xl lg:ml-5 text-start">Sign Up </p>
              <Field
                className="p-3 border-2 lg:w-[80%]"
                type="text"
                placeholder="Enter Username "
                name="first_name"
              />
              <ErrorMessage
                component="div"
                name="first_name"
                className="text-red-500"
              />
              <Field
                className="p-3 border-2 lg:w-[80%]"
                type="text"
                placeholder="Enter Full name "
                name="last_name"
              />
              <ErrorMessage
                component="div"
                name="last_name"
                className="text-red-500"
              />
              <Field
                className="p-3 border-2 lg:w-[80%]"
                type="email"
                placeholder="Enter Email "
                name="email"
              />
              <ErrorMessage
                component="div"
                name="email"
                className="text-red-500"
              />
              <div className=" w-full relative">
                <Field
                  className="w-full p-3 border-2 lg:w-[80%]"
                  type={type}
                  placeholder="Enter Password "
                  name="password"
                />
                {type === "password" ? (
                  <span
                    className=" absolute top-[1rem] z-10 right-8 lg:right-32"
                    onClick={() => setType("text")}
                  >
                    {" "}
                    <FiEyeOff />{" "}
                  </span>
                ) : (
                  <span
                    className=" absolute top-[1rem] z-10 right-10 lg:right-32"
                    onClick={() => setType("password")}
                  >
                    {" "}
                    <FiEye />{" "}
                  </span>
                )}
                <ErrorMessage
                  component="div"
                  name="password"
                  className="text-red-500"
                />
              </div>
              <button
                type="submit"
                className="p-3 border-2 lg:w-[80%] bg-[#032443] text-[#F7F5F5] transition ease-in-out hover:text-[#F7F5F5] hover:bg-[#E8401B]"
              >
                Signup
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import { ErrorMessage, Form, Formik, Field } from 'formik'
import { AiOutlineCheck } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { useSignInMutation } from '../../store/Api/AuthSlice';
import { toast } from 'react-toastify';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import { useState } from 'react';

const SignIn = () => {
    const [type, setType] = useState("password");
    const [signIn] = useSignInMutation();
    const navigate = useNavigate();
    const initialValues = {
        email: '',
        password: ''
    }
    const ValiationShema = Yup.object({
        email: Yup.string().required("Please enter your email"),
        password: Yup.string().required("Please enter your password")
    })
    const handleLogin = (values) => {
        signIn({
            email: values.email,
            password: values.password
        }).unwrap().then(() => {
            toast.success("successfully Login")
            navigate('/')
            
        }).catch((error) => {
            toast.error('Invalid email or password ', error.message)
        })
    }
    return (
        <div className=" w-[95%]  mx-auto lg:w-[90%] xl:w-[80%] mt-10 text-[#032443] bg-[#F7F5F5] p-3 shadow">
            <div className='lg:h-[29rem] mt-10 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 p-4 space-y-5 lg:space-y-2'>
                <div className='bg-[#032443]  text-[#F7F5F5] rounded flex flex-col lg:justify-center lg:items-center space-y-3 p-8 lg:p-3'>
                    <h1 className='text-xl font-bold md:text-4xl lg:tracking-wider'>Better Community</h1>
                    <div className=' space-y-3'>
                        <p className='text-base flex flex-row justify-start items-baseline space-y-2 space-x-3'><AiOutlineCheck size={18} /> <span>Help your community</span></p>
                        <p className='text-base flex flex-row justify-start items-baseline space-y-2 space-x-3'><AiOutlineCheck size={18} /> <span>Make the world better place</span></p>
                        <p className='text-base flex flex-row justify-start items-baseline space-y-2 space-x-3'><AiOutlineCheck size={18} /> <span>Make your Community save</span></p>
                    </div>
                </div>
                <div className=' mt-20 lg:mt-0  text-[#061826 ]'>
                    <div className='flex flex-row justify-end items-center mr-3 lg:mr-20 space-x-5'>
                        <h1>Not a member yet ? </h1>
                        <button><Link to='/SignUp'>Sign Up </Link></button>
                    </div>
                    <Formik initialValues={initialValues}
                        validationSchema={ValiationShema}
                        onSubmit={handleLogin}>
                        <Form className='text-[#061826 ] relative p-3  mt-5 flex flex-col lg:justify-center lg:items-start lg:space-x-5  space-y-7'>
                            <p className='lg:w-[80%] text-4xl lg:ml-5 text-start'>Login</p>
                            <Field className='p-3 border-2 lg:w-[80%] outline-none rounded-md ' type="email" placeholder='Enter Email ' name='email' />
                            <ErrorMessage component="div" name='email' className='text-red-500'></ErrorMessage>
                            <div className=' w-full relative'>
                                <Field className='w-full p-3 border-2 lg:w-[80%]' type={type} placeholder='Enter Password ' name='password' />
                                {
                                    type === 'password' ? <span className=' absolute top-[1rem] z-10 right-8 lg:right-28' onClick={() => setType("text")}> <FiEyeOff /> </span> : <span className=' absolute top-[1rem] z-10 right-10 lg:right-28' onClick={() => setType("password")}> <FiEye /> </span>
                                }
                                <ErrorMessage component="div" name='password' className='text-red-500' />
                            </div>
                            <button className='p-3 border-2 lg:w-[80%] bg-[#032443] text-[#F7F5F5] transition ease-in-out hover:text-[#F7F5F5] hover:bg-[#E8401B] rounded-md' type='submit'>Login</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default SignIn
import { ErrorMessage, Form, Formik , Field } from 'formik'
import { AiOutlineCheck } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { useSignInMutation } from '../../store/Api/AuthSlice';
import { toast } from 'react-toastify';
const SignIn = () => {
    const [ signIn ] = useSignInMutation();
    const navigate = useNavigate();
    const initialValues = {
        email: '',
        password: ''
    }
    const ValiationShema = Yup.object({
        email: Yup.string().required("Please enter your email"),
        password: Yup.string().required("Please enter your password")
    })
    const handleLogin = (values)=>{
        signIn({
            email : values.email,
            password : values.password
        }).unwrap().then(()=>{
            navigate('/')
        }).catch((error)=>{
            toast.error('Invalid email or password ',error.message)
        })
    }
    return (
        <div className=" w-[95%] mx-auto lg:w-[75%] lg:ml-[22%] mt-10 lg:mt-14 text-[#061826] bg-[#fff] p-3 rounded shadow-sm">
            <div className='lg:h-[29rem] bg-white mt-10 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 p-4 space-y-5 lg:space-y-2'>
                <div className='bg-[#061826] text-[#fff] rounded flex flex-col lg:justify-center lg:items-center space-y-3 p-8 lg:p-3'>
                    <h1 className='text-3xl font-bold lg:text-4xl lg:tracking-wider'>Better Community</h1>
                    <div className=' space-y-3'>
                        <p className='text-base flex flex-row justify-start items-baseline space-y-2 space-x-3'><AiOutlineCheck size={18} /> <span>Help your community</span></p>
                        <p className='text-base flex flex-row justify-start items-baseline space-y-2 space-x-3'><AiOutlineCheck size={18} /> <span>Make the world better place</span></p>
                        <p className='text-base flex flex-row justify-start items-baseline space-y-2 space-x-3'><AiOutlineCheck size={18} /> <span>Make your Community save</span></p>
                    </div>
                </div>
                <div className=' mt-20 lg:mt-0  text-[#061826 ]'>
                    <div className='flex flex-row justify-end items-center mr-3 lg:mr-20 space-x-5'>
                        <h1>Not a member yet ? </h1>
                        <button><Link to='/SignUp/1'>Sign Up </Link></button>
                    </div>
                    <Formik initialValues={initialValues}
                        validationSchema={ValiationShema}
                        onSubmit={handleLogin}>
                        <Form className='text-[#061826 ] mt-5 flex flex-col lg:justify-center lg:items-start lg:space-x-5  space-y-7'>
                            <p className='lg:w-[80%] text-4xl lg:ml-5 text-start'>Login</p>
                            <Field className='p-3 border-2 lg:w-[80%] outline-none rounded-md ' type="email" placeholder='Enter Email ' name='email' />
                            <ErrorMessage component="div" name='email' className='text-red-500'></ErrorMessage>
                            <Field className='p-3 border-2 lg:w-[80%] outline-none rounded-md ' type="password" placeholder='Enter Password ' name='password' />
                            <ErrorMessage component="div" name='password' className='text-red-500'></ErrorMessage>
                            <button className='p-3 border-2 lg:w-[80%] bg-[#061826] text-[#fff] outline-none rounded-md' type='submit'>Login</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default SignIn
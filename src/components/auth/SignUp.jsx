<<<<<<< HEAD
import { ErrorMessage, Form, Formik , Field} from 'formik'
=======
import React from 'react';
import { ErrorMessage, Form, Formik,Field } from 'formik'
>>>>>>> 1bbbe2481b7f3235362e108908325ff2e774c8fb
import { AiOutlineCheck } from 'react-icons/ai'
import { Link,useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { useSignUpMutation } from '../../store/Api/AuthSlice';
import  Swal  from 'sweetalert2'
const SignUp = () => {
    const [signUp,{errors={}}]=useSignUpMutation();
    const navigate = useNavigate();
  
    const initialValues = {
        first_name:'',
        last_name:'',
        email:'',
        password:''
    }
   
    const ValiationShema = Yup.object({
        first_name:Yup.string().required("Please enter your first name"),
        last_name:Yup.string().required("Please enter your last name"),
        email:Yup.string().required("Please enter your email"),
        password:Yup.string().required("Please enter your password")
    })
    const handleSubmit=(values)=>{
        signUp({
            first_name:values.first_name,
            last_name:values.last_name,
            email:values.email,
            password:values.password,
        }).unwrap().then(()=>{
            navigate("../SignIn");
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Sorry...',
                text: error.data.error,
              })
         
          });
    }
 
  
    return (
        <div className="bg-white">
            <div className='bg-white mt-10 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 p-4 space-y-5 lg:space-y-2'>
                <div className=' lg:h-screen bg-[#474E68] text-white rounded flex flex-col lg:justify-center lg:items-center space-y-3 p-8 lg:p-3'>
                    <h1 className='text-3xl font-bold lg:text-4xl lg:tracking-wider'>Better Community</h1>
                    <div className=' space-y-3'>
                        <p className='text-base flex flex-row justify-start items-baseline space-y-2 space-x-3'><AiOutlineCheck size={18} /> <span>Help your community</span></p>
                        <p className='text-base flex flex-row justify-start items-baseline space-y-2 space-x-3'><AiOutlineCheck size={18} /> <span>Make the world better place</span></p>
                        <p className='text-base flex flex-row justify-start items-baseline space-y-2 space-x-3'><AiOutlineCheck size={18} /> <span>Make your Community save</span></p>
                    </div>
                </div>
                <div className=' mt-20 lg:mt-0'>
                    <div className='flex flex-row justify-end items-center mr-3 lg:mr-20 space-x-5'>
                        <h1>Not a member yet ? </h1>
                        <button><Link to='/SignIn'>Sign In </Link></button>
                    </div>
                    <Formik initialValues={initialValues}
<<<<<<< HEAD
                        validationSchema={ValiationShema}>
                        <Form className='lg:h-screen text-[#474E68] flex flex-col lg:justify-center lg:items-start lg:space-x-5  space-y-5'>
                            <p className='lg:w-[80%] text-4xl lg:ml-5 text-start'>Sign Up </p>
                            <Field className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter First name ' name='first_name' />
                            <ErrorMessage component="div" name='first_name' className='text-red-500'></ErrorMessage>
                            <Field className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter First name ' name='last_name' />
                            <ErrorMessage component="div" name='last_name' className='text-red-500'></ErrorMessage>
                            <Field className='p-3 border-2 lg:w-[80%]' type="email" placeholder='Enter Email ' name='email' />
                            <ErrorMessage component="div" name='email' className='text-red-500'></ErrorMessage>
                            <Field className='p-3 border-2 lg:w-[80%]' type="password" placeholder='Enter Password ' name='password' />
                            <ErrorMessage component="div" name='password' className='text-red-500'></ErrorMessage>
                            <button className='p-3 border-2 lg:w-[80%] bg-[#474E68] text-white'>Login</button>
=======
                        validationSchema={ValiationShema}
                        onSubmit={handleSubmit}>
                        <Form className='lg:h-screen text-[#474E68] flex flex-col lg:justify-center lg:items-center lg:space-x-5  space-y-5'>
                            <p className='lg:w-[80%] text-4xl lg:ml-5 text-start'>Sign Up </p>
                                                        <ErrorMessage component="div" name='first_name' className='text-red-500'/>

                            <Field className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter First name ' name='first_name' />
                            <ErrorMessage component="div" name='first_name' className='text-red-500'/>
                            <Field className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter last_name ' name='last_name' />
                            <ErrorMessage component="div" name='last_name' className='text-red-500'/>
                            <Field className='p-3 border-2 lg:w-[80%]' type="email" placeholder='Enter Email ' name='email' />
                            <ErrorMessage component="div" name='email' className='text-red-500'/>
                            <Field className='p-3 border-2 lg:w-[80%]' type="password" placeholder='Enter Password ' name='password' />
                            <ErrorMessage component="div" name='password' className='text-red-500'/>
                            <button type="submit" className='p-3 border-2 lg:w-[80%] bg-[#474E68] text-white'>Login</button>
>>>>>>> 1bbbe2481b7f3235362e108908325ff2e774c8fb
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default SignUp
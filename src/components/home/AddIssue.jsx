import { ErrorMessage, Form, Formik } from 'formik'
import { AiOutlineCheck } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import PhotoThink from '../../assets/think.png'
const AddIssue = () => {
    const initialValues = {
        title: '',
        description: '',
        date: '',
        image: '',
        location : ''
    }
    const ValiationShema = Yup.object({
        title: Yup.string().required("Please enter your first title"),
        description: Yup.string().required("Please enter your description"),
        date: Yup.string().required("Please enter your image url"),
        image: Yup.string().required("Please enter your location")
    })
    return (
        <div className=" w-[90%] mx-auto lg:w-[75%] lg:ml-[22%] mt-10 lg:mt-14 text-[#474E68]">
            <h1 className='lg:text-3xl tracking-widest'>Add Issues</h1>
            <div className='mt-5 grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <div>
                    <img className='mt-[-30px]' src={PhotoThink} alt="creative thinking" />
                </div>
                <Formik initialValues={initialValues}
                    validationSchema={ValiationShema}>
                    <Form className='text-[#474E68] flex flex-col lg:justify-start lg:items-start space-y-5'>
                        <input className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter title ' name='title' />
                        <ErrorMessage component="div" name='title' className='text-red-500'></ErrorMessage>
                        <input className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter description ' name='description' />
                        <ErrorMessage component="div" name='description' className='text-red-500'></ErrorMessage>
                        <input className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter date' name='date' />
                        <ErrorMessage component="div" name='date' className='text-red-500'></ErrorMessage>
                        <input className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter image Url ' name='image' />
                        <ErrorMessage component="div" name='image' className='text-red-500'></ErrorMessage>
                        <input className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter location ' name='location' />
                        <ErrorMessage component="div" name='location' className='text-red-500'></ErrorMessage>
                        <button className='p-3 border-2 lg:w-[80%] bg-[#474E68] text-white'>Login</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default AddIssue
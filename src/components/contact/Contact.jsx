import { ErrorMessage, Field, Form, Formik } from "formik"
import { Link } from "react-router-dom";
import * as Yup from "yup";
const Contact = () => {
    const initialValues = {
        first_name: '',
        email: '',
        subject: '',
        message: ''
    }
    const ValiationShema = Yup.object({
        first_name: Yup.string().required("Please enter your first name"),
        email: Yup.string().required("Please enter your email"),
        subject: Yup.string().required("Please enter your Subject"),
        message: Yup.string().required("Please enter your message")
    })
    const handleSubmit = (values) => {
        console.log(values)
    }
    return (
        <div className=" w-[95%] mx-auto lg:w-[75%] lg:ml-[22%] mt-10 lg:mt-14 text-[#474E68] bg-white p-3 rounded shadow-sm">
            <div className="flex flex-col justify-start items-start gap-2 space-y-3">
                <div className="w-full rounded-md p-5 bg-[#03256C] text-white">
                    <div className=" p-4">
                        <div className="p-3">
                            <h1 className="text-4xl tracking-widest text-center">Contact Information</h1>
                        </div>
                        <span className="flex justify-center items-center space-x-4">
                            <Link to="/" className="text-xl">HOME</Link> <small>/</small> <span className="text-lg">Contact Us</span>
                        </span>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-start items-center lg:justify-between lg:items-center p-3 gap-2 text-[#03256C]">
                    <p className="text-base tracking-widest px-3 py-10 cursor-pointer border rounded hover:shadow transition-shadow ease-in-out lg:text-xl w-full lg:w-fit">Address : mogadishu-somalia</p>
                    <p className="text-base tracking-widest px-3 py-10 cursor-pointer border rounded hover:shadow transition-shadow ease-in-out lg:text-xl w-full lg:w-fit">Email :info@gmail.com</p>
                    <p className="text-base tracking-widest px-3 py-10 cursor-pointer border rounded hover:shadow transition-shadow ease-in-out lg:text-xl w-full lg:w-fit">Phone :+25261XXXXXXXXX</p>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-3  p-3">
                    <iframe className="w-full h-[26rem]" src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"></iframe>
                    <Formik initialValues={initialValues}
                        validationSchema={ValiationShema}
                        onSubmit={handleSubmit}>
                        <Form className='w-full p-3 shadow  text-[#03256C] flex flex-col lg:justify-center lg:items-center lg:space-x-5  space-y-5'>
                            <p className='lg:w-[80%] text-4xl lg:ml-5 text-start'>Contact Us </p>
                            <Field className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter First name ' name='first_name' />
                            <ErrorMessage component="div" name='first_name' className='text-red-500' />
                            <Field className='p-3 border-2 lg:w-[80%]' type="email" placeholder='Enter Email ' name='email' />
                            <ErrorMessage component="div" name='email' className='text-red-500' />
                            <Field className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter subject ' name='subject' />
                            <ErrorMessage component="div" name='subject' className='text-red-500' />
                            <Field className='p-3 border-2 lg:w-[80%]' type="textArea" placeholder='Enter Message ' name='message' />
                            <ErrorMessage component="div" name='message' className='text-red-500' />
                            <button type="submit" className='p-3 border-2 lg:w-[80%] bg-[#03256C] text-white'>Submit</button>
                        </Form>
                    </Formik>
                </div>

            </div>
        </div>
    )
}

export default Contact
import { ErrorMessage, Form, Formik, Field } from 'formik'
import * as Yup from "yup";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFetchIssueQuery,  useUpdateIssueMutation } from '../../store/Api/FixSlice'
import { useEffect, useState } from 'react';
import PhotoThink from '../../assets/think.png'

const UpdateIssue = () => {

    const params = useParams();
    const { data: issues = [] } = useFetchIssueQuery();
    //console.log(issues)
    const [updateIssue] = useUpdateIssueMutation();
    const navigate = useNavigate();
    console.log(updateIssue)
    const [issue , setIssue] = useState({
        id:'',
        title:'',
        description: '',
        image:'',
        date: '',
        location:'',
        downvotes: '',
        upvotes: ''
    });

    useEffect(() => {
        const issue = issues.find((issue) => issue.id === Number(params.id));
        if (issue) {
            setIssue({
                title: issue.title,
                description: issue.description,
                date: issue.date,
                image: issue.image,
                location: issue.location,
          });
        }
      }, [issues, params.id]);

    const initialValues = {
        title: issue.title,
        description: issue.description ,
        date: issue.date,
        image: issue.image,
        location: issue.location
    }
    
    const ValiationShema = Yup.object({
        title: Yup.string().required("Please enter your first title"),
        description: Yup.string().required("Please enter your description"),
        date: Yup.string().required("Please enter the date"),
        image: Yup.string().required("Please enter your Image"),
        location: Yup.string().required("Please enter your location")
    })

    const handlesubmit = (values) => {
        updateIssue({
            id: Number(params.id),
            updatedIssue: values,
          })
          .then (
            navigate ('/')
          )

    }

    return (
        <div className=" w-[90%] mx-auto bg-white shadow rounded p-3 lg:w-[75%] lg:ml-[22%] mt-10 lg:mt-14 text-[#474E68]">
            <div className='flex flex-col justify-start items-start gap-3 space-y-3'>
                <div className="w-full rounded-md p-5 bg-[#03256C] text-white">
                    <div className=" p-4">
                        <div className="p-3">
                            <h1 className="text-4xl tracking-widest text-center">Update Issues of Information</h1>
                        </div>
                        <span className="flex justify-center items-center space-x-4">
                            <Link to="/" className="text-xl">HOME</Link> <small>/</small> <span className="text-lg">Add Issues</span>
                        </span>
                    </div>
                </div>
                <h1 className='lg:text-3xl tracking-widest text-[#03256C]'>Update Issue</h1>
                <div className='mt-5 grid grid-cols-1 lg:grid-cols-2 gap-3'>
                    <div>
                        <img className='mt-[-30px]' src={PhotoThink} alt="creative thinking" />
                    </div>
                    <Formik 
                        enableReinitialize
                        initialValues={initialValues }
                        validationSchema={ValiationShema}
                        onSubmit={handlesubmit}
                        >
                        <Form className='text-[#03256C] flex flex-col lg:justify-start lg:items-start space-y-5'>
                            <Field className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter title ' name='title' />
                            <ErrorMessage component="div" name='title' className='text-red-500'></ErrorMessage>
                            <Field className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter description ' name='description' />
                            <ErrorMessage component="div" name='description' className='text-red-500'></ErrorMessage>
                            <Field className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter date' name='date' />
                            <ErrorMessage component="div" name='date' className='text-red-500'></ErrorMessage>
                            <Field className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter image Url ' name='image' />
                            <ErrorMessage component="div" name='image' className='text-red-500'></ErrorMessage>
                            <Field className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter location' name='location' />
                            <ErrorMessage component="div" name='location' className='text-red-500'></ErrorMessage>
                            <button type="submit" className='p-3 border-2 lg:w-[80%] bg-[#03256C] text-white'>Update Issue</button>
                        </Form>
                    </Formik>
                </div>
            </div>

        </div>
    )
}

export default UpdateIssue
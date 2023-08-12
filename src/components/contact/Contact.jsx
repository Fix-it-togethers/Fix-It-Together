import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_rvvy0zr','template_h2b84lt', e.target,'BOkCi15o_1Ynsz9L-')
            .then((result) => {
                console.log(result.text);
                toast.success("Successfully sended email message")
            }, (error) => {
                console.log(error.text);
                toast.error(error.text);
            });
    };
    return (
        <div className=" w-[95%] mx-auto  lg:w-[90%] xl:w-[80%] mt-10 text-[#032443] bg-[#F7F5F5] p-3 rounded shadow-sm">
            <div className="flex flex-col justify-start items-start gap-2 space-y-3">
                <div className="w-full rounded-md p-5 bg-[#032443] text-[#F7F5F5]">
                    <div className=" p-1 md:p-4">
                        <div className="p-2 md:p-3">
                            <h1 className="text-xl md:text-4xl tracking-widest text-center">Contact Information</h1>
                        </div>
                        <span className="flex justify-center items-center space-x-4">
                            <Link to="/" className="text-xl">HOME</Link> <small>/</small> <span className="text-lg">Contact Us</span>
                        </span>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-start items-center lg:justify-between lg:items-center p-3 gap-2">
                    <p className="text-base tracking-widest px-3 py-10 cursor-pointer border rounded hover:shadow transition-shadow ease-in-out lg:text-xl w-full lg:w-fit">Address : mogadishu-somalia</p>
                    <p className="text-base tracking-widest px-3 py-10 cursor-pointer border rounded hover:shadow transition-shadow ease-in-out lg:text-xl w-full lg:w-fit">Email :info@gmail.com</p>
                    <p className="text-base tracking-widest px-3 py-10 cursor-pointer border rounded hover:shadow transition-shadow ease-in-out lg:text-xl w-full lg:w-fit">Phone :+25261XXXXXXXXX</p>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-3  p-3">
                    <iframe className="w-full h-[26rem]" src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"></iframe>
                    <form className='w-full p-3 shadow flex flex-col lg:justify-center lg:items-center lg:space-x-5  space-y-5'
                        onSubmit={sendEmail}>
                        <p className='lg:w-[80%] text-4xl lg:ml-5 text-start'>Contact Us </p>
                        <input className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter First name ' name='user_name' />
                        <input className='p-3 border-2 lg:w-[80%]' type="email" placeholder='Enter Email ' name='user_email' />
                        <input className='p-3 border-2 lg:w-[80%]' type="text" placeholder='Enter subject ' name='subject' />
                        <textarea className='p-3 border-2 lg:w-[80%]' placeholder='Enter Message ' name="message" id="" cols="20" rows="4"></textarea>
                        <input type="submit" className='p-3 border-2 lg:w-[80%] bg-[#032443] text-[#F7F5F5] transition ease-in-out hover:text-[#F7F5F5] hover:bg-[#E8401B]' value='Submit'/>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact
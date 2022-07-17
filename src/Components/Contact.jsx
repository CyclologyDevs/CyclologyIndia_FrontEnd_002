import React, { useState } from 'react'

// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';


function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async (e) => {

        const Data = { name, email, message };
        await fetch(`${process.env.REACT_APP_URL}/contact_us`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Data)
        })
        // .then(response => response.json())
        // .then(data => {
        console.log(Data);
        // })
        setEmail('')
        setName('')
        setMessage('')
        window.alert('Thank you for your feedback')
    }


    // const notify = () => {
    //     toast.success('Successfully submitted', {
    //         position: "top-center",
    //         backgroundColor: "black",
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //     })
    //     setCheck(false)
    // }


    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-8">
                    <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 font-serif text-white ">Contact Us</h1>
                    <a href='mailto:wecare.cyclologyindia@gmail.com' className='text-white text-center font-serif text-2xl'>Mail Us</a>
                </div>
                
                {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-base font-serif text-white">Name</label>
                                    <input type="text" id="user_name" className="form-control form-control-lg"
                                        {...register("user_name", { required: <p className='text-red-600'>⚠ Username is required</p> })}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                    {errors.user_name?.message}
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-base font-serif text-white">Email</label>
                                    <input type="email" id="form3Example3cg" className="form-control form-control-lg"
                                        {...register("email", { required: <p className='text-red-600'>⚠ email is required</p>, pattern: { value: /^\S+@\S+$/i, message: <p className='text-red-600'>⚠ This not a valid email</p> } })}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                    {errors.email?.message}
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-base font-serif text-white">Message</label>
                                    <textarea type='text' id="user_message" className="text-xl form-control form-control-lg w-full bg-gray-100 rounded border border-gray-300 h-32 outline-none resize-none leading-6"
                                        {...register("user_message", { required: <p className='text-red-600'>⚠ Please enter your massage</p> })}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)} />
                                    {errors.user_message?.message}
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto font-serif text-white py-2 px-8 bg-[#1814ff] rounded-full text-lg hover:bg-black hover:shadow-md hover:shadow-[#1814ff]">Submit</button>
                                <ToastContainer
                                                position="top-center"
                                                autoClose={3000}
                                                hideProgressBar={false}
                                                newestOnTop={false}
                                                closeOnClick
                                                rtl={false}
                                                pauseOnFocusLoss
                                                draggable
                                                pauseOnHover
                                            />
                            </div>
                        </div>
                    </div>
                </form> */}
            </div>
        </section>
    )
}

export default Contact
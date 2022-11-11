import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiLoader2Fill } from "react-icons/ri";
import { XIcon } from '@heroicons/react/outline'


function Social() {
    const [animation, setAnimation] = useState('animate-none');
    const [alert, setAlert] = useState(false);
    const [alertMess, setAlertMess] = useState('');
    const [alertBg, setAlertBg] = useState('')
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        setAnimation('animate-spin');
        fetch('https://rahulrajput83-backend.herokuapp.com/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
            .then(response => {
                setForm({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
                console.log('Thanks for contacting me.');
                setAnimation('animate-none');
                setAlertBg('bg-green-700')
                setAlertMess('Thanks for contacting me...');
                setAlert(true);
            })
            .catch(err => {
                setForm({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
                setAnimation('animate-none');
                console.log("Got error");
                setAlertBg('bg-red-700')
                setAlertMess('Error, please try again after sometime...');
                setAlert('true')
            });
    }


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <div className='flex flex-col md:flex-row w-full mt-10 justify-center items-center md:items-start md:mt-12 p-4 md:p-10'>
            <div className='w-1/2'>
                <h1 className='text-2xl text-center w-full md:text-center md:mr-6 uppercase tracking-tight font-medium flex flex-col text-gray-900 sm:text-3xl md:text-3xl'>
                    <span>find me on</span>
                </h1>
                <p className='mt-2 text-base md:text-lg font-medium text-center'>Feel free to <span className='text-second'> connect  </span>with me</p>
                <div className='no-underline flex mt-6 flex-row justify-center'>
                    <a href='https://github.com/rahulrajput83' className="mx-2.5 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full text-white cursor-pointer bg-second hover:bg-main sm:mx-2.5 sm:h-10 sm:w-10">
                        <FaGithub />
                    </a>
                    <a href='https://www.linkedin.com/in/rahulrajput83/' className="mx-2.5 flex-shrink-0 flex items-center justify-center h-12 w-12 bg-second hover:bg-main rounded-full text-white cursor-pointer sm:mx-2.5 sm:h-10 sm:w-10">
                        <FaLinkedinIn />
                    </a>
                    <a href='https://www.instagram.com/rajput_rahul8' className="mx-2.5 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-second hover:bg-main text-white cursor-pointer sm:mx-2.5 sm:h-10 sm:w-10">
                        <FaInstagram />
                    </a>
                </div>
            </div >
            <div className='w-full md:w-1/2 flex flex-col md:items-start md:justify-start items-center justify-center mt-8 md:mt-0'>
                <span className='uppercase text-2xl text-center md:text-left w-full md:mr-6 tracking-tight font-medium sm:text-3xl text-gray-900 md:text-3xl'>Contact me</span>
                <div className='mt-6 flex flex-col w-full justify-center items-center md:justify-start md:items-start'>
                    <form className='flex flex-col w-full justify-center items-center md:justify-start md:items-start' onSubmit={handleSubmit}>
                        <input className='md:w-3/4 w-full py-2 font-lg px-4 bg-gray-100 outline-0 rounded' value={form.name} name='name' onChange={handleChange} required type='text' placeholder='Your Name' />
                        <input className='md:w-3/4 w-full py-2 mt-4 font-lg px-4 bg-gray-100 outline-0 rounded' value={form.email} name='email' onChange={handleChange} required type='email' placeholder='Your Email Address' />
                        <input className='md:w-3/4 w-full py-2 mt-4 font-lg px-4 bg-gray-100 outline-0 rounded' value={form.subject} name='subject' onChange={handleChange} required type='text' placeholder='Subject' />
                        <textarea className='md:w-3/4 w-full py-2 mt-4 font-lg px-4 bg-gray-100 outline-0 rounded overscroll-none' value={form.message} name='message' onChange={handleChange} required cols="90" rows="5" placeholder="Leave a comment..." ></textarea>
                        <button type="submit" className="mt-8 flex bg-second py-2 px-4 text-white rounded">
                            {
                                (animation === 'animate-spin') ? <><RiLoader2Fill className={`${animation} h-5 w-5 mr-3`} /> Sending </> : 'Send Now'
                            }
                        </button>
                    </form>
                    {
                        alert ? <div className={`md:w-3/4 ${alertBg} w-10/12 flex flex-row justify-between text-white py-2 font-lg px-4 rounded mt-4`}>
                            {alertMess} <XIcon onClick={() => setAlert(false)} className="block h-5 w-5 cursor-pointer" />
                        </div> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Social;
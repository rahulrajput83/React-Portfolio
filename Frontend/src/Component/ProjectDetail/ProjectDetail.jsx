import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaEye, FaGithub } from 'react-icons/fa';
import { useParams } from 'react-router-dom'
import Loading from '../AllProjects/Loading'
import avtar from '../Assets/mf-avatar.svg'
import Input from './Input';

function ProjectDetail() {
    const { id } = useParams();
    const [form, setForm] = useState({
        name: '',
        email: '',
        feedback: ''
    })
    const [message, setMessage] = useState('Loading')

    const submit = (e) => {
        e.preventDefault();
        setMessage('')
    }

    useEffect(() => {
        console.log(form)
    }, [form])
    return <div className='w-full p-2 mt-2 sm:mt-0 sm:p-8 md:px-12 lg:px-20 flex flex-col'>
        <div className='w-full flex flex-col-reverse sm:flex-row justify-between sm:items-center'>
            <span className='text-lg mt-4 sm:mt-0 font-medium text-black'>Imaginar</span>
            <div className='flex w-full gap-4 justify-end'>
                <a href='/' className='flex items-center w-10 h-10 justify-center group transition-all ease-in-out duration-300 hover:bg-second rounded border-[0.12rem] border-second text-white font-medium'>
                    <FaGithub className='text-xl text-second group-hover:text-white ' />
                </a>
                <a href='/' className='flex items-center w-10 h-10 justify-center group transition-all ease-in-out duration-300 hover:bg-white bg-second rounded border-[0.12rem] border-second text-white font-medium'>
                    <FaEye className='text-xl text-white group-hover:text-second' />
                </a>
            </div>
        </div>
        <div className='w-full'>
            <span className='font-medium text-sm'>Social Media Web Application</span>
        </div>
        <div className='w-full grid mt-8 grid-cols-1 gap-8 sm:grid-cols-2'>
            <div className='w-full flex flex-col'>
                <span className='font-medium text-lg text-black'>Recent Feedback</span>
                <div className='w-full flex flex-col mt-4 gap-2'>
                    <div className='w-full flex gap-0 flex-col'>
                        <div className='w-full flex gap-4'>
                            <img className='w-8 h-8' src={avtar} alt='' />
                            <span className='my-auto text-base font-medium'>Rahul Rajput</span>
                        </div>
                        <span className='text-sm ml-12 font-medium'>Great work Rahul</span>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col'>
                <span className='font-medium text-lg text-black'>Submit Feedback</span>
                <form onSubmit={submit} className='w-full flex flex-col gap-2'>
                    <Input form={form} setForm={setForm} value={form.name} placeholder='Your Name' name='name' />
                    <Input form={form} setForm={setForm} value={form.email} placeholder='Your Email Address' name='email' />
                    <Input form={form} setForm={setForm} value={form.feedback} placeholder='Your Feedback' name='feedback' />
                    <div className='my-2'>
                        {message ? <span className='font-medium text-sm px-2'>{message}</span> : null}
                    </div>
                    <button type='submit' className='mt-2 p-2 px-6 rounded font-medium border-[0.12rem] border-second hover:bg-white hover:text-second text-sm hover bg-second text-white w-fit'>Submit</button>
                </form>
            </div>

        </div>
    </div>
}

export default ProjectDetail
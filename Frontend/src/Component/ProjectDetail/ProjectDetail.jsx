import React, { useCallback } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useParams } from 'react-router-dom'
import Loading from '../AllProjects/Loading'
import avtar from '../Assets/mf-avatar.svg'
import Input from './Input';
import { MdRemoveRedEye } from "react-icons/md";

function ProjectDetail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [feedback, setFeedback] = useState([])
    const [data, setData] = useState({})
    const [form, setForm] = useState({
        name: '',
        email: '',
        feedback: '',
        id: id
    })
    const [message, setMessage] = useState('')

    const getFeedback = useCallback(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/get-feedback`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
            .then(res => res.json())
            .then((res) => {
                if (res.message === 'Success') {
                    setFeedback(res.data);
                }
            })
            .catch(() => {
                console.log('err')
            })
    }, [id])

    const submit = (e) => {
        e.preventDefault();
        setMessage('Submiting...');
        if (form.name && form.email && form.feedback) {
            fetch(`${process.env.REACT_APP_BACKEND_URL}/post-feedback`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
                .then(res => res.json())
                .then((res) => {
                    setMessage(res.message);
                    setTimeout(() => {
                        setMessage('')
                    }, 3000)
                    if (res.message === 'Submitted, Thank you for your feedback...') {
                        setForm({
                            name: '',
                            email: '',
                            feedback: '',
                            id: id
                        });
                        getFeedback();
                    }
                    
                })
                .catch(() => setMessage('Error, Please try again...'))
        }
        else {
            setMessage('Please fill all fields...')
        }
    }

    useEffect(() => {
        if (id) {
            setLoading(true);
            fetch(`${process.env.REACT_APP_BACKEND_URL}/project`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id })
            })
                .then(res => res.json())
                .then((res) => {
                    if (res.message === 'Success') {
                        setData(res.data);
                        setLoading(false);
                    }
                })
                .catch(() => {
                    console.log('err')
                });

            getFeedback();
        }
    }, [id, getFeedback])


    return !loading ? <div className='w-full p-2 sm:p-8 md:px-12 lg:px-20 flex flex-col'>
        <div className='w-full flex mt-24 flex-col-reverse sm:flex-row justify-between sm:items-center'>
            <span className='text-lg w-full mt-4 sm:mt-0 font-medium text-black'>{data.title}</span>
            <div className='flex w-full gap-4 justify-end'>
                <a href={data.codelink} target='_blank' rel='noreferrer' className='text-main p-2 gap-1 hover:text-white flex items-center justify-center group transition-all ease-in-out duration-300 hover:bg-second rounded border-[0.12rem] border-second font-medium'>
                    <FaGithub className='text-xl text-second group-hover:text-white' />
                    <span className='font-medium text-sm'>GitHub</span>
                </a>
                <a href={data.demolink} target='_blank' rel='noreferrer' className='text-white p-2 gap-1 hover:text-main flex items-center justify-center group transition-all ease-in-out duration-300 hover:bg-white bg-second rounded border-[0.12rem] border-second font-medium'>
                    <MdRemoveRedEye className='text-xl text-white group-hover:text-second' />
                    <span className='font-medium text-sm'>Live</span>
                </a>
            </div>
        </div>
        <div className='w-full'>
            <span className='font-medium text-sm'>{data.description}</span>
        </div>
        <div className='w-full grid mt-8 grid-cols-1 gap-8 sm:grid-cols-2'>
            <div className='w-full flex flex-col'>
                <span className='font-medium text-lg text-black'>Recent Feedbacks</span>
                <div className='w-full flex flex-col mt-4 gap-2'>
                    {feedback.length > 0 ?
                        feedback.map((item, index) => {
                            return (
                                <div key={`feedBack-${index}`} className='w-full flex gap-0 flex-col'>
                                    <div className='w-full flex gap-4'>
                                        <img className='w-8 h-8' src={avtar} alt='' />
                                        <span className='my-auto text-base font-medium'>{item.name}</span>
                                    </div>
                                    <span className='text-sm ml-12 font-medium'>{item.feedback}</span>
                                </div>
                            )
                        })
                        :
                        <span className='text-sm font-medium'>No Feedback Yet...</span>
                    }
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
    </div> : <div className='w-full p-2 sm:p-8 md:px-12 lg:px-20 flex flex-col'><div className='mt-24'><Loading /></div></div>
}

export default ProjectDetail
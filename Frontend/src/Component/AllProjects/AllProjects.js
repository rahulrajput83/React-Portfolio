import React, { useEffect, useState } from 'react';
import { FaGithub, FaEye } from "react-icons/fa";
import Loading from './Loading';


function AllProjects() {
    const [allprojects, setAllProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://rahulrajput83-backend.herokuapp.com/")
            .then((data) => data.json())
            .then((json) => {
                setAllProjects(json)
                setLoading(false)
            })
            .catch(() => {
                console.log('Please Connect to Internet.')
            })
    }, []);

    return (
        <>
            <div className='p-4 md:p-10'> </div>
            <h1 className='text-2xl text-center w-full md:text-center md:mr-6 uppercase tracking-tight font-medium flex flex-col text-gray-900 sm:text-4xl md:text-4xl0'>
                <span>All <span className='text-second'>Projects</span></span>
            </h1>
            {
                loading ? <Loading /> : null
            }
            <div className='w-full flex flex-row justify-evenly flex-wrap '>

                {
                    allprojects.map((data, index) => {
                        return (
                            <div key={index} className='rounded-md transition-all ease-in-out flex flex-col mt-12 p-4 w-80 shadow-md shadow-main'>
                                <div className='p-2 w-full h-40'>
                                    <img className='' alt='' src={data.cover} />
                                </div>
                                <div className='text-center text-lg font-medium mt-8 text-black'>{data.title}</div>
                                <p className='text-justify mt-3 text-base font-medium'>{data.description}</p>
                                <div className='mt-4 flex w-full justify-evenly'>
                                    <a href={data.codelink} className='px-6 flex items-center py-2 rounded-md bg-main hover:bg-second text-white font-medium'>
                                        <FaGithub className='mr-2' />
                                        <span>GitHub</span>
                                    </a>
                                    <a href={data.demolink} className='px-6 flex items-center py-2 rounded-md bg-main hover:bg-second text-white font-medium'>
                                        <FaEye className='mr-2' />
                                        <span>Demo</span>
                                    </a>
                                </div>
                            </div>

                        )
                    })
                }

            </div>
        </>
    )
}

export default AllProjects;
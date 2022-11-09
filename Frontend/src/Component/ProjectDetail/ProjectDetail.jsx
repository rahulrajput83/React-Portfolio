import React from 'react'
import { FaEye, FaGithub } from 'react-icons/fa';
import { useParams } from 'react-router-dom'
import Loading from '../AllProjects/Loading'

function ProjectDetail() {
    const { id } = useParams();
    return <div className='w-full p-2 mt-2 md:mt-0 md:p-8 flex flex-col'>
        <div className='flex w-full gap-4 justify-end'>
            <a href='/' className='flex items-center w-10 h-10 justify-center group transition-all ease-in-out duration-300 hover:bg-second rounded border-[0.12rem] border-second text-white font-medium'>
                <FaGithub className='text-xl text-second group-hover:text-white ' />
            </a>
            <a href='/' className='flex items-center w-10 h-10 justify-center group transition-all ease-in-out duration-300 hover:bg-white bg-second rounded border-[0.12rem] border-second text-white font-medium'>
                <FaEye className='text-xl text-white group-hover:text-second' />
            </a>
        </div>
    </div>
}

export default ProjectDetail
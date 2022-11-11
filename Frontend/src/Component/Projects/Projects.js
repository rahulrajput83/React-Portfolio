import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import {Link} from 'react-router-dom'

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)


function Projects(props) {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://rahulrajput83-backend.herokuapp.com/")
            .then((data) => data.json())
            .then((json) => {
                setProjects(json)
                setLoading(false)
            })
            .catch(() => {
                console.log('Please Connect to Internet.')
            })
    }, []);
    let newArray = projects.filter(function (el) {
        return el.new === 'yes'
    });

    return (
        <div className='flex flex-col w-full justify-center'>
            <div className='p-4 md:p-10'> </div>
            <h1 className='text-2xl text-center w-full md:text-center md:mr-6 uppercase tracking-tight font-medium flex flex-col text-gray-900 sm:text-4xl md:text-4xl0'>
                <span>My Recent <span className='text-second'>Projects</span></span>
            </h1>
            <p className='text-lg font-medium text-center'>Here are a few projects I've worked on recently.</p>
            {
                loading ? <Loading /> : null
            }
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 container mx-auto px-4 md:px-8 mt-8'>

                {
                    newArray.map((data, index) => {
                        return (
                            <Link to={`/project/${data._id}`} key={index} className='mx-auto group w-full bg-cover shadow-2xl pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-4 cursor-pointer rounded-lg transition-all ease-in-out flex flex-col'>
                                <img src={data.cover} alt='' className={`object-top group-hover:object-bottom hover:object-bottom rounded-b-none h-72 transition-all duration-[2000ms] rounded-lg ease-in-out object-cover overflow-hidden w-full`} />
                                <span className='text-center px-6 text-base font-medium mt-4 text-black'><ResponsiveEllipsis text={data.title} maxLine='1' ellipsis='...' trimRight basedOn='letters' /></span>
                                <span className='text-justify px-6 mt-3 text-sm font-medium'><ResponsiveEllipsis text={data.description} maxLine='2' ellipsis='...' trimRight basedOn='letters' /></span>
                                {/* <div className='mt-4 flex px-4 w-full justify-evenly'>
                                    <a href={data.codelink} className='px-6 flex items-center py-2 rounded-md bg-main hover:bg-second text-white font-medium'>
                                        <FaGithub className='mr-2' />
                                        <span>GitHub</span>
                                    </a>
                                    <a href={data.demolink} className='px-6 flex items-center py-2 rounded-md bg-main hover:bg-second text-white font-medium'>
                                        <FaEye className='mr-2' />
                                        <span>Demo</span>
                                    </a>
                                </div> */}
                            </Link>

                        )
                    })
                }

            </div>
        </div>
    )
}

export default Projects
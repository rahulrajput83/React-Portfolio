import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import {Link} from 'react-router-dom'

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)


function AllProjects() {
    const [allprojects, setAllProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}`)
            .then((data) => data.json())
            .then((json) => {
                const reverse = json.reverse();
                setAllProjects(reverse)
                setLoading(false)
            })
            .catch(() => {
                console.log('Please Connect to Internet.')
            })
    }, []);

    return (
        <>
            <div className='p-4'> </div>
            <h1 className='text-2xl text-center w-full md:text-center md:mr-6 uppercase tracking-tight font-medium flex flex-col text-gray-900 sm:text-4xl md:text-4xl'>
                <span>All <span className='text-second'>Projects</span></span>
            </h1>
            {
                loading ? <Loading /> : null
            }
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 mx-auto px-4 md:px-8 mt-8'>

                {
                    allprojects.map((data, index) => {
                        return (
                            <Link to={`/project/${data._id}`} key={index} className='mx-auto group w-full bg-cover shadow-2xl pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-4 cursor-pointer rounded-lg transition-all ease-in-out flex flex-col'>
                                <img src={data.cover} alt='' className={`object-top group-hover:object-bottom rounded-b-none rounded-lg hover:object-bottom h-72 transition-all duration-[2000ms] ease-in-out object-cover overflow-hidden w-full`} />
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
        </>
    )
}

export default AllProjects;
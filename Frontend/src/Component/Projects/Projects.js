import React, { useEffect, useState } from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import { Link } from 'react-router-dom'
import Loading from '../AllProjects/Loading';
import { FaGithub } from 'react-icons/fa';
import { MdRemoveRedEye } from 'react-icons/md';
import { Transition } from '../common-components/transitions';

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)


function Projects(props) {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}`)
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
        <div className='flex flex-col w-full mb-10 justify-center'>
            <div className='p-4 md:p-10'> </div>
            <Transition className='text-2xl text-center w-full md:text-center md:mr-6 uppercase tracking-tight font-medium flex flex-col text-gray-900 sm:text-4xl md:text-4xl0'>
                <span>My Recent <span className='text-second'>Projects</span></span>
            </Transition>
            <Transition className='text-lg font-medium text-center'>Here are a few projects I've worked on recently.</Transition>
            {
                loading ? <Loading /> : null
            }
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 mx-auto px-4 md:px-8 mt-8'>

                {
                    newArray.map((data, index) => {
                        return (
                            <Transition>
                                <Link
                                    to={`/project/${data._id}`}
                                    key={index}
                                    className="mx-auto relative group w-full bg-cover shadow-2xl pb-8 rounded-b-2xl transform duration-700 hover:-translate-y-4 cursor-pointer rounded-lg transition-all ease-in-out flex flex-col"
                                >
                                    <div className="absolute top-0 right-0 gap-3 pr-2 pt-2 flex flex-col -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0 group-hover:z-10">
                                        <a
                                            href={data.codelink}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-second p-3 gap-1 hover:text-white bg-white shadow-2xl flex items-center justify-center transition-all ease-in-out duration-300 hover:bg-second rounded font-medium"
                                        >
                                            <FaGithub className="text-xl" />
                                        </a>
                                        <a
                                            href={data.demolink}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-white p-3 gap-1 hover:text-second flex items-center shadow-2xl justify-center transition-all ease-in-out duration-300 hover:bg-white bg-second rounded font-medium"
                                        >
                                            <MdRemoveRedEye className="text-xl" />
                                        </a>
                                    </div>

                                    <img
                                        src={data.cover}
                                        alt=""
                                        className={`object-top group-hover:object-bottom hover:object-bottom rounded-b-none h-72 transition-all duration-[2000ms] rounded-lg ease-in-out object-cover overflow-hidden w-full`}
                                    />
                                    <span className="text-center px-6 text-base font-medium mt-4 text-black">
                                        <ResponsiveEllipsis
                                            text={data.title}
                                            maxLine="1"
                                            ellipsis="..."
                                            trimRight
                                            basedOn="letters"
                                        />
                                    </span>
                                    <span className="text-justify px-6 mt-3 text-sm font-medium">
                                        <ResponsiveEllipsis
                                            text={data.description}
                                            maxLine="2"
                                            ellipsis="..."
                                            trimRight
                                            basedOn="letters"
                                        />
                                    </span>
                                </Link>
                            </Transition>

                        )
                    })
                }

            </div>
        </div>
    )
}

export default Projects
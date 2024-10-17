import React from 'react';
import avtar from '../Assets/mf-avatar.svg'

function Meta2() {
    return (
        <div className='px-3 md:px-10 mb-10 mt-5 sm:mt-8 flex flex-col md:flex-row w-full justify-center sm:flex sm:justify-center lg:justify-center'>
            <div className='flex flex-col items-center md:w-3/4'>
                <h1 className='text-2xl text-center w-full md:text-center md:mr-6 uppercase tracking-tight font-medium flex flex-col text-gray-900 sm:text-4xl md:text-4xl0'>
                    <span>Let Me <span className='text-second'>Introduce</span> Myself</span>
                </h1>
                <p className='text-lg mt-10 font-medium text-left w-full'>I fell in love with programming and I have at least learnt something that I love, I think...</p>
                <p className='text-lg mt-5 font-medium text-left w-full'>I am fluent in classics like <span className='text-second italic'>HTML, CSS and Javascript.</span></p>
                <p className='text-lg mt-5 font-medium text-left w-full'>Whenever possible, I also apply my passion for developing products with    <span className='text-second italic'>Node.js</span>     and     <span className='text-second italic'>Modern Javascript Library and Frameworks</span>     like    <span className='text-second italic'>ReactJS</span>, <span className='text-second italic'>NextJS</span>, <span className='text-second italic'>Angular</span>.</p>
            </div>
            <div className='flex md:mt-0 flex-col justify-center items-center md:justify-start md:items-start md:w-1/5'>
                <img className='mt-2 h-40 w-40 sm:h-60 sm:w-60 md:h-auto md:w-auto ' alt='' src={avtar} />
            </div>
        </div>
    )
}

export default Meta2;
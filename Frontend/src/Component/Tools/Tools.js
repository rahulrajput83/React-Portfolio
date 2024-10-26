import React from 'react'
import SkillTitle from './SkillTitle'
import { Transition } from '../common-components/transitions'

function Tools() {
    return (
        <div className='p-4 md:p-10 flex flex-col justify-center items-center'>
            <Transition>
                <h1 className='text-2xl text-center w-full md:text-center md:mr-6 uppercase tracking-tight font-medium flex flex-col text-gray-900 sm:text-4xl md:text-4xl0'>
                    <span>Languages and <span className='text-second'>Tools:</span></span>
                </h1>
            </Transition>
            <Transition  className='w-full justify-center items-center p-2 px-0 md:p-0 md:w-11/12 flex flex-wrap'>
                {/* <img data-popover-target="popover-typescript" className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='TypeScript' src="https://devicon-website.vercel.app/api/typescript/original.svg"></img> */}
                <SkillTitle id="popover-typescript" title="TypeScript" src="https://devicon-website.vercel.app/api/typescript/original.svg" />
                <SkillTitle id="popover-javascript" title="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                <SkillTitle id="popover-nextjs" title="NextJS" src="https://devicon-website.vercel.app/api/nextjs/original.svg" />
                <SkillTitle id="popover-reactjs" title="ReactJS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <SkillTitle id="popover-angular" title="Angular" src="https://devicon-website.vercel.app/api/angularjs/plain.svg" />
                <SkillTitle id="popover-bootstrap" title="Bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                <SkillTitle id="popover-tailwind" title="Tailwind CSS" src="https://devicon-website.vercel.app/api/tailwindcss/original-wordmark.svg" />
                <SkillTitle id="popover-sass" title="SASS" src="https://devicon-website.vercel.app/api/sass/original.svg" />
                <SkillTitle id="popover-nodejs" title="NodeJS" src="https://devicon-website.vercel.app/api/nodejs/original.svg" />
                <SkillTitle id="popover-expressjs" title="ExpressJS" src="https://devicon-website.vercel.app/api/express/original.svg" />
                <SkillTitle id="popover-python" title="Python" src="https://devicon-website.vercel.app/api/python/original.svg" />
                <SkillTitle id="popover-fastapi" title="FastAPI" src="https://devicon-website.vercel.app/api/fastapi/original.svg" />
                <SkillTitle id="popover-mongo" title="MongoDB" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                <SkillTitle id="popover-mysql" title="MySQL" src="https://devicon-website.vercel.app/api/mysql/original.svg" />
                <SkillTitle id="popover-html" title="HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                <SkillTitle id="popover-css" title="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                <SkillTitle id="popover-git" title="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                <SkillTitle id="popover-github" title="GitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                <SkillTitle id="popover-gitlab" title="GitLab" src="https://devicon-website.vercel.app/api/gitlab/original.svg" />
                <SkillTitle id="popover-vscode" title="VS Code" src="https://devicon-website.vercel.app/api/vscode/original.svg" />

            </Transition>
            {/* <div className='w-full justify-center items-center p-2 px-0 md:p-0 md:w-11/12 flex flex-wrap'>
                <img data-popover-target="popover-typescript" className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='TypeScript' src="https://devicon-website.vercel.app/api/typescript/original.svg"></img>
                <SkillTitle id="popover-typescript" title="TypeScript" src="https://devicon-website.vercel.app/api/typescript/original.svg" />
                <SkillTitle id="popover-javascript" title="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                <SkillTitle id="popover-nextjs" title="NextJS" src="https://devicon-website.vercel.app/api/nextjs/original.svg" />
                <SkillTitle id="popover-reactjs" title="ReactJS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <SkillTitle id="popover-angular" title="Angular" src="https://devicon-website.vercel.app/api/angularjs/plain.svg" />
                <SkillTitle id="popover-bootstrap" title="Bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                <SkillTitle id="popover-tailwind" title="Tailwind CSS" src="https://devicon-website.vercel.app/api/tailwindcss/original-wordmark.svg" />
                <SkillTitle id="popover-sass" title="SASS" src="https://devicon-website.vercel.app/api/sass/original.svg" />
                <SkillTitle id="popover-nodejs" title="NodeJS" src="https://devicon-website.vercel.app/api/nodejs/original.svg" />
                <SkillTitle id="popover-expressjs" title="ExpressJS" src="https://devicon-website.vercel.app/api/express/original.svg" />
                <SkillTitle id="popover-python" title="Python" src="https://devicon-website.vercel.app/api/python/original.svg" />
                <SkillTitle id="popover-fastapi" title="FastAPI" src="https://devicon-website.vercel.app/api/fastapi/original.svg" />
                <SkillTitle id="popover-mongo" title="MongoDB" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                <SkillTitle id="popover-mysql" title="MySQL" src="https://devicon-website.vercel.app/api/mysql/original.svg" />
                <SkillTitle id="popover-html" title="HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                <SkillTitle id="popover-css" title="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                <SkillTitle id="popover-git" title="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                <SkillTitle id="popover-github" title="GitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                <SkillTitle id="popover-gitlab" title="GitLab" src="https://devicon-website.vercel.app/api/gitlab/original.svg" />
                <SkillTitle id="popover-vscode" title="VS Code" src="https://devicon-website.vercel.app/api/vscode/original.svg" />

                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='JavaScript' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='NextJS' src="https://devicon-website.vercel.app/api/nextjs/original.svg"></img>
                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='ReactJS' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='Angular' src="https://devicon-website.vercel.app/api/angularjs/plain.svg"></img>
                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='Bootstrap' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='Tailwind CSS' src="https://devicon-website.vercel.app/api/tailwindcss/original-wordmark.svg" />
                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='SASS' src="https://devicon-website.vercel.app/api/sass/original.svg"></img>
                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='NodeJS' src="https://devicon-website.vercel.app/api/nodejs/original.svg"></img>
                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='ExpressJS' src="https://devicon-website.vercel.app/api/express/original.svg" />
                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='Python' src="https://devicon-website.vercel.app/api/python/original.svg"></img>
                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='FastAPI' src="https://devicon-website.vercel.app/api/fastapi/original.svg"></img>
                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='MongoDB' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='MySQL' src="https://devicon-website.vercel.app/api/mysql/original.svg"></img>
                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='HTML' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='CSS' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='Git' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='GitHub' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='GitLab' src="https://devicon-website.vercel.app/api/gitlab/original.svg"></img>
                <img className='w-10 mx-2 md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10' alt='VS Code' src="https://devicon-website.vercel.app/api/vscode/original.svg"></img>
            </div> */}
        </div>
    )
}

export default Tools
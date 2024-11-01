import React, { useEffect, useState } from 'react';
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaAngular, FaBootstrap, FaSass, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaGitlab } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiFastapi } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";


function Tools() {
    const icons = [
        { component: <BiLogoJavascript className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#E6D24C' },
        { component: <BiLogoTypescript className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#0075C3' },
        { component: <RiNextjsFill className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: 'black' },
        { component: <FaReact className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#5DD0F0' },
        { component: <FaAngular className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#BE4538' },
        { component: <FaBootstrap className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#7110ED' },
        { component: <FaSass className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#C56394' },
        { component: <FaNodeJs className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#7DC427' },
        { component: <FaPython className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#F6D759' },
        { component: <FaHtml5 className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#E56027' },
        { component: <FaCss3Alt className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#30A0D0' },
        // { component: <FaGitAlt className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#F34F29' },
        // { component: <FaGithub className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#171515' },
        { component: <SiExpress className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#000000' },
        { component: <RiTailwindCssFill className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#16ADAF' },
        // { component: <FaGitlab className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#FCA326' },
        { component: <DiMongodb className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#46A037' },
        { component: <SiFastapi className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#048F81' },
        { component: <GrMysql className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#005C83' },
        // { component: <VscVscode className='shadow-2xl text-base shadow-gray-900 rounded-full h-12 w-12 z-2 p-2' />, color: '#3C99D4' },
    ];

    const [positions, setPositions] = useState([]);

    const generateUniquePositions = (count) => {
        const positions = [];
        const buffer = 2;
        const maxRetries = 50;
      
        for (let i = 0; i < count; i++) {
          let retries = 0;
          let newPosition;
      
          do {
            newPosition = {
              top: Math.floor(Math.random() * 90),
              left: Math.floor(Math.random() * 90),
            };
      
            const isUnique = positions.every(
              pos =>
                Math.abs(pos.top - newPosition.top) > buffer &&
                Math.abs(pos.left - newPosition.left) > buffer
            );
      
            if (isUnique) {
              positions.push(newPosition);
              break;
            }
      
            retries++;
          } while (retries < maxRetries);
      
          if (retries === maxRetries) {
            console.warn('Unable to place all icons uniquely; consider reducing icon count or buffer size.');
            break;
          }
        }
      
        return positions;
      };

      useEffect(() => {
        setPositions(generateUniquePositions(icons.length));
      }, [icons.length]);

    return (
        <div className='p-4 md:p-10 flex flex-col justify-center items-center box-border w-full'>
            <h1 className='text-2xl text-center w-full md:text-center md:mr-6 uppercase tracking-tight font-medium flex flex-col text-gray-900 sm:text-4xl md:text-4xl'>
                <span>Languages and <span className='text-second'>Tools:</span></span>
            </h1>

            <div className='w-full relative min-h-[25rem]'>
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        style={{
                            color: icon.color,
                            position: 'absolute',
                            top: `${positions[index]?.top}%`,
                            left: `${positions[index]?.left}%`,
                        }}
                        className=' flex items-center justify-center'
                    >
                        {icon.component}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tools;





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

</div> */}



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
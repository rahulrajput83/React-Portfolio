import React from 'react'
import CurrentStat from './CurrentStat';

function Stats() {
    // const [reactCount, setReactCount] = useState(0);
    // const [allCount, setAllCount] = useState(0);
    // const [cloneCount, setCloneCount] = useState(0);
    // const [mernCount, setMernCount] = useState(0);
    // const [focus, setFocus] = useState(false)
    

    // useEffect(() => {
    //     if(mernCount < process.env.REACT_APP_MERN_COUNT) {
    //         const timeout = setTimeout(() => {
    //             setMernCount(mernCount + 1);
    //           }, 250);
          
    //           return () => {
    //             clearTimeout(timeout);
    //           };
    //     }
    // }, [mernCount])

    // useEffect(() => {
    //     if(cloneCount < process.env.REACT_APP_CLONE_COUNT) {
    //         const timeout = setTimeout(() => {
    //             setCloneCount(cloneCount + 1);
    //           }, 250);
          
    //           return () => {
    //             clearTimeout(timeout);
    //           };
    //     }
    // }, [cloneCount,])

    // useEffect(() => {
    //     if(allCount < process.env.REACT_APP_TOTAL_COUNT) {
    //         const timeout = setTimeout(() => {
    //             setAllCount(allCount + 1);
    //           }, 250);
          
    //           return () => {
    //             clearTimeout(timeout);
    //           };
    //     }
    // }, [allCount])

    // useEffect(() => {
    //         if(reactCount < process.env.REACT_APP_REACT_COUNT) {
    //             const timeout = setTimeout(() => {
    //                 setReactCount(reactCount + 1);
    //               }, 250);
              
    //               return () => {
    //                 clearTimeout(timeout);
    //               };
    //         }
        
    // }, [reactCount])

    // useEffect(() => {
    //     const workSection = document.querySelector('#stat');
    //     const workObserver = new IntersectionObserver((entries, observer) => {
    //         const [entry] = entries;
    //         setFocus(entry.isIntersecting)
    //     }, {
    //         root: null,
    //         threshold: 0,
    //     });
    //     workObserver.observe(workSection)
    // }, [])

    // useEffect(() => {
        
    //     if(focus === false) {
    //         setAllCount(0);
    //         setMernCount(0);
    //         setCloneCount(0);
    //         setReactCount(0);
    //     }
    // }, [focus])

    return (
        <div id='stat' className={`w-full bg-second flex flex-col px-4 py-10 md:py-24 md:px-36 items-center justify-center`}>
            <div className='w-full grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {/* <div className='flex flex-col w-full justify-center gap-2 items-center text-white'>
                    <span className='text-2xl sm:text-4xl font-medium md:text-4xl'>{allCount}+</span>
                    <span className='text-lg font-medium text-center'>Total Projects</span>
                </div>
                <div className='flex flex-col w-full justify-center gap-2 items-center text-white'>
                    <span className=' text-2xl sm:text-4xl font-medium md:text-4xl'>{mernCount}+</span>
                    <span className='text-lg font-medium text-center'>MERN Projects</span>
                </div>
                <div className='flex flex-col w-full justify-center gap-2 items-center text-white'>
                    <span className=' text-2xl sm:text-4xl font-medium md:text-4xl'>{reactCount}+</span>
                    <span className='text-lg font-medium text-center'>React Projects</span>
                </div>
                <div className='flex flex-col w-full justify-center gap-2 items-center text-white'>
                    <span className=' text-2xl sm:text-4xl font-medium md:text-4xl'>{cloneCount}+</span>
                    <span className='text-lg font-medium text-center '>Website Clone</span>
                </div> */}
                <CurrentStat value={Number(process.env.REACT_APP_TOTAL_COUNT)} title="Total Projects" />
                <CurrentStat value={Number(process.env.REACT_APP_MERN_COUNT)} title="MERN Projects" />
                <CurrentStat value={Number(process.env.REACT_APP_REACT_COUNT)} title="React Projects" />
                <CurrentStat value={Number(process.env.REACT_APP_CLONE_COUNT)} title="Website Clone" />

            </div>
        </div>
    )
}

export default Stats
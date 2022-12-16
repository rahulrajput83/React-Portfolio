import React from 'react'
import MetaData from '../Meta/Meta'
import Meta2 from '../Meta/Meta2'
import Projects from '../Projects/Projects'
import Social from '../Social/Social'
import Stats from '../Stats/Stats'
import Tools from '../Tools/Tools'

function Home(props) {
  return (
    <>
        <MetaData />
        <Meta2 />
        <Tools />
        <Projects projects={props.projects} setProjects={props.setProjects} loading={props.loading} set={props.setLoading} />
        
        <Social />
        <Stats />
    </>
  )
}

export default Home
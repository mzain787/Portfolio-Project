import React from 'react'
import "./About.css"
import PageHeading from '@/components/Childcomps/PageHeading/PageHeading'
import Myintro from './Myintro'
import MyWork from './MyWork'
import Myabilities from './Myabilities'
const About= () => {
  return (
      <div className='relative'>
      <PageHeading pageHeading="About Me"/>
      <Myintro/>
      <MyWork/>
      <Myabilities/>
      </div>
  )
}
export default About
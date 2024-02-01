import React from 'react'
import "./About.css"
import PageHeading from '@/components/Childcomps/PageHeading/PageHeading'
import Myintro from './Myintro'
import MyWork from './MyWork'
const About= () => {
  return (
      <div className='relative'>
      <PageHeading pageHeading="About Me"/>
      <Myintro/>
      <MyWork/>
      </div>
  )
}
export default About
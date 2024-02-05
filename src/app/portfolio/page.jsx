import React from 'react'
import PageHeading from '@/components/Childcomps/PageHeading/PageHeading'
import PortfolioSection from './PortfolioSection'
import "./PortfolioSection.css"

const Portfolio = () => {
  return (
    <>
    <PageHeading pageHeading="Portfolio"/>
    <div className='jello-diagonal-1'>
    <PortfolioSection/>
    </div>
    </>
  )
}

export default Portfolio
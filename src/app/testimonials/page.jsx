import React from 'react'
import PageHeading from '@/components/Childcomps/PageHeading/PageHeading'
import Testimonials from '@/components/Home/Testimonials'
import Customers from './Customers'
const TestimonialsComponent = () => {
  return (
    <>
    <PageHeading pageHeading="Testimonials"/>
    <Testimonials showHeading={false}/>
    <Customers/>
    </>
  )
}

export default TestimonialsComponent
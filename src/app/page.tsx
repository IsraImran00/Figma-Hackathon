import Feature from '@/components/feature'
import Mainsection from '@/components/mainsection'
import React from 'react'
import Topcategory from '@/components/topcategory'
import Newstyle from '@/components/newstyle'
import OurProduct from '@/components/ourproduct'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className='m-3'>
      <Mainsection/>
      <Feature/>
      <Topcategory/>
      <Newstyle/>
      <OurProduct/>
      <Footer/>
    </div>
  )
}
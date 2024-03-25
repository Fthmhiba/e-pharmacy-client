import React from 'react'
import ProductNP from './components/ProductNP'
import Banner from './components/Banner'
import Poster from './components/Poster'
import MUproduct from './components/MUproduct'

function Home() {
  return (
    <div className=''>
        <Poster/>
        <ProductNP/>
        <Banner/>
        <MUproduct/>
    </div>
  )
}

export default Home

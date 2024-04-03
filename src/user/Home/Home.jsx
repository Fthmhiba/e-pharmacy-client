import React from 'react'
import ProductNP from './components/ProductNP'
import Banner from './components/Banner'
import Poster from './components/Poster'
import MUproduct from './components/MUproduct'
import Categories from '../Pages/Categories/Categories'

function Home() {
  return (
    <div className=''>
        <Categories/>
        <Poster/>
        <ProductNP/>
        <Banner/>
        <MUproduct/>
    </div>
  )
}

export default Home

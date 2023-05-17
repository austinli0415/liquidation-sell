import React from 'react'
import AppBar from '../Components/AppBar';
import ProductCategories from '../Components/ProductCatagories';
import HowItWorks from '../Components/HowItWorks';
import Help from '../Components/Help'

function Home() {
  return (
    <>
      <AppBar />
      <ProductCategories />
      <HowItWorks />
      <Help />
    </>
  )
}

export default Home
import React from 'react'
import Footer from './getir/Footer'
import Campaign from './getirbazaar/Campaign'
import Herosection from './getirbazaar/Herosection.jsx'
import Apply from './getirbazaar/Apply.jsx'
import Mobile from './getir/Mobile.jsx'
import Categories from './getirbazaar/Categories.jsx'

function Getirbazaar() {
  return (
    <div>
        <Herosection />
        <Categories/>
        <Mobile/>
        <Campaign/>
        <Apply/>
        <Footer/>      
    </div>
  )
}

export default Getirbazaar

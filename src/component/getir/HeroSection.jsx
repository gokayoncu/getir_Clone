import React, { useState } from 'react'
import Slider from "react-slick";
import './../../css/herosection.css'
import ReactFlagsSelect from "react-flags-select";

function HeroSection() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const phones ={
      US: "+1",
      GB: "+44",
      FR: "+33",
      GR: "+49",
      IT: "+39",
      TR: "+ 90"
  }

  const [selected,setSelected] = useState("TR");

  return (
    <div className='section'>
      <div className='slogan'>
        <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt=""/>
        <h2>Dakikalar içinde kapında</h2>
      </div>
      <div className='sign-in'>
          <h3>Giriş yap veya Kayıt ol</h3>
          <div className='inputs'>
          <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              className='selected'
              onSelect={code => setSelected(code)}
              selected={selected}
            />            
            <input type="text" style={{width:234,marginLeft:10,height:52}} id='phone-number'/>
            <label htmlFor="phone-number">Telefon numarası</label>
          </div>
          <button className='sign-btn'>Telefon numarası ile devam et</button>
      </div>
      <Slider {...settings}>
        <div><img src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" alt="" /></div>
        <div><img src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" alt="" /></div>
        <div><img src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg" alt="" /></div>
        <div><img src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="" /></div>
      </Slider>
      
    </div>
  )
}

export default HeroSection

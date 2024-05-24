import React, { useState } from 'react'
import Slider from "react-slick";
import './../../css/herosection.css'
import ReactFlagsSelect from "react-flags-select";
import getirbig from './../../assets/getirbüyük.svg'

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
      <div className='slogan' style={{paddingTop:50}}>
        <img src={getirbig} alt="" style={{width:300}}/>
        <h2 style={{width:500}}>Binlerce ürün ve kaçmaz fiyatlar kapında!</h2>
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
        <div><img src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-1.jpg" alt="" /></div>
        <div><img src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-2.jpg" alt="" /></div>
        <div><img src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-3.jpg" alt="" /></div>
        <div><img src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-4.jpg" alt="" /></div>
        <div><img src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-5.jpg" alt="" /></div>
        <div><img src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-6.jpg" alt="" /></div>
        <div><img src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-7.jpg" alt="" /></div>
        <div><img src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-8.jpg" alt="" /></div>
        
      </Slider>
      
    </div>
  )
}

export default HeroSection

import React, { useState } from 'react'
import './../../css/herosection.css'

function HeroSection() {
 
  return (
    <div className='section'>
        <div><img src="https://cdn.getir.com/getirweb_images/popup_splash.png" alt="" /></div>
        <div className='span-water'>
          <span>Hizmetimizi artık sadece uygulamamız üzerinden veriyoruz.</span>
          <span>Şimdi Getir uygulamasını indir, siparişini ver,</span>
          <span>dilediğin su markası bayiden kapına gelsin.</span>
        </div>
    </div>
  )
}

export default HeroSection

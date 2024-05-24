import React from 'react'
import './../../css/mobile.css'

function Mobile() {
  return (
    <div className='mobile'>
      <div className='mobile-container'>
            <div className='mobile-box'>
                <div className='text'>
                    <h2>Getir'i İndir</h2>
                    <span>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</span>
                </div>
                <div className='links'>
                    <a href="https://apps.apple.com/us/app/getir-groceries-in-minutes/id995280265" target='_blank'><img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.getir&pli=1" target='_blank'><img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" /></a>
                    <a href="https://appgallery.huawei.com/#/Featured" target='_blank'><img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" /></a>
                </div>
            </div>
            <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
      </div>
    </div>
  )
}

export default Mobile

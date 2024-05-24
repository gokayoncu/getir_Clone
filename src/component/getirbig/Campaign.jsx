import React from 'react'
import './../../css/campaign.css'

function Campaign() {
  return (
    <div className='campaign'>
      <div className='campaign-box'>
        <img src="https://getir.com/_next/static/images/intro-market-basket-8ca56a5e5a21b80ccb71403d77df83d8.svg" alt="" />
        <h3>Binlerce çeşit</h3>
        <span>Kasaptan manava, ev bakım ürünlerinden kişisel bakım ürünlerine binlerce çeşidi kolayca bulabilirsin.</span>
      </div>
      <div className='campaign-box'>
        <img src="https://getir.com/_next/static/images/intro-market-delivery-86c4407609c24bbdf92feb222d7baca0.svg" alt="" />
        <h3>Uygun fiyatlı ürünler</h3>
        <span>GetirBüyük’te binlerce ürünü uygun fiyata sipariş verirsin.</span>
      </div>
      <div className='campaign-box'>
        <img src="https://getir.com/_next/static/images/intro-market-fee-586c3e4c701b44396ac99828259e9d7f.svg" alt="" />
        <h3>Kapına teslimat</h3>
        <span>Siparişlerin kapına kadar gelir.</span>
      </div>
    </div>
  )
}

export default Campaign

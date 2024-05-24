import React from 'react'
import './../../css/campaign.css'

function Campaign() {
  return (
    <div className='campaign'>
      <div className='campaign-box'>
        <img src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" alt="" />
        <h3>Her siparişine bir kampanya</h3>
        <span>Getir’de vereceğin her siparişe uygun bir kampanya bulabilirsin.</span>
      </div>
      <div className='campaign-box'>
        <img src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg" alt="" />
        <h3>Dakikalar içinde kapında</h3>
        <span>Getir’le siparişin dakikalar içinde kapına gelir.</span>
      </div>
      <div className='campaign-box'>
        <img src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg" alt="" />
        <h3>Binlerce çeşit mutluluk</h3>
        <span>Getir’de binlerce çeşit arasından seçimini yapabilirsin.</span>
      </div>
    </div>
  )
}

export default Campaign

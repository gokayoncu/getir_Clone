import React from 'react'
import './../../css/campaign.css'

function Campaign() {
  return (
    <div className='campaign'>
      <div className='campaign-box'>
        <img src="https://cdn.getir.com/getirweb-images/common/illustration/intro-locals-delivery.png" alt="" />
        <span style={{color:'#5d3ebc',fontSize:18,fontWeight:600}} >İhtiyacın olan ürünler, gramajı, lezzeti ve tazeliği tam istediğin şekilde çarşıdan kapına ulaşır!</span>
      </div>
      <div className='campaign-box'>
        <img src="https://cdn.getir.com/getirweb-images/common/illustration/intro-locals-all-types.png" alt="" />
        <span style={{color:'#5d3ebc',fontSize:18,fontWeight:600,textAlign:'center',width:292}}>GetirÇarşı ile manavdan, kasaba, marketten, pet shopa 100 binlerce ürün sipariş edebilirsin!</span>
      </div>
      <div className='campaign-box'>
        <img src="https://cdn.getir.com/getirweb-images/common/illustration/intro-locals-in-minutes.png" alt="" />
        <span style={{color:'#5d3ebc',fontSize:18,fontWeight:600}}>Siparişin Getir güvencesi ile dakikalar içerisinde teslim edilir!</span>
      </div>
    </div>
  )
}

export default Campaign

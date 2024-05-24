import React from 'react'
import './../../css/categories.css'
import datas from './../../data/bazaarData.json'

function Categories() {
    const data = datas.result;
  return (
    <div className='categories'>
      <h3 style={{marginBottom:20,fontSize:14}} >İşletme Kategorileri</h3>
      <div >
        {
            data?.map((res)=>(
                <a href='#' key={res.id} className='cateforie' style={{fontSize:14,fontWeight:600,justifyContent:'flex-start'}}>
                    <img src={res.media} alt="" />
                    {res.categorie}
                </a>
            ))
        }
      </div>
    </div>
  )
}

export default Categories

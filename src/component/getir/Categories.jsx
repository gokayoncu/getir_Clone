import React from 'react'
import './../../css/categories.css'
import datas from './../../data/data.json'

function Categories() {
    const data = datas.result;
  return (
    <div className='categories'>
      <h3>Kategoriler</h3>
      <div>
        {
            data?.map((res)=>(
                <a href='#' key={res.id} className='cateforie'>
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

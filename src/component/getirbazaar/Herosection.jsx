import React, { useState } from 'react'
import './../../css/herosection.css'
import ReactFlagsSelect from "react-flags-select";
import { IoSearch } from "react-icons/io5";
import { MdLocationSearching } from "react-icons/md";

function Herosection() {
    
    const [selected,setSelected] = useState("TR");
    const phones ={
        US: "+1",
        GB: "+44",
        FR: "+33",
        GR: "+49",
        IT: "+39",
        TR: "+ 90"
    }
    

  return (
    <div>
        <img src="https://cdn.getir.com/getirweb_images/common/hero_posters/locals_2.jpeg" alt="" style={{width:1517}}/>
        <div className='location' style={{top:130,height:330}}>
            <input type="text" placeholder='Sokağını veya pos' className='local' style={{height:80}}/>
            <IoSearch className='search-icon' style={{top:42}}/>
            <div className='find-location' style={{top:38}}>
                <MdLocationSearching className='location-icon'/>
                <span>Konumu Bul</span>
            </div>
            <div className='or'>
                <div className='hr'></div>
                <span>veya</span>
                <div className='hr'></div>
            </div>
            <h3 style={{fontWeight:600,fontSize:16}}>Giriş yap veya kayıt ol</h3>
            <div className='phone-number'>
                <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                className='selected'
                onSelect={code => setSelected(code)}
                selected={selected}
                />
                <input type="text" className='phone-input' placeholder='Telefon numarası'/> 
            </div>  
            <button className='sign-btn'>Telefon numarası ile devam et</button>
        </div>
    </div>
  )
}

export default Herosection

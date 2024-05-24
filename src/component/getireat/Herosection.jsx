import React, { useState } from 'react'
import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import './css/herosection.css'
import ReactFlagsSelect from "react-flags-select";
import { IoSearch } from "react-icons/io5";
import { MdLocationSearching } from "react-icons/md";

function Herosection() {
    const [state,setState] = useState(1)
    const [source,setSource]= useState("https://cdn.getiryemek.com/banner/1_hamburger.mp4")
    const [selected,setSelected] = useState("TR");

    const src=[
        {
            src:"https://cdn.getiryemek.com/banner/1_hamburger.mp4"
        },
        {
            src:"https://cdn.getiryemek.com/banner/2_doner.mp4"
        },
        {
            src:"https://cdn.getiryemek.com/banner/3_pide.mp4"
        },
        {
            src:"https://cdn.getiryemek.com/banner/4_pizza.mp4"
        },
        {
            src:"https://cdn.getiryemek.com/banner/5_kunefe.mp4"
        }
    
    ]
    const changeSrc= () =>{
        if(state <=4){
            if(state!=4){
                setSource(src[state].src)
                setState(state+1)
            }else{                
                setSource(src[state].src)
                setState(0)
            }
            
        }
    
    }
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
        <MediaPlayer title="Sprite Fight" playsInline autoPlay={true} muted={true} loop={true} onEnd={changeSrc} src={source} className='herovideo'>
            <MediaProvider />
        </MediaPlayer>
        <div className='location'>
            <h3>Adresine getiren restoranları gör</h3>
            <input type="text" placeholder='Sokağını veya pos' className='local'/>
            <IoSearch className='search-icon'/>
            <div className='find-location'>
                <MdLocationSearching className='location-icon'/>
                <span>Konumu Bul</span>
            </div>
            <div className='or'>
                <div className='hr'></div>
                <span>veya</span>
                <div className='hr'></div>
            </div>
            <h3>Giriş yap veya kayıt ol</h3>
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

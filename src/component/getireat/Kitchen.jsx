import React from 'react'
import './css/kitchen.css'
import kitchenData from './../../data/kitchenData.json'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Kitchen() {
    const data = kitchenData.result;
    const sliderLeft= ()=>{
        const res= document.getElementById('kitchen')
        if(res.scrollLeft <638){
            res.scrollLeft += 155;
        }else{
            res.scrollLeft = 0;
        }
    }
    const sliderRight= ()=>{
        const res= document.getElementById('kitchen')
        if(res.scrollLeft!=0){
            res.scrollLeft -= 155;
        }else{
            res.scrollLeft = 638.40;
        }
    }

    return (
        <div >
            <div className='kitchen-header'><h3>Mutfaklar</h3></div>
            <div className='kitchen'>
                <IoIosArrowBack className='arrow' onClick={sliderRight}/>
                <div className='kitchen-container' id='kitchen'>
                    {
                        data?.map((res)=>(
                            <a href='#' key={res.id} className='kitchen-box'>
                                <img src={res.media} alt="" />
                                <hr />
                                {res.categorie}
                            </a>
                        ))
                    }
                </div>
                <IoIosArrowForward className='arrow'onClick={sliderLeft}/>
            </div>
        </div>
    );
}
export default Kitchen
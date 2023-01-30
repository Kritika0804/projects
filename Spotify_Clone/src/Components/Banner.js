import React from 'react'
import Artist from "../images/musician.jpg";
import Check from "../images/check.png";
import { FaEllipsisH,FaHeadphones,FaCheck } from 'react-icons/fa';


function Banner() {
  return (
    <div className='banner'>
        <img src={Artist} alt="" className='bannerImg'/>

        <div className='content'>
          <div  className='breadcrump'>
            <p>Home <span>/Popular Artist</span></p>
            <i><FaEllipsisH/></i>
          </div>
          <div className='Artist'>
            <div className='left'>
              <div className='name'>
                <h2>Arjit Singh</h2>
                
                <img src={Check} alt=''/>
           
              </div>
                <p><i><FaHeadphones/></i>
                11,184,1811<span>Monthly Listeners</span>
                </p>

            </div>
            <div className='right'>
                  <a href="#">Play</a>
                  <a href="#"><i><FaCheck/></i>Following</a>
                  


            </div>
          </div>
        </div>
        <div className='bottomLayer'></div>
    </div>
  )
}

export {Banner};

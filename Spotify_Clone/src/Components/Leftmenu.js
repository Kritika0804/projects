import React from 'react'

import '../Style/leftmenu.css'
import {FaSpotify,FaEllipsisH} from 'react-icons/fa'
import {BiSearchAlt} from 'react-icons/bi'
import {Menu} from "./Menu"
import { Menulist } from './Menulist'
import { MenuPlayList } from './MenuPlayList'
import TrackList from './TrackList'



function Leftmenu() {
  return (
    <div className='leftmenu'>
      <div className='logoContainer'>
        <i><FaSpotify/></i>
        <h2>Spotify</h2>
        <i><FaEllipsisH/></i>
      </div>
      <div className='searchbox'>
        <input type='text' placeholder='Search...'/>
        <div className='searchIcon'>
        <i><BiSearchAlt/></i>
        </div>

      </div>

      
      <Menu title={'Menu'} menuObject={Menulist}/>
  
      <MenuPlayList/>

      <TrackList/>


    </div>
  )
}

export {Leftmenu};

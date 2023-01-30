import React from 'react'

import {FaPlus } from "react-icons/fa";
import {BsMusicNoteList,BsTrash} from "react-icons/bs";
import '../Style/leftmenu.css';
import { Playlist } from './Playlist';

function MenuPlayList() {
  return (
    <div className='playListContainer'>
        <div className='nameContainer'>
            <p>Playlist</p>
            <i>
                <FaPlus/>
            </i>
        </div>
        <div className='playListScroll'>

          {
            Playlist && Playlist.map((list)=>(
              <div className='PlayList' key={list.id}>
              <i className='List'><BsMusicNoteList/></i>
              <p>{list.name}</p>
              <i className='Trash'><BsTrash/></i>
              </div> 
            ))
          }

            

        </div>
      
    </div>
  )
}

export {MenuPlayList};

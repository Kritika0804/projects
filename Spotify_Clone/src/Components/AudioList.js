import React from 'react'
import { FaHeadphones,FaRegClock,FaHeart,FaRegHeart } from 'react-icons/fa';

function AudioList() {
  return (
    <div className='AudioList'>
    <div className='title'>
        The List<span>12 Songs</span>
    </div>

    <div className='songsContainer'>
        <div className='songs'>
            <div className='count'>#01</div>
            <div className='song'>


                <div className='imgbox'>
                    <img src='' alt=''/>
                </div>

                <div className='section'>
                    <p className='songName'>
                        Take me on
                        <span className='spanArtist'>Artist name</span>
                    </p>

                    <div className='hits'>
                        <p className='hit'><i><FaHeadphones/></i>95,490,102</p>
                        <p className='duration'><i><FaRegClock/></i>03.04</p>
                        <div className='Fav'>
                            <i><FaHeart/></i>
                            <i><FaRegHeart/></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export {AudioList};

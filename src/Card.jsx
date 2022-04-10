import React from 'react'
import PlayButton from './PlayButton';
import './App.css'

function Card(props){

    

  return(
      <div className='grid'>
      
    {props.albums.map((album, i) =>(
      <div className='card' key={i}>
        <img alt='album' src={album.images[0].url} />
        <section className='card-overlay'>
          <section className='text-box'>
        <p>{album.name}</p>
        <p>{album.artists[0].name}</p>
            < PlayButton index={i} />
          </section>
        </section>
      </div>
      ))}
  </div>
  )
}
export default Card
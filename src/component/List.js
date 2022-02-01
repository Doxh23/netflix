import React,{useState} from 'react';
import baseURL from './base';
import Youtube from "react-youtube"


export default function List({list,namecat,setmovie,addtrailer,urltrailer,loadtrailer,setloadtrailer}) {
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      };
    if ( list.length === 0) {
        return (
            <>
            <p></p>
            </>
        )
    }else{
    return(
        <>
        <div> 
      
          <div>
       
          <h2>{namecat}</h2>
          
          <ul className='movies'>
          {list.map(res => ( <li> 
                    
                    <img className='img-movies' onClick={()=> setmovie(res)} src={`${baseURL}${res.poster_path}`} alt="" />
                    { (namecat === "Original netflix") ? <h3>{res.name}</h3> : res.name ? <h3>{res.name}</h3> : <h3>{res.title}</h3>}
                    
             </li>
                   
          ))} 
    
            
          </ul>
      </div>
      { loadtrailer ?           <Youtube videoId={urltrailer} opts={opts} />
 : ""} 
       
       </div>
       </>
      )}
}

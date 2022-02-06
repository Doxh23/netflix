import React,{useState} from 'react';
import baseURL from './base';


export default function List({list,movie,namecat,setmovie,addtrailer,urltrailer,loadtrailer,setloadtrailer}) {
    
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
                    
                    <img className='img-movies' onClick={()=> {setmovie(res)
                   addtrailer(res)
                   setloadtrailer(true)
                  }
                    } src={`${baseURL}${res.poster_path}`} alt="" />
                    { (namecat === "Original netflix") ? <h3>{res.name}</h3> : res.name ? <h3>{res.name}</h3> : <h3>{res.title}</h3>}
                    
             </li>
                   
          ))} 
    
            
          </ul>
      </div>
      
       
       </div>
       </>
      )}
}

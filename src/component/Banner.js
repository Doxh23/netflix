import React,{useState} from 'react';

import baseURL from './base';


export default function Banner({banner,movie,setlist,list}) {
  let newarray = []
  const addlist = ()=> {

    if(!list.includes(movie)){
      newarray = list.concat(movie)
      console.log(newarray)
      setlist(newarray)
    }else{
      list.map(el => {
        if(el.id === movie.id){
        newarray = list.filter((el) => el !== movie)
        setlist(newarray)
        }
      })
    }
    
    }
       
  return(
       <div className='banner' style={{ backgroundSize : "cover",
        backgroundPosition: "top",
        backgroundImage: `url(${baseURL}${movie.backdrop_path}
        )`,}} ref={banner}>
           
<div>
           <h2> {movie.original_title ? movie.original_title : movie.original_name}</h2>
           <p>{movie.overview}</p>
           </div>
           <div>
           <button onClick={addlist}>
               {(!list.includes(movie))? "add to my list" : "remove from my list"}
             </button>
               </div>
       </div>
  );
}

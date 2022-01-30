import React from 'react';
import baseURL from './base';


export default function Banner({banner,movie}) {
  console.log(movie)
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
             <button>
             </button>
             <button>
               </button>
               </div>
       </div>
  );
}

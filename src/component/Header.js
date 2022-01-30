import React,{useRef} from 'react';

export default function Header({setgenre}) {
  
  return ( <>
  <div className='header'  >
     <div className='logo-nav'>
         <ul>
             <li>Netflix</li>
             <li onClick={() => setgenre("all")}>accueil</li>
             <li  onClick={() => setgenre("movie")} >tv show</li>
             <li  onClick={() => setgenre("tv")}>movies</li>
             <li>list</li>

         </ul>
     </div>
     <div className='profil'>
         profil</div> 
  </div>;
 </>
  )
}

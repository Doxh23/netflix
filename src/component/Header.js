import React,{useRef} from 'react';

export default function Header({setgenre}) {
  
  return ( <>
  <div className='header'  >
     <div className='navigation'>
         <ul>
             <li><img className='nav-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="logo netflix" /></li>
             <li  onClick={() => setgenre("all")}>accueil</li>
             <li  onClick={() => setgenre("movie")} >tv show</li>
             <li  onClick={() => setgenre("tv")}>movies</li>
             <li onClick={()=> setgenre("list")}>list</li>

         </ul>
     </div>
     <div className='profil'>
         profil</div> 
  </div>;
 </>
  )
}

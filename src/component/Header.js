import React from 'react';
import profil from '../asset/profil.png';

export default function Header({ setgenre, setloadtrailer }) {
  return (
    <>
      <div className="header">
        <div className="navigation">
          <ul>
            <li>
              <img
                className="nav-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
                alt="logo netflix"
              />
            </li>
            <li
              onClick={() => {
                setgenre('all');
                setloadtrailer(false);
              }}
            >
              accueil
            </li>
            <li
              onClick={() => {
                setgenre('movie');
                setloadtrailer(false);
              }}
            >
              tv show
            </li>
            <li
              onClick={() => {
                setgenre('tv');
                setloadtrailer(false);
              }}
            >
              movies
            </li>
            <li
              onClick={() => {
                setgenre('list');
                setloadtrailer(false);
              }}
            >
              list
            </li>
          </ul>
        </div>
        <div className="profil">
          <img src={profil} alt="profil" style={{ width: '40px' }} />
        </div>
      </div>
      ;
    </>
  );
}

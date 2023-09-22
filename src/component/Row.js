import React, { useEffect, useState } from 'react';
import baseURL from './base';
import instance from './axios';
import { Oval } from 'react-loader-spinner';

export default function Row({
  fetchUrl,
  namecat,
  setmovie,
  addtrailer,
  setloadtrailer,
}) {
  const [movies, setmovies] = useState([]);
  const [loading, setloading] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(
    async function fetchdata() {
      try {
        await instance
          .get(`${fetchUrl}`)
          .then((response) => setmovies(response.data.results))
          .then(setloading(false));
      } catch (e) {
        console.log(e);
      }
    },
    [fetchUrl]
  );
  return (
    <div>
      {!loading ? (
        <div>
          <h2>{namecat}</h2>

          <ul key={namecat} className="movies">
            {movies.map((res) => (
              <li
                key={
                  namecat === 'Original netflix'
                    ? `${res.name}`
                    : res.name
                    ? `${res.name}`
                    : `${res.title}`
                }
              >
                <img
                  className="img-movies"
                  onClick={() => {
                    setmovie(res);
                    addtrailer(res);
                    setloadtrailer(true);
                  }}
                  src={`${baseURL}${res.poster_path}`}
                  alt=""
                />
                {namecat === 'Original netflix' ? (
                  <h3>{res.name}</h3>
                ) : res.name ? (
                  <h3>{res.name}</h3>
                ) : (
                  <h3>{res.title}</h3>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <Oval color="#00BFFF" height={80} width={80} />
        </div>
      )}
    </div>
  );

  // return (
  //   <div className="row">
  //     <h2>{props.title}</h2>
  //     <div className="row_posters">
  //       {!loading ? (
  //         movies.map((movie) => (
  //           <img
  //             key={movie.id}
  //             onClick={() => handleClick(movie)}
  //             className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
  //             src={`${base_url}${
  //               props.isLargeRow ? movie.poster_path : movie.backdrop_path
  //             }`}
  //             alt={movie.name}
  //             onMouseEnter={() => props.setMovie(movie)}
  //           />
  //         ))
  //       ) : (
  //         <Loader
  //           style={{ margin: "auto" }}
  //           type="TailSpin"
  //           color="#FF0000"
  //           height={100}
  //           width={100}
  //         />
  //       )}
  //     </div>
  //     {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
  //   </div>
  // );
}

/* eslint-disable default-case */
import React,{useState,useEffect,useRef} from 'react'
import requests from './component/request'
import Row from './component/Row'
import Header from './component/Header'
import Banner from './component/Banner'
import List from './component/List'


export default function App() {
const [action, setAction] = useState([])
const [movie, setmovie] = useState([])
const [genre, setgenre] = useState("all")
const [list, setlist] = useState([])
console.log(list);

const banner = useRef(0)

// function styleheader()  {
//   const scrheader = header.current.scrollTop
//   console.log(scrheader); 
// }
if (genre === "list") {
  return (
    <>
    <Header setgenre={setgenre}  />
    <Banner list={list} movie={movie} banner={banner} setlist={setlist} />
    <List list={list} setmovie={setmovie} setlist={setlist} banner={banner} key={"17"} namecat={"My list"}
    // eslint-disable-next-line default-case
    ></List>
    </>
  )
}else{
return ( 
    < >
    
    <div className='app'    >
    <Header setgenre={setgenre}  />
    <Banner  movie={movie} setlist={setlist}/>
  
    <Row action={action} setmovie={setmovie} banner={banner} setAction={setAction} key={"1"} namecat={"original"}
    // eslint-disable-next-line default-case
    fetchUrl={(function () {
      switch (genre) {
        case "all":
          return requests.fetchNetflixOriginalsAll;
          break;
        case "movie":
          return requests.fetchNetflixOriginalsMovie;
          break;
        case "tv":
          return requests.fetchNetflixOriginalsTv;
          break;
      }
    })()} ></Row>
    <Row action={action} setmovie={setmovie} banner={banner} setAction={setAction} key={"2"} namecat={"Trending"} fetchUrl={(function () {
                  switch (genre) {
                    case "all":
                      return requests.fetchTrendingAll;
                      break;
                    case "movie":
                      return requests.fetchTrendingMovie;
                      break;
                    case "tv":
                      return requests.fetchTrendingTv;
                      break;
                  }
                })()}></Row>
    <Row action={action} setmovie={setmovie} banner={banner} setAction={setAction} key={"3"} namecat={"topRated"} fetchUrl={(function () {
                  switch (genre) {
                    case "all":
                      return requests.fetchTopRatedAll;
                      break;
                    case "movie":
                      return requests.fetchTopRatedMovie;
                      break;
                    case "tv":
                      return requests.fetchTopRatedTv;
                      break;
                  }
                })()}></Row>
    <Row action={action} setmovie={setmovie} banner={banner} setAction={setAction}  key={"4"} namecat={"action"}  fetchUrl={(function () {
                    switch (genre) {
                      case "all":
                        return requests.fetchActionMoviesAll;
                        break;
                      case "movie":
                        return requests.fetchActionMoviesMovie;
                        break;
                      case "tv":
                        return requests.fetchActionMoviesTv;
                        break;
                    }
                  })()}></Row>
    <Row action={action} setmovie={setmovie} banner={banner} setAction={setAction} key={"5"} namecat={"comedy"} fetchUrl={(function () {
                  switch (genre) {
                    case "all":
                      return requests.fetchComedyMoviesAll;
                      break;
                    case "movie":
                      return requests.fetchComedyMoviesMovie;
                      break;
                    case "tv":
                      return requests.fetchComedyMoviesTv;
                      break;
                  }
                })()}></Row>
    <Row action={action} setmovie={setmovie} banner={banner} setAction={setAction} key={"6"} namecat={"horror"} fetchUrl={(function () {
                    switch (genre) {
                      case "all":
                        return requests.fetchHorrorMoviesAll;
                        break;
                      case "movie":
                        return requests.fetchHorrorMoviesMovie;
                        break;
                      case "tv":
                        return requests.fetchHorrorMoviesTv;
                        break;
                    }
                  })()}></Row>
    <Row action={action} setmovie={setmovie} banner={banner} setAction={setAction} key={"7"} namecat={"romance"}  fetchUrl={(function () {
                  switch (genre) {
                    case "all":
                      return requests.fetchRomanceMoviesAll;
                      break;
                    case "movie":
                      return requests.fetchRomanceMoviesMovie;
                      break;
                    case "tv":
                      return requests.fetchRomanceMoviesTv;
                      break;
                  }
                })()}></Row>
    <Row action={action} setmovie={setmovie} banner={banner} setAction={setAction} key={"8"} namecat={"documentary"} fetchUrl={(function () {
                  switch (genre) {
                    case "all":
                      return requests.fetchDocumentariesAll;
                      break;
                    case "movie":
                      return requests.fetchDocumentariesMovie;
                      break;
                    case "tv":
                      return requests.fetchDocumentariesTv;
                      break;
                  }
                })()}></Row>
    </div>


      {/* {action.results.map(res => <img src={`${baseURL}${res.backdrop_path}`}alt="" /> )} */}

 
    </>
  )}
}
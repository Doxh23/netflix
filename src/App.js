/* eslint-disable no-unused-expressions */
/* eslint-disable no-unreachable */
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

return ( 
    < >
    
    <div className='app'    >
    <Header setgenre={setgenre}  />
    <Banner list={list} movie={movie} banner={banner} setlist={setlist} />
{ (genre === "list") ?  <List list={list} setmovie={setmovie} setlist={setlist} banner={banner} key={"17"} namecat={"My list"}
      // eslint-disable-next-line default-case
      /> : <> ( <Row action={action} setmovie={setmovie} banner={banner} setAction={setAction} key={"1"} namecat={"original"}
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
            // eslint-disable-next-line no-unused-expressions
            default : requests.fetchNetflixOriginalsAll ;
            break;
        }
      })()} />
   
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
                      default : requests.fetchTrendingAll ;
                      break;
                  }
                })()}/>
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
                      default : requests.fetchTopRatedAll ;
                      break;
                  }
                })()}/>
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
                        default : requests.fetchActionMoviesAll ;
                        break;
                    }
                  })()}/>
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
                      default : requests.fetchComedyMoviesAll ;
                      break;
                  }
                })()}/>
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
                        default : requests.fetchHorrorMoviesAll ;
                        break;
                    }
                  })()}/>
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
                      default : requests.fetchRomanceMoviesAll ;
                      break;
                  }
                })()}/>
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
                      default : requests.fetchDocumentariesAll ;
                      break;
                  }
                })()}/> </> }
     
       
    </div>


      {/* {action.results.map(res => <img src={`${baseURL}${res.backdrop_path}`}alt="" /> )} */}

 
    </>
  )
}
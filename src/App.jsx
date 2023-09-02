import React, { createContext, useEffect, useState } from 'react';
 
import logo from './logo.svg';
import './App.css';
import Navbarr from './Navbarr';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PopularM from './Moviescategory';
import LatestM from './LatestM';
import ComedyM from './ComedyM';
import { ComedyMovies, LatestMovies, PopularMovies } from './Url';
import Moviescategory from './Moviescategory';
import Details from './Details';
import Banner from './Banner';

const samplecontext=createContext()
function App() {
  const [id, setid] = useState([])
  const [url, seturl] = useState([])
  const [shownav, setshownav] = useState(true)
  const [showbanner, setshowbanner] = useState(true)

  const [popular, setpopular] = useState([])
  const [keyword, setkeyword] = useState("")

  console.log(keyword);

  
  return (
    <div className="App">
      <samplecontext.Provider value={ {id, setid, url, seturl, shownav, setshownav, showbanner, setshowbanner, popular, setpopular,keyword, setkeyword } }>
      <BrowserRouter>
         {shownav === true ? <Navbarr /> : ""}
         {/* {showbanner === true ? <Banner/> : "" } */}
         {showbanner === true && keyword.length === 0 ? <Banner/>: ""}
         

        <Routes>
          <Route path='/popular' element={ <Moviescategory api={PopularMovies}/> } />
          <Route path='/latest' element={ <Moviescategory api={LatestMovies}/> } />
          <Route path='/comedy' element={ <Moviescategory api={ComedyMovies}/> } />
          <Route path='/detail/:id' element={ <Details/> } />

          
        </Routes>

      </BrowserRouter>
      </samplecontext.Provider>
    </div>
  );
}

export default App;
export {samplecontext}
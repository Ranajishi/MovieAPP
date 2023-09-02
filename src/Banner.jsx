import React, { useEffect, useState } from 'react'
import { ComedyMovies, LatestMovies, PopularMovies, imageUrl } from './Url'
import axios from 'axios'


const Banner = () => {

  const api= PopularMovies
  
  const [banner, setbanner] = useState([])
  const [randomObject, setRandomObject] = useState(null);

  useEffect(() => {
   axios.get(api).then((res)=>setbanner(res.data.results))
  }, [])

  console.log(banner);
  // const filterban= banner.filter((i,a)=>a==0)
  // console.log(filterban)


  const selectRandomObject = () => {
    if (banner.length > 0) {
      const randomIndex = Math.floor(Math.random() * banner.length);
      setRandomObject(banner[randomIndex]);
    }
  };
  useEffect(() => {
    selectRandomObject();
  }, [banner])
  


  const stars=[];
    const getstars=(rate) =>{
      for (let index = 0; index < (rate-1)/2 ; index++) {
        stars.push(<span>★</span>);  
      }
      return stars
    }
  return (
    <div>
      {randomObject ? (
        <div>
           <div className='m-5 shadow-lg'style={{backgroundImage: `url(${imageUrl+randomObject.poster_path})`, height: "780px", width: "1250px",backgroundSize: "100% 100%"}}>
            <div >
                <h1 style={{textShadow: "2px 2px #f5f2eb"}}>{randomObject.title || randomObject.name}</h1>
                <h1 style={{textShadow: "2px 2px #f5f2eb"}}>{getstars(randomObject.vote_average)}</h1>
                <h5 style={{textShadow: "1px 1px #f5f2eb",margin: "50px"}}>{randomObject.overview}</h5>
            </div>
          </div>  
        </div>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  )
}

export default Banner

// random effect

import React, { useContext, useEffect } from 'react'
import { samplecontext } from './App';
import { Figure, Image } from 'react-bootstrap';
import { imageUrl } from './Url';
import { useParams } from 'react-router-dom';

const Details = () => {
    const sample1=useContext(samplecontext)
    const { setshownav, setshowbanner, popular, setpopular } = sample1
    console.log(popular);
    
    const { id }= useParams()
    console.log(id);

    const filterM=popular.filter((i)=>i.id==id)
    console.log(filterM);
    
    
    useEffect(() => {
      setshownav(false) 
      setshowbanner(false) 
    }, [])
    

    const stars=[];
    const getstars=(rate) =>{
      for (let index = 0; index < (rate-1)/2 ; index++) {
        stars.push(<span>★</span>);
        
      }
      return stars
    }

    
 
  return (
    <div >
      
       <div>
       {filterM.map((i)=>{
        return(
          <div> 
          <div className='mt-5' style={{float: "left", width: "30%"}} >
          <Figure >
          <Figure.Image 
            width={300}
            height={80}
            alt="171x180"
            style={{marginLeft: "200px"}}
            src={imageUrl+i.poster_path}
          />
          
        </Figure>
        </div>
    
        <div className='mt-5' style={{float: "left", paddingLeft: "94px", width: "70%"}} > 
          <h1>{i.title || i.name }</h1>  
          
          <p class="font-weight-normal m-4">{i.overview}
          <div className='mt-2'>
          <br/> <b>Language :</b> {i.original_language} 
          <br/> <b>Popularity :</b> {i.popularity} 
          <br/> <b>Release Date : </b> {i.release_date || i.first_air_date}
          <br/> <b>Vote Average : </b> {i.vote_average}
          <br/> <b>vote Count :</b> {i.vote_count}
          </div>
          <h5>{getstars(i.vote_average)}</h5>
    
          </p>
          
    
    
    
          </div>  
          
        </div> 
        )
       })}
      </div>
      
      {/* <h1>{id}</h1> */}
     
      
    </div>
  )
}

export default Details

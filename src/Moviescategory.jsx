import React, { createContext, useContext, useEffect, useState } from 'react'
import { PopularMovies, imageUrl } from './Url'
import axios from 'axios'
import { Button, Card } from 'react-bootstrap'
import './App.css'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { samplecontext } from './App'


const Moviescategory = ({ api }) => {
  const sample1=useContext(samplecontext)
  const { id, setid,url, seturl, setshownav, showbanner, setshowbanner, popular, setpopular,keyword, setkeyword  } = sample1

  // const api= PopularMovies
  // const [popular, setpopular] = useState([])
  const nav=useNavigate()

  useEffect(() => {
   axios.get(api).then((res)=>setpopular(res.data.results))
   setshownav(true)
   setshowbanner(true)
  
  }, [api])
  console.log(popular);
  
  
  
  const DetailF=(d)=>{
    setid(d);
    console.log(d);
    
  }
  let filterBySearch = popular?.filter((item) => {
    if ((item.name || item.title).toLowerCase().includes(keyword.toLowerCase()) ) { return item; }
  })
console.log(filterBySearch);
 
  
  return (
    <div >
      {filterBySearch.map((i)=>{
        return(
          <div className='mt-4' style={{marginLeft: "50px"}}>
            <Card  className='cardd shadow-lg mt-4' style={{ width: '18rem', height: "27rem", float: "left", margin: "10px" }}>

            <Card.Img variant="top" src={imageUrl+i.poster_path} style={{height: "200px" }} />
            <Card.Body>
              <Card.Title>{i.title || i.name}</Card.Title> 
                                                            {/* or condition || */}
              <Card.Text>
                <h6>Language: {i.original_language}</h6>
                Released Date: {i.release_date}{i.first_air_date}
                <h6>★ {i.vote_average/2}</h6>
                {/* id: {i.id} */}
              </Card.Text>
                <Link to={`/detail/${i.id}`}><Button onClick={()=>DetailF(i.id)} className='buttonh align-text-bottom' >Show More </Button></Link>
            </Card.Body>
          </Card>
          </div>
        )
      })}
      
    </div>
  )
}

export default Moviescategory

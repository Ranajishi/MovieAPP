import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ComedyMovies, imageUrl } from './Url'
import { Button, Card } from 'react-bootstrap'

const ComedyM = () => {
  const api= ComedyMovies
  const [comedy, setcomedy] = useState([])

  useEffect(() => {
   axios.get(api).then((res)=>setcomedy(res.data.results))
  }, [])
  console.log(comedy);
  return (
    <div>
      <h1>Comedy Movies</h1>
      {comedy.map((i)=>{
        return(
          <div style={{marginLeft: "50px"}}>
          <Card className='shadow-lg' style={{ width: '18rem', height: "27rem", float: "left", margin: "10px" }}>
            <Card.Img variant="top" src={imageUrl+i.poster_path}  style={{ height: "200px" }}/>
            <Card.Body>
              <Card.Title>{i.name}</Card.Title>
              
              <Card.Text>
                <h6>Language: {i.original_language}</h6>
              </Card.Text>
              <Card.Text>
                Released Date: {i.first_air_date}
                <h6>☆ {i.vote_average}</h6>


              </Card.Text>
              <Button  variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </div>
        )
      })}
      
    </div>
  )
}

export default ComedyM

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { LatestMovies, imageUrl } from './Url'
import { Button, Card } from 'react-bootstrap'

const LatestM = () => {
  const api= LatestMovies
  const [latest, setlatest] = useState([])

  useEffect(() => {
   axios.get(api).then((res)=>setlatest(res.data.results))
  }, [])
  console.log(latest);
  return (
    <div>
      <h1>Latest Movies</h1>
      {latest.map((i)=>{
        return(
          <div style={{marginLeft: "50px"}}>
          <Card className='shadow-lg' style={{ width: '18rem', height: "27rem", float: "left", margin: "10px" }}>
            <Card.Img variant="top" src={imageUrl+i.poster_path} style={{ height: "200px" }}/>
            <Card.Body>
            
              <Card.Title>{i.title}</Card.Title>
              
              <Card.Text>
                <h6>Language: {i.original_language}</h6>

              </Card.Text>
              <Card.Text>
                Released Date: {i.release_date}
                <h6>☆ {i.vote_average}</h6>

              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </div>
        )
      })}
    </div>
  )
}

export default LatestM

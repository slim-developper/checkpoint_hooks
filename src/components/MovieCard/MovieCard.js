import React from "react";
import { Card, Button } from "react-bootstrap";
import '../MovieCard/MovieCard.css';
import Rate from '../MovieRating/Rate'




const MovieCard = ({movie}) => {
  return (
    <Card style={{ width: "18rem" }} key={movie.id} className='movieCard'>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title} <br/>
        <Rate rate={movie.rate}/>
        
        </Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <div className="watchdwnldbtn">
          <Button variant="success">Watch trailer</Button>
          <Button variant="primary">Download</Button>
        </div>
      </Card.Body>
    </Card>
      )}
  





export default MovieCard;

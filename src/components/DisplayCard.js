import React from 'react';
import {Card,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './displaycard.css'
function DisplayCard({prop,index}){
    let pathnext = "./"+String(prop.title);
    return(
      <div>
              <Card className="card" key = {index} >
              <Card.Img className="cardImg" variant="top" src="holder.js/100px160" src={prop.img}  />
              <Card.Body>
                <Card.Title className="cardTitle">{prop.title}</Card.Title>
                  <Card.Text className="cardText">
                      {prop.des}
                      </Card.Text>
                      
                      <Button variant="primary" as = {Link} to={pathnext} >Go somewhere</Button>
                      </Card.Body>
              </Card>
              
      </div>
      
    )
}
export default DisplayCard;
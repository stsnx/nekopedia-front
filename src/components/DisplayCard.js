import React from 'react';
import {Card,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './displaycard.css'
function DisplayCard({prop,index}){
    let pathnext = "./"+String(prop.title);
    return(
      <div>
              <Card className="cardz__" key = {index} >
              
              <Card.Img className="cardImg__" variant="top" src="holder.js/100px160" src={prop.img}  />
              <Card.Body>
                <Card.Title className="cardTitle__">{prop.title}</Card.Title>
                  <Card.Text className="cardText__">
                    
                      </Card.Text>
                      
                      <Button className="linktomore__" variant="light" as = {Link} to={pathnext} >Click for more detail</Button>
                      </Card.Body>
              </Card>
              
      </div>
      
    )
}
export default DisplayCard;
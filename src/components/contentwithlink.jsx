import React from 'react';
import {Card,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './displaycard.css';
function ContentWithLink({prop,index}){
    return(
        <div>
                <Card className="card" key = {index} >
                <Card.Img className="cardImg" variant="top" src="holder.js/100px160" src={prop.img}  />
                <Card.Body>
                  <Card.Title className="cardTitle">{prop.title}</Card.Title>
                  <Button variant="success">{prop.prize}</Button>
                    <Card.Text className="cardText">
                        {prop.des}
                    </Card.Text> 
                    <p>reccomment store</p>
                    <Button variant="light"><a href={prop.recstore} target="_blank">Clickbait here!</a></Button>
                        </Card.Body>
                </Card>
                
        </div>
        
      )
}
export default ContentWithLink;
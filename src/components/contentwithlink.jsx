import React from 'react';
import {Card,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './contentwithlink.css';
function ContentWithLink({prop,index}){
    return(
        <div>
                <Card className="l_card" key = {index} >
                <Card.Img className="l_cardImg" variant="top" src="holder.js/100px160" src={prop.img}  />
                <Card.Body>
                  <Card.Title className="l_cardTitle">{prop.title}</Card.Title>
                  <Button className="l_price" variant="success">{prop.prize}</Button>
                    <Card.Text className="l_cardText">
                        {prop.des}
                    </Card.Text> 
                    <Button variant="light"className="l_linktomore"><a href={prop.recstore} target="_blank">For recomment store Clickbait here!</a></Button>
                        </Card.Body>
                </Card>
                
        </div>
        
      )
}
export default ContentWithLink;
import React from 'react';
import {Card, Row,Col} from 'react-bootstrap';
import './content.css'
function Content({prop,index}){
    return(
      <div>
              <Card className="card_content" key = {index} flex={Row} >
              <Card.Body>
              <Row>
                <Col>
              <Card.Img className="cardImg_content" variant="top" src="holder.js/100px160" src={prop.img}  />
              </Col>
              <Col>
                <Card.Title className="cardTitle_content">{prop.title}</Card.Title>
                  <Card.Text className="cardText_content">
                      {prop.des}
                      </Card.Text>
                </Col>
                </Row>
                </Card.Body>
              </Card>
              
      </div>
      
    )
}
export default Content;
import React from 'react';
import {Row,Col,Card} from "react-bootstrap";
import './contact.css'
import NameDev from "./devper.json"
function ContactUs(){
    return(
        <div>
        
                <Row xs={1} sm={2} md={3} xl={3} className="table__c">
                {NameDev.map((prop,index)=>{
                    return (
                        <Col>
                        <Card className="c_card" key = {index} >
                            <Card.Img className="c_cardImg" variant="top" src="holder.js/100px160" src={prop.img}  />
                            <Card.Body>
                            <Card.Title className="cardTitle">{prop.title}</Card.Title>
                            <Card.Text className="c_cardText">
                            <p>Name : {prop.name}<br/>Nickname : {prop.nickname}
                            <br/>ID : {prop.stuid}<br/>Role : {prop.role}
                            </p>
                            </Card.Text> 
                            <div class="linkicon">
                            <a href={prop.fb} target="_blank" class="blockicon">
                            <img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" />
                            </a>
                            <a href={prop.github} target="_blank" class="blockicon">
                            <img class="icon" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" href={prop.github} target="_blank"/>
                            </a>
                            <a href={prop.ig} target="_blank" class="blockicon">
                            <img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png" href={prop.ig} target="_blank"/>
                            </a>
                            </div>
                            </Card.Body>
                        </Card>
                        </Col>
                        
                    )

                })}
                </Row>
        </div>
    )
}
export default ContactUs;
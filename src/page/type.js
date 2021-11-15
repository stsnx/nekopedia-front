import React from "react";
import {Button} from "react-bootstrap";
import {Card,Row,Col} from "react-bootstrap";
import {namelis} from "../testlist"
import './type.css'
function Type(){
    const data = namelis;
    const info =[
        {
            id : 1,
            img : 'unknownkjkj.png',
            title : 'Kawjaw',
            des : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor lobortis pulvinar. Phasellus dignissim diam sit amet tincidunt feugiat. Nullam nunc nisl, rutrum sit amet consequat nec, cursus a risus. Sed viverra magna vitae felis sodales vehicula. Praesent facilisis efficitur lacinia. Nam hendrerit mi sit amet sem mollis, vitae suscipit mauris fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed non eros aliquam, placerat tellus a, commodo dolor."
        },
        {
            id : 2,
            img : 'unknownj.png',
            title : 'Jill',
            des : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor lobortis pulvinar. Phasellus dignissim diam sit amet tincidunt feugiat. Nullam nunc nisl, rutrum sit amet consequat nec, cursus a risus. Sed viverra magna vitae felis sodales vehicula. Praesent facilisis efficitur lacinia. Nam hendrerit mi sit amet sem mollis, vitae suscipit mauris fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed non eros aliquam, placerat tellus a, commodo dolor."
        }
    ]
    const renders = (lis,index) =>{
        return(
        <Card style={{ width: '18rem' }}key = {index}>
        <Card.Img variant="top" src="holder.js/100px180" src={lis.img} />
        <Card.Body>
        <Card.Title>{lis.title}</Card.Title>
        <Card.Text>{lis.des}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        );
    };
    return(
        <div>
        <p>Type</p>
        <img src='unknownka.png' alt='kanut' />
        <div className="grid">{data.map(renders)}</div>
        <Row xs={1} md={2} className="g-4">
        { data.map((lis, index) => (
        <Col>
        <Card className="card" style={{ width: '18rem' }}key = {index} >
        <Card.Img className="cardImg" variant="top" src="holder.js/100px160" src={lis.img}  />
        <Card.Body>
          <Card.Title className="cardTitle">{lis.title}</Card.Title>
            <Card.Text className="cardText">
                {lis.des}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        </div>
        
    )
};
export default Type;
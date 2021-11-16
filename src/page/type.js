import React from "react";
import {Button,Card,Row,Col} from "react-bootstrap";
import {namelis} from "../testlist"
import './type.css'
import SearchBar from "../components/SearchBar";
import nameList from "./name.json"
function Type(){
    const data = nameList;
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
        <div >
        <SearchBar placeholder="eath" data={nameList}/>
        </div>
        </div>
        
    )
}
export default Type;
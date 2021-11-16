import React,{useState} from 'react';
import {Button,Card,Row,Col} from "react-bootstrap";
function SearchBar({placeholder,data}){
    const [filteredData,setFilteredData] = useState(data);
    const handleFilter =(e) => {
        const searchWord = e.target.value 
        const newFilter = data.filter((item)=>{
            return Object.keys(item).some(key=>{
                return item[key].toString().toLowerCase().includes(searchWord.toLowerCase())
            })
           /* return value.title.toLowerCase().includes(searchWord.toLowerCase())*/
        });
        if (searchWord===""){
            setFilteredData(data)
        }
        else{
           setFilteredData(newFilter); 
        }
        
    };
    return(
        <div className="search">
            <div className="searchInput">
               <input type="text" placeholder={placeholder} onChange={handleFilter}/>
            </div>
            { filteredData.length !=0 &&(
            <div>
                <Row xs={1} md={2} className="g-4">
                {filteredData.map((lis,index)=>{
                    return (
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
                        
                    )

                })}
                </Row>
            </div>
            )}
        </div>
    )
}
export default SearchBar;
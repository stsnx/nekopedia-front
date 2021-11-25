import React,{useState,useEffect} from 'react';
import {Row,Col} from "react-bootstrap";
import DisplayCard from './DisplayCard';
import './searchbar.css';
function SearchBar({placeholder,data,thispath}){
    const [filteredData,setFilteredData] = useState(data);
    const handleFilter =(e) => {
        const searchWord = e.target.value 
        const newFilter = data.filter((item)=>{
            return Object.keys(item).some(key=>{
                if (item[key]!=null){
                    return item[key].toString().toLowerCase().includes(searchWord.toLowerCase())
                }
            })
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
                <Row xs={1} sm={2} md={3} xl={4} className="g-4">
                {filteredData.map((lis,index)=>{
                    return (
                        <Col>
                        <DisplayCard className="card__in" prop={lis} index={index}/>
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
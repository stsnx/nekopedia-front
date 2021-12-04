import React,{useState,useEffect} from 'react';
import {Row,Col} from "react-bootstrap";
import Content from './Content';
import './searchbar.css';
function SearchBarOneTap({placeholder,data,thispath}){
    const [filteredData,setFilteredData] = useState(data);
    const [searchWord,setsearchWord] = useState("");
    const handleFilter =(e) => {
        setsearchWord ( e.target.value) ;
        const newFilter = data.filter((item)=>{
            return Object.keys(item).some(key=>{
                if (item[key]!=null){
                    return item[key].toString().toLowerCase().includes(searchWord.toLowerCase())
                }
            })
        });
        if(searchWord===""){
          setFilteredData(data)
        }
        else{
           setFilteredData(newFilter); 
        }
        
    };
    useEffect(()=>{
        if(filteredData===data){
            setFilteredData(data); 
        } 
        else if(filteredData==""){
            if (searchWord==""){
            setFilteredData(data);
            }
            /*else if (searchWord!=""){
                let em = "[]"
                setFilteredData(em);
            }*/
        } 
        
    })
    return(
        <div className="search">
            <div className="searchInput">
               <input className="searchInput__bar"type="text" placeholder={placeholder} onChange={handleFilter}/>
               <img className="search__icon" src="https://cdn2.iconfinder.com/data/icons/education-3-25/48/129-512.png"/>
            </div>
            { filteredData.length !=0 &&(
            <div>
                <Row xs={1} md={1} xl={1} className="g-4">
                {filteredData.map((lis,index)=>{
                    return (
                        <Col>
                        <Content className="card__in" prop={lis} index={index}/>
                        </Col>
                        
                    )

                })}
                </Row>
            </div>
            )}
        </div>
    )
}
export default SearchBarOneTap;
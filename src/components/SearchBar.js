
import React,{useState,useEffect} from 'react';
import {Row,Col,Button} from "react-bootstrap";
import DisplayCard from './DisplayCard';
import './searchbar.css';
function SearchBar({placeholder,data,thispath}){
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
    const selectFilter = (e) =>{
        const filt = e.target.value;
        console.log(filt.toString());
        const nf=data.filter((item)=>{
            console.log(item.title[0].toString());
            console.log(item.title.toString());
            if (filt.toLowerCase().includes(item.title[0].toString().toLowerCase())){
                return item;
            }
        });
        console.log("res"+nf.toString());
        setFilteredData(nf);
        if (nf==[]){
            setFilteredData([]);
        }
    }
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
            <p className="hnn">หาน้อง ๆ ตามตัวอักษรได้ที่นี่เลย</p>
            <div className="buttongroup">
            <Button variant="light" className="but_fil" id="a" onClick={selectFilter} value="abcd">A-D</Button>
            <Button variant="light" className="but_fil" id="b" onClick={selectFilter} value="efgh">E-H</Button>
            <Button variant="light" className="but_fil" id="c" onClick={selectFilter} value="ijkl">I-L</Button>
            <Button variant="light" className="but_fil" id="d" onClick={selectFilter} value="mnop">M-P</Button>
            <Button variant="light" className="but_fil" id="e" onClick={selectFilter} value="qrs">Q-S</Button>
            <Button variant="light" className="but_fil" id="f" onClick={selectFilter} value="twxyz">T-Z</Button>
               <input className="searchInput__bar" type="text" placeholder={placeholder} onChange={handleFilter}/>
               <img className="search__icon" src="https://cdn2.iconfinder.com/data/icons/education-3-25/48/129-512.png"/>
            </div>
            { 
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
            }
        </div>
    )
}
export default SearchBar;
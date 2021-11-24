import React,{useState,useEffect} from "react";
import './pagecontent.css';
import SearchBar from "../components/SearchBar";


function Type(){
    const [nameList,setNameList] = useState([])
    useEffect(async() => {
    try{
        const res = await fetch('https://djangotestapi1234.herokuapp.com/apiblog/blog-list/')
        const name_data  = await res.json()
        setNameList(name_data)
    }
    catch (er){
        console.log(er)
    }
    }, [])
    console.log(nameList)
    return(
        <div>
        <div className="banner">
        <img  className="banner_img"src='unknownka.png' alt='kanut' />
        </div>
        <div >
        <SearchBar className="searchbox" placeholder="eath" data={nameList} thispath="type"/>
        </div>
        
        </div>
        
    )
}
export default Type;
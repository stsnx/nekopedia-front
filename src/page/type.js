import React from "react";
import './pagecontent.css';
import SearchBar from "../components/SearchBar";
import nameList from "./name.json";

function Type(){
    
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
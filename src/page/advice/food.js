import React from "react";
import SearchBar from "../../components/SearchBar";
import foodTemp from '../foodtemp.json';
import '../pagecontent.css'
function Food(){
    return(
        <div>
        <div className="banner">
        <img  className="banner_img"src='../unknownka.png' alt='kanut' />
        </div>
        <div >
        <SearchBar className="searchbox" placeholder="food for eath" data={foodTemp} thispath="type"/>
        </div>
        
        </div>
    )
}
export default Food;
import React from "react";
import SearchBarWithLink from "../../components/searchbarwithlink";
import foodTemp from '../foodtemp.json';
import '../pagecontent.css'
function Food(){
    return(
        <div>
        <div className="banner">
        <img  className="banner_img"src='../unknownka.png' alt='kanut' />
        </div>
        <div >
        <SearchBarWithLink className="searchbox" placeholder="food for eath" data={foodTemp} thispath="type"/>
        </div>
        
        </div>
    )
}
export default Food;
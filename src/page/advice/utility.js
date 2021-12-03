import React from "react";
import SearchBarWithLink from "../../components/searchbarwithlink";
import foodTemp from '../foodtemp.json';
import '../pagecontent.css'
function Utility(){
    return (
        <div>
        <div className="banner">
        <img  className="banner_img"src='https://github.com/ZionSS/NekoPedia-FrontEnd/blob/main/assets/banner_utility.png?raw=true' alt='kanut' />
        </div>
        <div >
        <SearchBarWithLink className="searchbox" placeholder="food for eath" data={foodTemp} thispath="type"/>
        </div>
        
        </div>
    )
}
export default Utility;
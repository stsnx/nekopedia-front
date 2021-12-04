import React,{useState,useEffect} from "react";
import SearchBarWithLink from "../../components/searchbarwithlink";
import '../pagecontent.css'
function Utility(){
    const [utilTemp ,setutilTemp] = useState([])
    useEffect(() => {
        async function fetchData(){
            try{
                const res = await fetch('https://djangotestapi1234.herokuapp.com/apishop/Shop-list/')
                const name_data  = await res.json()
                setutilTemp (name_data)
                
            }
            catch (er){
                console.log(er)
            }
        }
        fetchData();
    }, [])
    return(
        <div>
        <div className="banner">
        <img  className="banner_img"src='https://github.com/ZionSS/NekoPedia-FrontEnd/blob/main/assets/banner_utility.png?raw=true' alt='kanut' />
        </div>
        <div >
        <SearchBarWithLink className="searchbox" placeholder="Type for search." data={utilTemp} thispath="type"/>
        </div>
        
        </div>
    )
}
export default Utility;
import React,{useState,useEffect} from "react";
import SearchBarWithLink from "../../components/searchbarwithlink";
import '../pagecontent.css'
function Food(){
    const [foodTemp ,setfoodTemp] = useState([])
    useEffect(() => {
        async function fetchData(){
            try{
                const res = await fetch('https://djangotestapi1234.herokuapp.com/apifoodcats/foodCats-list/')
                const name_data  = await res.json()
                setfoodTemp (name_data)
                
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
        <img  className="banner_img"src='https://github.com/ZionSS/NekoPedia-FrontEnd/blob/main/assets/banner_food.png?raw=true' alt='kanut' />
        </div>
        <div >
        <SearchBarWithLink className="searchbox" placeholder="food for eath" data={foodTemp} thispath="type"/>
        </div>
        
        </div>
    )
}
export default Food;
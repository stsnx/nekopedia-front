import React,{useState,useEffect} from "react";
import './pagecontent.css';
import SearchBar from "../components/SearchBar";



function Type(){
    const [nameList,setNameList] = useState([])
    useEffect(() => {
        async function fetchData(){
            try{
                const res = await fetch('https://djangotestapi1234.herokuapp.com/apicats/Cats-search/?search=')
                const name_data  = await res.json()
                setNameList(name_data)
                
            }
            catch (er){
                console.log(er)
            }
        }
        fetchData();
    }, [])

    console.log(nameList)
    return(
        <div>
        <div className="banner">
        <img  className="banner_img"src='https://github.com/ZionSS/NekoPedia-FrontEnd/blob/main/assets/banner_type2.png?raw=true' alt='kanut' />
        </div>
        <div >
        <SearchBar className="searchbox" placeholder="Type for search." data={nameList} thispath="type"/>
        </div>
        </div>
        
    )
}
export default Type;
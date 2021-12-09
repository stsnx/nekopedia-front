import React,{useState,useEffect} from "react";
import SearchBarOneTap from '../../components/SearchBarOneTap';
import '../pagecontent.css'
function Tips(){
    const [tipsTemp ,settipsTemp] = useState([])
    useEffect(() => {
        async function fetchData(){
            try{
                const res = await fetch('https://djangotestapi1234.herokuapp.com/apiblog/blog-search/?search=')
                const name_data  = await res.json()
                settipsTemp (name_data)
                
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
        <img  className="banner_img"src='https://github.com/ZionSS/NekoPedia-FrontEnd/blob/main/assets/banner_t&t.png?raw=true' alt='kanut' />
        </div>
        <div >
        <SearchBarOneTap className="searchbox" placeholder="Type for search." data={tipsTemp} thispath="type"/>
        </div>
        
        </div>
    )
}
export default Tips;
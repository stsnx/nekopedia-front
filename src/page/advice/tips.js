import SearchBarOneTap from '../../components/SearchBarOneTap';
import foodTemp from '../foodtemp.json';
import '../pagecontent.css'
function Tips(){
    return(
        <div>
        <div className="banner">
        <img  className="banner_img"src='../unknownka.png' alt='kanut' />
        </div>
        <div >
        <SearchBarOneTap className="searchbox" placeholder="tips for eath" data={foodTemp} thispath="type"/>
        </div>
        
        </div>
    )
}
export default Tips;
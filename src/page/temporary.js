import React from 'react';
function Temporary({data,title}){
    return (
        <div>
            <img src={data.img}/>
            <p>
                title : {data.title}<br/>
                prize : {data.prize}<br/>
                recomment store : {data.recstore}<br/>
                temperament : {data.temperament}<br/>
                coat color : {data.coat_color}<br/>
                body type : {data.body_type}<br/>
                lifespan : {data.lifespan}<br/>
                weight : {data.weight}
            </p>
           
        </div>
        
    )
}
export default Temporary;
import React from 'react';
function Temporary({data,title}){
    return (
        <div>
            <img src={data.img}/>
            <p>{data.title}</p>
            <p>{data.des}</p>
        </div>
        
    )
}
export default Temporary;
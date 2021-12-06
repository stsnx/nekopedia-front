import React from 'react';
import './temporary.css'
function Temporary({data,title}){
    return (
        <div className="tem__element">
        <div className="tem_img column">
        <figure>
        <img src={data.img}/>
        </figure>
        
        </div>
        <div className="title__cat">
            <p>{data.title}</p>
        </div>
        <div className="box__left">
        <div className="textzone">
        <p className="text__normal">ราคาค่าตัวน้องอยู่ที่ประมาณ <span className="text__des">{data.prize}</span></p>
        <p className="text__normal">ประเภทของตัวน้องเป็นแบบ <span className="text__des">{data.body_type}</span></p>
        <p className="text__normal">โดยทั่วไปแล้วน้องจะมีสีขนคือสี <span className="text__des">{data.coat_color}</span></p>
        <p className="text__normal">อายุขัยของน้องอยู่ที่ประมาณ <span className="text__des">{data.lifespan}</span></p>
        <p className="text__normal">น้องหนักประมาณ <span className="text__des">{data.weight}</span></p>
        </div>
        </div>
        <div className="box__right">
        <div className="textzone__r">
        <p className="text__normal__r">ลักษณะโดยทั่วไปของน้อง </p>
        <p className="text__des__r">&emsp;&emsp;{data.temperament}</p>
        </div>
        </div>
        </div>
        
    )
}
export default Temporary;
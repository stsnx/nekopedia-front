import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import './App.css';
import foodTemp from "./page/foodtemp.json";
import Home from './page/home';
import ContactUs from './page/contact';
import Type from './page/type'
import Food from './page/advice/food';
import Tips from './page/advice/tips';
import Utility from './page/advice/utility';
import Temporary from './page/temporary';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App (){
  const [nameList,setNameList] = useState([])
    useEffect(async() => {
    try{
        const res = await fetch('https://djangotestapi1234.herokuapp.com/apicats/Cats-list/')
        const name_data  = await res.json()
        setNameList(name_data)
    }
    catch (er){
        console.log(er)
    }
    }, [])
  return (
    <div className='app'>
      <Router>
            <NavBar/>
                    <Routes>
                        <Route path="/advice/food" element={ <Food />}/>
                        <Route path="/advice/utility" element={ <Utility />}/>
                        <Route path="/advice/tips" element={ <Tips />}/>
                        <Route path="/type" element={ <Type />}/>
                        <Route path="/contact" element={<ContactUs />}/>
                        <Route path="/home"element={<Home />}/> 
                        <Route path="/"element={<Home />}/> 
                        {nameList.map((lis,index)=>{
                          let thispath="/type/"+String(lis.title).replace(" ","%20");
                          return (
                        <Route path={thispath} element={<Temporary data={lis} title={`this.path`}/>}/> 
                          );})}
                        {foodTemp.map((lis,index)=>{
                          let thispath="/advice/food/"+String(lis.title).replace(" ","%20");
                          return (
                        <Route path={thispath} element={<Temporary data={lis} title={`this.path`}/>}/> 
                          );})}
                        {foodTemp.map((lis,index)=>{
                          let thispath="/advice/utility/"+String(lis.title).replace(" ","%20");
                          return (
                        <Route path={thispath} element={<Temporary data={lis} title={`this.path`}/>}/> 
                          );})}
                        
                    </Routes>
      </Router>
    </div>
  );
}


export default App;
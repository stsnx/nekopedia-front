import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './App.css';
class App extends Component {
  render(){
  return (
    <div className='app'>
    <Navbar/>
    </div>
  );
  }
}

export default App;
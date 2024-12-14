import React from 'react';
import './App.css';
import Header from './components/Header';// export default that why we can write with out {}
import { Home } from './components/Home';//export const -> we must write with {} 
import { Footer } from './components/Footer';//export const -> we must write with {}
import { Content } from './components/Content';
import { University } from './components/University';

function App() {

  // var name = 'Riddh'; 
  // var age = 22;
  // var user = {
  //   name : 'Sumit',
  //   salary : 1000000
  // }
  var title = 'ReactJs...';
  var city = "Ahmedabad";

  return (
    // only one tag return at a time


    <div className='App'>
      <Header title={title}></Header>
      <University></University>
      {/* <Content title={title} city={city}></Content> */}
      {/* <Home></Home> */}
      <Footer></Footer>
    </div>
  );
}

export default App;

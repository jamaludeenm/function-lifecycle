import React , { useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './slides/Home';


function Main() {
  const[name,setName] =useState("react");
  const[age,setAge] =useState(34);
  const[obj,setObj] =useState({features:"add-on"});
  const[show,setShow] =useState(true);
  //ComponentDidMount
  //passing an empty array the callback will call only once
useEffect(() =>{
  console.log('CDM')
},[]);

//componentDidUpdate
//passing the state in to an array it will be call
useEffect(() =>{
  console.log('CDU')
},[name]);


  return (
    <div>
      function-component {name} {age} {obj.features}
      <button onClick={() => setName("javascript")}>update Name</button>
      <button onClick={() => setAge(45)}>update Age</button>
      <button onClick={() => setObj({features:"square-oFF"})}>update object</button>
      <button onClick={() => setShow(!show)}>show/hide</button>
      {show?<Home/>:null}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

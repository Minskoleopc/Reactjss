// 1) Import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom/client'


// Get the reference to the div with the root

const el = document.getElementById('root')
// Tell react to the control of that element 
const root = ReactDOM.createRoot(el)

// Creating a component
function App(){
  // rule 
  // element should be returned from a compoment to view
  //<h3>Hello</h3>
  //return <h1>Hi there!</h1>


  // program2 (Numbers and string )
  // let message = "chinmay"
  // let age = 32
  // return <h1>{message} {age}</h1>

  // program 3 boolean

  //let canDrive = true
  //let canDrive = {firstName:"chinmay" ,lastName:"deshpande"}
  //let canDrive = ["sarika","poorva","mayuri"]
  //let canDrive = [1,2,3]
  // let date  = new Date()
  // let time =  date.toLocaleTimeString()
  // return <h1>{time}</h1>

  // program 4
  let inputType = "number"
  let mina = 5
  let maxa = 10
  return <input  className = "hello" type={inputType} min= {mina} max={maxa}/>





}
// show the component on UI 

root.render(<App/>)
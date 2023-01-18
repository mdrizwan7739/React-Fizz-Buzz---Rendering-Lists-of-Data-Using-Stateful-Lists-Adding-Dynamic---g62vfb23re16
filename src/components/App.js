import React,{useState} from 'react'
import '../styles/App.css';
const App = () => {
  let [state, setState] = useState('normal');
 const inc =()=>{
  let a = document.getElementById('counter').innerHTML;
  let b=parseInt(a)+1;
  if(b%3===0){
    setState("fizz");
  }
  else if(b%5===0){
    setState("buzz")
  }
  else if(b%3===0 && b%5===0){
    setState("fizzbuzz");
  }
  else{
    setState('normal');
  }
  }
  const dec =()=>{
    let a = document.getElementById('counter').innerHTML;
    let b=parseInt(a)-1;
    if(b%3===0){
      setState("fizz");
    }
    else if(b%5===0){
      setState("buzz")
    }
    else if(b%3===0 && b%5===0){
      setState("fizzbuzz");
    }
    else{
      setState('normal');
    }
    }
  
  return (
    <div id="main">
 <button id='increment' onClick={inc}>increment</button>
      <div id="counter" className={state}>1</div>
      <button id='decrement' onClick={dec}>decrement</button>

    </div>
  )
}


export default App;

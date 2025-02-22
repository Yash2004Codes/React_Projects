import React, { use } from 'react';
import { useState } from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import  useCounterStore  from './Store.js';

export function About({click}){
return(
  <>
  <h1>this is About page!</h1>
  <h2>You clicked button {click} times in home page</h2>

  </>
);
}
export function Contact({click}){
  return(
    <>
    <h1>this is contact page!</h1>
    <h2>You clicked button {click} times in home page</h2>
    </>
  );
}

export default function App(){

  //const [click,setClick] = useState(0);
  const click = useCounterStore((state)=>state.count);
  //const incr = useCounterStore((state)=>state.increment);

  return(
    <>
     <BrowserRouter>
    <Link to="/contact">Contact</Link><br></br>
    <Link to="/about">About</Link><br></br>
    <Link to="/">Home</Link><br></br>


     <Routes>
     <Route path="/about" element={<About click={click}/>}/>
     <Route path="/contact" element={<Contact click={click}/>}/>
     </Routes>
     </BrowserRouter>

    <button onClick={useCounterStore((state)=>state.increment)}>Increment</button>
    <button onClick={useCounterStore((state)=>state.decrement)}>Decrement</button>

    <h2>Home page :You clicked {click} times</h2>
    </>
  );
}


import React from 'react';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

export function About(){
return(
  <>
  <h1>this is from about page</h1>
  </>
);
}
export function Contact(){
  return(
    <>
    <h1>this is contact page!</h1>
    </>
  );
}
export default function App(){
  return(
    <>
    <BrowserRouter>

    <Link to="/Contact">Contact</Link>
    <Link to="/About">About</Link>

    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />

    </Routes>
    </BrowserRouter>
    </>
  );
}
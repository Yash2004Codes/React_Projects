import { useState } from "react";


export default function Middle(){
    
const [email,setEmail] = useState("");
const [mycheck,setMyCheck] = useState(false);


function handleEmail(event){
    
    setEmail(event.target.value);
}

function updatemyCheckBox(event){
setMyCheck(event.target.checked);
}

function validateInput(){

    if(!email)
        window.alert("plz enter your email");
    else if(!mycheck)
        window.alert("plz agree our tersn and dsd");
    else
    window.alert("success !");
}


    return(
        <>
        <form className="myform"> 
        <input 
        id="myemail" 
        type="email"
        placeholder="Enter Your Email Address"
        value={email}
        onChange={handleEmail}
        ></input>
        <button 
        id="subscribe"
        onClick={validateInput}
        >Subscribe</button>
    
        </form>

     <div className="div3">
            
            <label>
                <input 
                id="myCheckBox"
                checked ={mycheck}
                type="checkbox"
                onChange={updatemyCheckBox}
                ></input>
                Agree to our terms and conditions !
            </label>

        </div>
        </>
    );
}
import { useState } from "react";

export function DisplayList(){
    return(
        <>
        </>
    );
}

export default function DailyExpense(){
    const [target,setTarget] = useState(0);
    const [task,setTask] = useState(null);
    return(

        <>
        <div>

        
        <div>
        <h1>Good Morning! Yash </h1>
        <h4>Date:todays date</h4>
        <label>Set todays target</label>
        <input 
        type="number"
        value={target}
        placeholder="enter expense"></input>
        <button onClick={(e)=>setTarget(e.target.value)}>Set Target</button>
        <h3>Your todays Target :Rs{target}</h3>
        </div>

        <div>
        <label>Enter Expense incurred :</label>
        <input 
        type="number"
        value={target}
        placeholder="enter expense"></input>
        <button>Add Expense</button>
        </div>
        </div>

        </>
    );
}

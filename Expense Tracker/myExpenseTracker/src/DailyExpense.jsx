import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function DailyExpense(){
    const [object,setObject] = useState([]);
    const [target,setTarget] = useState(0);
    const [task,setTask] = useState("");
    const [expense,setExpense] = useState(0);
    const [btn1,setbtn1] = useState(false);
    //const [btn2,setbtn2] = useState(false);
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BF6"];
    const navigate = useNavigate();

    function updateArrayofObjects(){
        setObject(
          (prev)=> [ ...prev,{task,expense}]

        );
        //setTarget(0);
        setTask("");
        setExpense(0);
        
    }
    function removeObjects(index){
        setObject(object.filter((_, i) => i !== index));
    }
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
        placeholder="enter expense" onChange={(e)=>setTarget(e.target.value)}></input>
        <button onClick={()=>setbtn1(true)}>Set Target</button>
        { (btn1 && <h2>Your todays target :{target}</h2>)}
        </div>

        <div>
        <label>Enter task</label>
        <input type="text" placeholder="enter task" value={task} onChange={(e)=>setTask(e.target.value)}></input>
        <label>Enter Expense incurred :</label>
        <input 
        type="number"
        value={expense}
        placeholder="enter expense" onChange={(e)=>{setExpense(Number(e.target.value)) } }></input>
        <button onClick={()=>{updateArrayofObjects();} }>Add Expense</button>
        
        </div>


        {
            object.length>0 && 
            <div>
        <ul>
            {
                object.map( (item,index)=>(
                    
                    <li key={index}>task:{item.task}  Expense:{item.expense}
                    <button onClick={()=>removeObjects(index)}>Delete</button></li>
                   
                ))
            }
        </ul>
        </div>
        }

        {object.length > 0 && (
        <button onClick={() => navigate("/another", { state: object ,COLORS})}>
          Go to Chart
        </button>
      )}

        </div>        
        </>
    );
}

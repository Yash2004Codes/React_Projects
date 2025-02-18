import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export function ExpenseChart({ data, colors }) {
    if (data.length === 0) return <h3>No expenses recorded yet.</h3>;

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                dataKey="expense"
                nameKey="task"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                label
            >
                {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
}
export function DisplayList({object}){
    return(
        <>
        <ul>
            {
                object.map( (item,index)=>(
                    
                <li key={index}>{item.task}  {item.expense}</li>
                    
                ))
            }
        </ul>
        </>
    );
}

export default function DailyExpense(){
    const [object,setObject] = useState([]);
    const [target,setTarget] = useState(0);
    const [task,setTask] = useState("");
    const [expense,setExpense] = useState(0);
    const [btn1,setbtn1] = useState(false);
    const [btn2,setbtn2] = useState(false);
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BF6"];

    function updateArrayofObjects(){
        setObject(
           [ ...object,{task,expense}]

        );
        //setTarget(0);
        setTask("");
        setExpense(0);
        
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
        placeholder="enter expense" onChange={(e)=>{Number(setExpense(e.target.value) )} }></input>
        <button onClick={()=>{setbtn2(true);updateArrayofObjects();} }>Add Expense</button>
        { (btn2 && <DisplayList object={object}/> && <ExpenseChart data={object} colors={COLORS}/>)}
        </div>
        </div>
     

        
        </>
    );
}

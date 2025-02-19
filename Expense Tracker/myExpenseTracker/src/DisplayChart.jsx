import { useLocation } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useNavigate } from "react-router-dom";

export default function DisplayChart(){

 const navigate = useNavigate();
  const location = useLocation();
  const data = location.state || []; // ✅ Get passed data

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BF6"];

    return(
        <>
        <div>
      <h2>Expense Chart</h2>
      {data.length === 0 ? (
        <p>No expenses to display</p>
      ) : (
        <PieChart width={400} height={400}>
          <Pie data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="expense">
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}

        <button onClick={() => navigate("/")}>
          Go Back
        </button>
    </div>
        </>
    );
}
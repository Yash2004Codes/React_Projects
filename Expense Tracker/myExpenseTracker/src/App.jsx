import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DailyExpense from './DailyExpense';
import DisplayChart from "./DisplayChart";

export default function App(){
  return(
    <>
   <Router>
            <nav>
                <Link to="/">Home</Link> | <Link to="/another">Display Charts</Link>
            </nav>
            <Routes>
                <Route path="/" element={<DailyExpense/>} />
                <Route path="/another" element={<DisplayChart/>} />
            </Routes>
      </Router>
    </>
  );
}

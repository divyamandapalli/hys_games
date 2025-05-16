import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Budjet from "./assets/Budjet";
import SnakesAndLadders from "./SnakeandLadder";
import SevenUpSevenDownGame from "./SevenUpSevenDownGame";
import "./assets/Budjet.css";
import Signup from "./Signup";
import BMI from "./BMI"
import Stopwatch from "./Stopwatch"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/budjet" element={<Budjet />} />
        <Route path="/snakesandladders" element={<SnakesAndLadders />} />
        <Route path="/sevenupsevendowngame" element={<SevenUpSevenDownGame />} />
        <Route path="/BMI" element={<BMI />}/>
        <Route path="/Stopwatch" element={<Stopwatch/>}/>
      </Routes>
    </Router>
  );
}

export default App;



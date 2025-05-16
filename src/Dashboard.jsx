import { Link } from "react-router-dom";
import budgetGif from "./assets/exp.gif";
import snakeGif from "./assets/snake.gif";
import ladderGif from "./assets/ladder.gif"
import sevenGif from "./assets/seven.gif";
import BMI from "./assets/bmi.gif"
import bgVideo from "./assets/37585-414024825_small.mp4";
import backgroundmusic from "./assets/backgroundmusic.mp3";
import stopwatch from "./assets/clock.gif"

function Dashboard() {
  return (
    <div className="dashboard-container">
      <video autoPlay loop muted className="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <audio autoPlay loop controls>
     <source src={backgroundmusic} type="audio/mpeg" />
    </audio>
      <div className="dashboard-content">
        <h2>Welcome!</h2>
        <ul className="game-list">
          <li>
            <Link to="/Budjet">
              <img src={budgetGif} alt="Expenditure" />
              Expenditure Calculator
            </Link>
          </li>
          <li>
            <Link to="/Stopwatch">
            <img src={stopwatch} alt="StopWatch" />
            StopWatch
            </Link>
          </li>
          <li>
            <Link to="/SnakesAndLadders">
              <img src={snakeGif} alt="Snake and Ladder" />
               <img src={ladderGif} alt="Snake and Ladder" />

              Snake and Ladder
            </Link>
          </li>
          <li>
            <Link to="/SevenUpSevenDownGame">
              <img src={sevenGif} alt="Seven Up Down" />
              Seven Up Seven Down
            </Link>
          </li>
          <li>
            <Link to ="/BMI">
            <img src ={BMI} alt="BMIGif" />
            BMI Calculator
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;


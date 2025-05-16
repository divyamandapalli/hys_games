import React, { useState, useRef } from "react";
import "./SnakesAndLadders.css";

const TILE_COUNT = 100;
const ladderMoves = {
  4: 25,
  13: 46,
  33: 49,
  42: 63,
  50: 69,
  62: 83,
  74: 92,
};
const snakeMoves = {
  27: 5,
  40: 3,
  43: 18,
  54: 31,
  66: 45,
  76: 58,
  89: 53,
  99: 41,
};

const playersColors = ["red", "blue", "green"];

const SnakesAndLadders = () => {
  const [positions, setPositions] = useState([0, 0, 0]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [animation, setAnimation] = useState(null); 
  const boardRef = useRef([]);

  const playSound = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  const handleRoll = () => {
    if (gameOver) return;

    const random = Math.floor(Math.random() * 6) + 1;
    let newPos = positions[currentPlayer] + random;

    if (newPos > 100) newPos = positions[currentPlayer];

    if (ladderMoves[newPos]) {
      newPos = ladderMoves[newPos];
      playSound("src/assets/ladder sound.mp3");
      setAnimation("ladder");
      setTimeout(() => setAnimation(null), 3000);
    } else if (snakeMoves[newPos]) {
      newPos = snakeMoves[newPos];
      playSound("src/assets/snakesound.mp3");
      setAnimation("snake");
      setTimeout(() => setAnimation(null), 3000);
    }

    const updatedPositions = [...positions];
    updatedPositions[currentPlayer] = newPos;
    setPositions(updatedPositions);

    if (newPos === 100) {
      alert(`Player ${currentPlayer + 1} has won the game!`);
      setGameOver(true);
      return;
    }

    if (random !== 6) {
      setCurrentPlayer((currentPlayer + 1) % 3);
    }
  };

  const renderTiles = () => {
    const tiles = [];
    let rowStart = 91;
    let rowEnd = 100;
    let rowDirection = -1;

    for (let row = 0; row < 10; row++) {
      const rowTiles = [];
      for (let i = rowStart; i <= rowEnd; i++) {
        const tileIndex = rowDirection === 1 ? i : rowEnd - (i - rowStart);

        const playersOnTile = positions.map((pos, index) =>
          pos === tileIndex ? (
            <div
              key={index}
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: playersColors[index],
                margin: "1px",
                borderRadius: "50%",
              }}
            ></div>
          ) : null
        );

        rowTiles.push(
          <div
            key={tileIndex}
            className={`tile tile${tileIndex}`}
            style={{
              border: "1px solid rgb(0, 0, 0)",
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              flexDirection: "column",
            }}
          >
            {tileIndex}
            <div style={{ display: "flex", gap: "2px" }}>{playersOnTile}</div>
          </div>
        );
      }
      tiles.push(...rowTiles);
      rowStart -= 10;
      rowEnd -= 10;
      rowDirection *= -1;
    }

    return tiles;
  };

  return (
    <div className="SMain">
      <div className="Shead">!!!!!! Snake And Ladder !!!!!!</div>
      <div style={{ padding: "20px", display: "flex", gap: "40px" }}>
       
        <div
          className="Scontainer"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(10, 50px)",
            gridTemplateRows: "repeat(10, 50px)",
            backgroundImage: "url('src/assets/snakeb.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "500px 500px",
          }}
        >
          {renderTiles()}
        </div>

        
        <div style={{ width: "200px", height: "200px" }}>
          {animation === "ladder" && (
            <img
              src="src/assets/ladder.gif"
              alt="Ladder Animation"
              style={{ width: "500px", height: "500px" }}
            />
          )}
          {animation === "snake" && (
            <img
              src="src/assets/snake.gif"
              alt="Snake Animation"
              style={{ width: "500px", height: "500px" }}
            />
          )}
        </div>
      </div>

      
      <div style={{ marginTop: "20px" }}>
        {[0, 1, 2].map((index) => (
          <button
            className="btn1"
            key={index}
            onClick={() => handleRoll()}
            disabled={currentPlayer !== index || gameOver}
            style={{
              display: currentPlayer === index && !gameOver ? "inline-block" : "none",
              margin: "5px",
              fontSize: "14px",
              
            }}
          >
            Player {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SnakesAndLadders;


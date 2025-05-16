import React, { useState } from 'react';
import '/src/SnakesAndLadders.css'

const diceImages = [
  'src/assets/D1.png',
  'src/assets/D2.png',
  'src/assets/D3.png',
  'src/assets/D4.png',
  'src/assets/D5.png',
  'src/assets/D6.png',
  'src/assets/won.jpeg'
];

const SevenUpSevenDownGame = () => {
  const [choice, setChoice] = useState('');
  const [betAmount, setBetAmount] = useState('');
  const [dice, setDice] = useState([0, 0]);
  const [message, setMessage] = useState('');

  const handleChoice = (selected) => {
    setChoice(selected);
  };

  const rollDice = () => {
    if (!choice || !betAmount || isNaN(betAmount)) {
      alert("Please select a choice and enter a valid bet amount.");
      return;
    }
    const d1 = Math.floor(Math.random() * 6);
    const d2 = Math.floor(Math.random() * 6);
    const total = d1 + d2 + 2;
    setDice([d1, d2]);

    const bet = parseInt(betAmount);
    let result = '';

    if (total === 7 && choice === '7') {
      result = `You won the game! You gain: ₹${bet * 3}`;
      
      new Audio('src/assets/ladder sound.mp3').play();
       const img = new Image();
      img.src = 'src/assets/won.jpeg';
      img.style.position = 'absolute';
      img.style.top = '10px';
      img.style.right = '10px';
      img.style.width = '200px';
      img.style.height = '200px';
      document.body.appendChild(img);
      document.body.appendChild(img);
    } else if (total < 7 && choice === '7down') {
      result = `You won the game! You gain: ₹${bet * 2}`;
      new Audio('src/assets/ladder sound.mp3').play();
       const img = new Image();
      img.src = 'src/assets/won.jpeg';
      img.style.position = 'absolute';
      img.style.top = '10px';
      img.style.right = '10px';
      img.style.width = '200px';
      img.style.height = '200px';
      document.body.appendChild(img);
      document.body.appendChild(img);
    } else if (total > 7 && choice === '7up') {
      result = `You won the game! You gain: ₹${bet * 2}`;
      new Audio('src/assets/ladder sound.mp3').play();
      const img = new Image();
      img.src = 'src/assets/won.jpeg';
      img.style.position = 'absolute';
      img.style.top = '10px';
      img.style.right = '10px';
      img.style.width = '200px';
      img.style.height = '200px';
      document.body.appendChild(img);
    } else {
      result = 'You lost the game!';
      new Audio('src/assets/losing-horn-313723.mp3').play();
      const img = new Image();
      img.src = 'src/assets/betterluck.jpeg';
      img.style.position = 'absolute';
      img.style.top = '10px';
      img.style.right = '10px';
      img.style.width = '200px';
      img.style.height = '200px';
      document.body.appendChild(img);
    }

    setMessage(result);
  };

  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'Arial',
        backgroundImage: 'url("src/assets/back1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem', color: '#C0C0C0' }}>Seven Up Seven Down Game</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <button
          onClick={() => handleChoice('7up')}
          style={{ padding: '1rem', backgroundColor: choice === '7up' ? '#ff704d' : '#ffa07a', color: 'white', border: 'none', borderRadius: '8px' }}>
          7 UP
        </button>
        <button
          onClick={() => handleChoice('7')}
          style={{ padding: '1rem', backgroundColor: choice === '7' ? '#ff704d' : '#ffa07a', color: 'white', border: 'none', borderRadius: '8px' }}>
          7
        </button>
        <button
          onClick={() => handleChoice('7down')}
          style={{ padding: '1rem', backgroundColor: choice === '7down' ? '#ff704d' : '#ffa07a', color: 'white', border: 'none', borderRadius: '8px' }}>
          7 Down
        </button>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h2 style={{ color: 'white' }}>Enter bet amount to win the challenge!!!!</h2>
        <input
          type="text"
          value={betAmount}
          onChange={(e) => setBetAmount(e.target.value)}
          style={{ fontSize: '1.2rem', padding: '0.5rem', width: '200px', marginTop: '1rem' }}
        />
        <br />
        <button
          onClick={rollDice}
          style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', fontSize: '1rem', borderRadius: '50px', border: 'none', backgroundColor: '#e60039', color: 'white' }}>
          Start the Game
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
        <img src={diceImages[dice[0]]} alt="dice1" width="100" height="100" />
        <img src={diceImages[dice[1]]} alt="dice2" width="100" height="100" />
      </div>

      {message && (
        <h2 style={{ textAlign: 'center', marginTop: '2rem', color: '#4a148c' }}>{message}</h2>
      )}
    </div>
  );
};

export default SevenUpSevenDownGame;


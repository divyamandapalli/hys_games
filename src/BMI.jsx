
import { useState } from 'react'


function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [darkMode, setDarkMode] = useState(false); 

  let imgSrc;
  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 25) {
      imgSrc = ("https://img.freepik.com/premium-photo/pixar-cartoon-cute-little-skinny-girl_954932-3379.jpg?w=826");
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = "https://img.freepik.com/free-vector/cute-female-student-cartoon-character_1308-134605.jpg?w=360";
    } else {
       imgSrc = "https://img.freepik.com/premium-photo/fat-girl-cartoon-character_862489-5225.jpg";
    }
  }

  let calcBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height) * 703);
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  const Mode = {
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black'
  };

  return (
    <div style={Mode}>
      {/* <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button> */}

      <div className='app'>
        <div className="container">
            <center>
          <h2 className='center1'>BMI Calculator</h2>
          <form onSubmit={calcBmi}>
            <div>
              <label>Weight (lbs)</label><br />
              <input value={weight} onChange={(event) => setWeight(event.target.value)} />
            </div>
            <div>
              <label>Height (in meters)</label><br />
              <input value={height} onChange={(event) => setHeight(event.target.value)} />
            </div>
            <div>
              <button className='btn' type='submit'>Submit</button>
              <button className='btn btn-outline' type='button' onClick={() => { setWeight(0); setHeight(0); setBmi(''); setMessage(''); }}>Reset</button>
            </div>
          </form>
          <div className='center'>
            <h3 className='center1'>Your BMI is: {bmi}</h3>
            <p>{message}</p>
            <div className='img-container'>
              <center><img src={imgSrc} alt="" /></center>
            </div>
          </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export default App;


import { useState } from 'react';
import './App.css';

function App() {
  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState('');
  const [message,setMessage] = useState('');
  const [imgg,setImgg] = useState('/thinfat.png')
  

  let calcBmi = (e) => {
    e.preventDefault();
    if(weight===0 || height===0){
      alert('Please enter a valid weight and height')
    }
    else{
      let bmi = (weight/(height*height))
    
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage('Oops! You are Underweight')
        setImgg('/thin.png')
        
      }else if(bmi>=25 && bmi<30){
        setMessage('Great! You are Fit')
        setImgg('/fit.png')
      }else{
        setMessage('Oops! You are overweight')
        setImgg('/fat.png')
        
      }
    }
  }

  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form action="" onSubmit={calcBmi}>
          <div className='wt'>
            <label htmlFor="">Weight (kg)</label>
            <input type="text" placeholder='Enter Your Weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div className='wt'>
            <label htmlFor="">Height (mtr)</label>
            <input type="text" placeholder='Enter Your Height' value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className="btn btn-outline" onClick={reload} type='submit'>Reload</button>
          </div>
          <div className="center">
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
            <img src={imgg} alt="" />
            
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

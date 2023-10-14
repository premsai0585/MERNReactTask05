import './App.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);
  const [dob, setDob] = useState('');
  const handle = () => {
    const dobS = new Date(dob);
    const today = new Date();
    const ageString = today.getFullYear() - dobS.getFullYear() - 
               (today.getMonth() < dobS.getMonth() || 
               (today.getMonth() === dobS.getMonth() && today.getDate() < dobS.getDate()));
    setAge(ageString)
  }
  return (
    <div className="container App mt-5">
      <h1>Age Calculator</h1>
      <div className='d-flex flex-column align-items-center mt-4'>
        <label htmlFor="dob"><b>Input your date of birth</b></label>
        <input id='dob' className='form-control mt-2' type='date' onChange={(e)=>{setDob(e.target.value)}} />
      </div>
      <button className='btn btn-primary mt-2' onClick={handle}>Calculate Age</button>
      <h2 className='mt-4'>You are {age} years old</h2>
    </div>
  );
}

export default App;

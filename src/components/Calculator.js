import React, { useState } from 'react';
import {BmiDetails} from './BmiDetails';
import '../App.css';

export const Calculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [reset, setReset] = useState(false);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);
  };

  const handleReset = () =>{
    setHeight('');
    setWeight('');
    setBMI(null);
  }

  return (
    <div>

      <h1 className='headerText flex justify-center items-center py-4 font-bold text-8xl'>HEALTHY BMI</h1>

    <div className='flex justify-center items-center mt-12'>
        <div className=''>

            <div className='flex flex-col'>
                <label>
                    Height (cm):
                </label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>

            <div className='flex flex-col'>
                <label>
                    Weight (kg):
                </label>
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>

            <div>
                <button onClick={calculateBMI}>Calculate BMI</button>
            </div>

            <div>
                {bmi !== null && <BmiDetails bmi={bmi} />}
            </div>

            <div>
                <button onClick={handleReset}>Reset</button>
            </div>

            </div>
        </div>

    </div>
  );
};

 

import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate,  } from 'react-router-dom';
import {BmiDetails} from './BmiDetails';
import Typed from 'typed.js';
import '../App.css';

export const Calculator = ({bmi, setBMI}) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  // const [bmi, setBMI] = useState(null);
  const [reset, setReset] = useState(false);

  const navigate = useNavigate();

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);
    navigate('/bmidetails')
  };

  const handleReset = () =>{
    setHeight('');
    setWeight('');
    setBMI(null);
  }

  const bmiRef = useRef(null);

  useEffect(() => {
    // Options for the Typed.js instance
    const options = {
      strings: ['BMI'],
      typeSpeed: 400,  // Typing speed in milliseconds
      backSpeed: 150,  // Backspacing speed in milliseconds
      loop: true,     // Loop the animation
      showCursor: false,
    };

    // Initialize Typed.js
    const typed = new Typed(bmiRef.current, options);

    // Cleanup function to destroy Typed.js when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>

      {/* <h1 className='headerText flex justify-center items-center py-4 font-bold text-8xl'>HEALTHY BMI</h1> */}
      <h1 className='fontFamily flex justify-center items-center py-4 font-bold text-8xl'>
      HEALTHY <span className='mx-4 text-white' ref={bmiRef} />
    </h1>

    <div className='flex justify-center items-center mt-12  text-center'>
        <div className=''>

            <div className='flex flex-col mx-16'>

                <div className='flex items-center'>
                    <label className='text-3xl fontFamily'>Height</label>
                    <span>(cm)</span>
                </div>
                     
                <input className='border-none outline-none bg-transparent  focus:border-blue-500 p-2 text-gray-700 text-3xl font-semibold' style={{ borderBottom: '1px solid black' }} type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                 
            </div>

            <div className='flex flex-col mx-16'>

                <div className='flex items-center'>
                    <label  className='text-3xl fontFamily'>Weight</label>
                    <span>(kg)</span>
                </div>
                    
            
                    <input className='border-none outline-none bg-transparent  focus:border-blue-500 p-2 text-gray-700 text-3xl font-semibold' style={{ borderBottom: '1px solid black' }} type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>

        
            
            <div>
                <button className='bgColor fontFamily rounded-md px-8 py-2 mt-8' onClick={calculateBMI}>Calculate BMI</button>
            </div>
      
            


            <div>
                <button className='text-2xl text-gray-400 mt-2' onClick={handleReset}>Reset</button>
            </div>

            </div>
        </div>

        
            
                {/* <div className=' mt-[300px]'>
                    {bmi !== null && <BmiDetails bmi={bmi} />}
                </div> */}
            
            


            
    </div>

    
  );
};

 

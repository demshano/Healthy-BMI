import React from 'react'

export const BmiDetails = ({bmi}) => {
    const getHealthAdvice = () => {
        // Provide health advice based on BMI range
        // You can customize this based on your requirements
        if (bmi < 18.5) {
          return 'You are underweight. Consider eating more nutritious food.';
        } else if (bmi >= 18.5 && bmi < 24.9) {
          return 'You have a healthy weight. Keep it up!';
        } else if (bmi >= 25 && bmi < 29.9) {
          return 'You are overweight. Consider exercising and eating a balanced diet.';
        } else {
          return 'You are obese. Consult with a healthcare professional for personalized advice.';
        }
      };
    
      return (
        <div>
          <h2>Your BMI is {bmi}</h2>
          <p>{getHealthAdvice()}</p>
        </div>
      );
    };



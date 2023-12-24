import React from 'react'

export const Bmi1 = ({bmiValue, bmi}) => {
    let content='';
    let contentLabel='';

    
        if(bmiValue===1)
        {
            content=`You are underweight, which may indicate insufficient nutrition. 
            Focus on a well-balanced diet rich in proteins, healthy fats, and complex carbohydrates. 
            Consider consulting with a nutritionist to create a personalized meal plan. Regular exercise can 
            help build muscle mass and overall health.
            Normal Weight`;
            contentLabel="Underweight";
        }
        else if(bmiValue===2)
        {
            content=`Congratulations! You have a healthy weight. Maintain a balanced diet that includes a 
            variety of nutrients. Engage in regular physical activity to support cardiovascular health, muscle
             strength, and overall well-being. Prioritize a mix of fruits, vegetables, whole grains, and lean 
             proteins for optimal nutrition.`;
            contentLabel="Normal Weight";
        }
        else if(bmiValue===3)
        {
            content=`You are overweight, which may increase the risk of chronic conditions.
             Adopt a well-rounded approach by incorporating regular exercise and making dietary adjustments. 
             Focus on portion control, emphasize nutrient-dense foods, and limit processed sugars and saturated 
             fats. Consult with a healthcare professional for personalized guidance.`;
            contentLabel="Overweight";
        }
        else
        {
            content=`You are in the obese category, indicating a higher risk of health issues. 
            Seek guidance from healthcare professionals to create a comprehensive plan. Consider a 
            balanced diet with portion control, regular physical activity, and, if necessary, medical 
            intervention. Addressing obesity is crucial for overall health and well-being.`;
            contentLabel="Obese";
        }
    
  return (
    <div>
            <h2>Your BMI is {bmi}</h2>
            <label htmlFor="bmistatus">{contentLabel}</label>
            <p>{content}</p>
    </div>
  )
}

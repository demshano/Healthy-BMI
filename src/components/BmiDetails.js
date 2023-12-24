import { Bmi1 } from "./bmidetails/Bmi1";

export const BmiDetails = ({bmi, setBMI}) => {

  let bmiValue=null;
    const getHealthAdvice = () => {
        // Provide health advice based on BMI range
        // You can customize this based on your requirements
        if (bmi < 18.5) {
        //  return 'You are underweight. Consider eating more nutritious food.';
        bmiValue=1;
        return <Bmi1  bmiValue={bmiValue} bmi={bmi}/>
        } else if (bmi >= 18.5 && bmi < 24.9) {
          bmiValue=2;
          return <Bmi1  bmiValue={bmiValue} bmi={bmi}/>
        } else if (bmi >= 25 && bmi < 29.9) {
          bmiValue=3;
          return <Bmi1  bmiValue={bmiValue} bmi={bmi}/>
        } else {
          bmiValue=4;
          return <Bmi1  bmiValue={bmiValue} bmi={bmi}/>
        }
      };
    

      console.log(bmi);
      return (
        <div>
          {getHealthAdvice()}
        
        </div>
          
      );
    };



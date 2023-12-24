import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Calculator } from "./components/Calculator";
import { BmiDetails } from "./components/BmiDetails";
function App() {

const [bmi, setBMI] = useState(null);

  return (
    <div className="App">

    <Routes>

      <Route path='/' element={<Calculator bmi={bmi} setBMI={setBMI}/>} />
      <Route path='bmidetails' element={<BmiDetails bmi={bmi} setBMI={setBMI}/>}/>

    </Routes>
      
    </div>
  );
}

export default App;

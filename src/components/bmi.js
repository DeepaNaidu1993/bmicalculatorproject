import React, { useState } from 'react';

function Bmicalculator() {
  const [Weightval, setWeightVal] = useState();
  const [Heightval, setHeightVal] = useState();
  const [bmi, setBmi] = useState();
  const [bmiStatus, setbmiStatus] = useState();

  const handleWeightValChange = (event) => {
    setWeightVal(event.target.value);
  };

  const handleHeightValChange = (event) => {
    setHeightVal(event.target.value);
  };

  const HandleCalculatebmi = () => {
    let NewHeightVal = Heightval / 100;
    NewHeightVal = NewHeightVal * NewHeightVal;
    const bmiVal = Math.ceil(Weightval / NewHeightVal);
    if (bmiVal <= 18.5) {
      setbmiStatus('UnderWeight');
    } else if (bmiVal > 18.5 && bmiVal <= 25) {
      setbmiStatus('Normal');
    } else {
      setbmiStatus('OverWeight');
    }
    setBmi(bmiVal);
  };

  const ResetFields = () => {
    setHeightVal('');
    setWeightVal('');
    setBmi('');
  };

  return (
    <div className="container">
      <div className="toplayer">
        <div class="header">
          <h1>Calculate Your BMI</h1>
        </div>

        <div className="text1">
          <label>Weight (in kg):</label>
          <input
            type="number"
            value={Weightval}
            onChange={handleWeightValChange}
          ></input>
        </div>
        <div className="text1">
          <label>Height (in cm):</label>
          <input
            type="number"
            value={Heightval}
            onChange={handleHeightValChange}
          ></input>
        </div>
        <div className="btn">
          <button onClick={ResetFields}>Reset</button>
          <button onClick={HandleCalculatebmi}>Calculate</button>
        </div>

        {bmi ? (
          <p className="text2">
            Your BMI is: {bmi} and you are {bmiStatus}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default Bmicalculator;

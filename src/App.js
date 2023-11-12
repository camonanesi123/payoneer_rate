import logo from './logo.svg';
import './App.css';
import background from "./img/unnamed.jpg";
import background1 from "./img/header1.png";
import background2 from "./img/header2.png";
import background3 from "./img/header3.png";
import background4 from "./img/header4.png";
import ExchangeRateComponent from './ExchangeRateComponent';
import React, { useState } from 'react';

const App = () =>{
  const [appData, setAppData] = useState(null);

  const handleDataReceived = (data) => {
    setAppData(data); // 在这里处理来自子组件的数据
  };
  
  return (
    <>
<div class="container">
  <div class="item">
    <img src={background1} alt="Image 1" />
  </div>
  <div class="item">
    <img src={background2} alt="Image 2" />
    <span className="overlay-text"> <ExchangeRateComponent onDataReceived={handleDataReceived} /></span>
  </div>
  <div class="item">
    <img src={background3} alt="Image 2" />
    <span className="overlay-text"> {appData !== null && appData !== undefined ? (50 * appData).toFixed(2) : 'N/A'} CNY</span>
  </div>
  <div class="item">
    <img src={background4} alt="Image 2" />
  </div>
  </div>
    </>
  );
}

export default App;

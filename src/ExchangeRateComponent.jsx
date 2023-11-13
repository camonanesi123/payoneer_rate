// ExchangeRateComponent.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ExchangeRateComponent = ({ onDataReceived }) => {
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://web.juhe.cn/finance/exchange/rmbquot?type=0&bank=3&key=21d1afa89475cfed5d9cc42e069930b6'; // 使用代理路径

    axios.get(apiUrl)
      .then(response => {
        const usdToCnyRate = response.data.result[0].data1['bankConversionPri'];
        setExchangeRate(usdToCnyRate*0.01);
        onDataReceived(usdToCnyRate*0.01);
      })
      .catch(error => console.error('获取数据出错:', error));
  }, [onDataReceived]);

  return (
        <p>1 USD = {exchangeRate !== null ? (0.98 * exchangeRate).toFixed(2) : 'N/A'} CNY</p>
  );
};
ExchangeRateComponent.propTypes = {
  onDataReceived: PropTypes.func.isRequired,
};

export default ExchangeRateComponent;

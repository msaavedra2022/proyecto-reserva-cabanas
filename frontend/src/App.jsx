import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [cabins, setCabins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/cabanas');
      setCabins(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Cabañas</h1>
      <ul>
        {cabins.map(cabin => (
          <li key={cabin.id}>{cabin.name}</li>
        ))}
      </ul>
    </div>
  );
};


export default App
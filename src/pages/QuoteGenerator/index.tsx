import * as React from 'react';
import { useState } from 'react';


const QuoteGenerator: React.FC = () => {
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857',
  ];

  const [quotes, setQuotes] = useState([]);
  const [color, setColor] = useState(colors);

  return (
    <>
      <div className="quotes__container">
        <div></div>
      </div>
    </>
  );
};

export default QuoteGenerator;

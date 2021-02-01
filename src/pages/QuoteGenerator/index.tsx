import { useState, useEffect } from 'react';
import QuoteItem from '../../components/Quote/item';
import './style.scss';
import { getAllQuotes } from '../../services/quotes';

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

  const [quotesList, setQuotesList] = useState([]);

  const [color, setColor] = useState('');

  const [text, setText] = useState('');

  const [author, setAuthor] = useState('');

  const getRandomColor = (): number => {
    return ~~(Math.random() * colors.length);
  };

  const getRandomQuote = (): number => {
    return ~~(Math.random() * quotesList.length);
  };

  const setRandomQuote = (): void => {
    const res: any = quotesList[getRandomQuote()];
    const newColor = colors[getRandomColor()];
    console.log("random quote", getRandomQuote());
    console.log("res", res);
    console.log("newColor", newColor)
    setText(res?.quote);
    setAuthor(res?.author);
    setColor(newColor);
  };

  const handleCallApi = async () => {
    const res = await getAllQuotes();
    console.log(res);
    setQuotesList(res);
  };
  
  useEffect(() => {
    handleCallApi();
    
  }, []);

  useEffect(() => {
    setRandomQuote();
  }, []);

 
  return (
    <>
      {console.log('quotes', text)}
      <div style={{backgroundColor: color}} className="quotes__container">
        {/* <div>Quote Generator</div> */}
        <QuoteItem author={author} text={text} />
      </div>
    </>
  );
};

export default QuoteGenerator;

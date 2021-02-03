import { useState, useEffect, useRef } from 'react';
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

  const quoteItemRef = useRef(null);

  useEffect(() => {
    // console.log('quotesList', quotesList);
    const handleCallApi = async () => {
      const res: any = await getAllQuotes();
      console.log('res', res);
      setQuotesList(res);
      console.log('quotesList', quotesList);
    };
    handleCallApi();
  }, []);

  useEffect(() => {
    handleRandomQuote();
  }, []);

  const getRandomColor = (): number => {
    return ~~(Math.random() * colors.length);
  };

  const getRandomQuote = (): number => {
    return ~~(Math.random() * quotesList.length);
  };

  const handleRandomQuote = (): void => {
    const indexColor: number = getRandomColor();
    const indexQuote: number = getRandomQuote();

    console.log('color index: ', indexColor);
    console.log('quote index: ', indexQuote);

    const quoteObj: any = quotesList[indexQuote];
    const newColor: string = colors[indexColor];

    console.log('quoteObj', quoteObj);

    if (quoteObj) {
      setText(quoteObj?.quote);
      setAuthor(quoteObj?.author);
    }
    setColor(newColor);
  };

  return (
    <>
      <div style={{ backgroundColor: color }} className="quotes__container">
        <QuoteItem
          author={author}
          getNewQuote={handleRandomQuote}
          color={color}
          text={text}
        />
      </div>
    </>
  );
};

export default QuoteGenerator;

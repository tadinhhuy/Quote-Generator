import { useState, useEffect, useRef } from 'react';
import QuoteItem from '../../components/Quote/item';
import './style.scss';
import { getAllQuotes } from '../../services/quotes';

const QuoteGenerator: React.FC = () => {
  const [quotesList, setQuotesList] = useState<object[]>([]);

  const [quote, setQuote] = useState<object>({});

  const [color, setColor] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    handleCallApi();
  }, []);

  const getRandomColor = (): string => {
    const LETTERS = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += LETTERS[~~(Math.random() * LETTERS.length)];
    }
    return color;
  };

  const getRandomQuote = (): number => {
    return ~~(Math.random() * quotesList.length);
  };

  const handleCallApi = async (): Promise<void> => {
    try {
      const quotes: object[] = await getAllQuotes();
      handleRandomQuote(quotes);
      setQuotesList(quotes);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRandomQuote = (quoteParam?: any): void => {
    quoteRef.current?.animate(
      [
        { opacity: 0, transition: 500 },
        { opacity: 1, transition: 500 },
      ],
      {
        duration: 1500,
        easing: 'ease-in-out',
      }
    );

    const newColor: string = getRandomColor();
    const indexQuote: number = getRandomQuote();

    const isQuotesListEmpty: boolean =
      quotesList !== undefined && quotesList.length === 0;

    const quoteObj: object = isQuotesListEmpty
      ? quoteParam[indexQuote]
      : quotesList[indexQuote];

    setQuote(quoteObj);
    setColor(newColor);
  };

  return (
    <>
      <div style={{ backgroundColor: color }} className="quotes__container">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <QuoteItem
            quote={quote}
            getNewQuote={handleRandomQuote}
            color={color}
            quoteRef={quoteRef}
          />
        )}
      </div>
    </>
  );
};

export default QuoteGenerator;

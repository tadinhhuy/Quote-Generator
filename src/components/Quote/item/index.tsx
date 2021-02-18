import { RefObject } from 'react';
import './style.scss';

type Props = {
  quote: any;
  color: string;
  getNewQuote: () => void;
  quoteRef?: RefObject<HTMLDivElement>;
};

const QuoteItem: React.FC<Props> = ({
  color,
  getNewQuote,
  quoteRef,
  quote,
}) => {
  return (
    <>
      <div className="quote__box">
        <div ref={quoteRef} className="quote__content">
          <div className="quote__content__text" style={{ color: color }}>
            {quote?.quote}
          </div>
          <div className="quote__content__author">
            <div
              className="quote__content__author--align"
              style={{ color: color }}
            >
              {quote?.author}
            </div>
          </div>
        </div>
        <div className="quote__footer">
          <div className="quote__footer__button">
            <button style={{ backgroundColor: color }} onClick={getNewQuote}>
              New Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default QuoteItem;

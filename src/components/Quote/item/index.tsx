import { RefObject, useRef } from 'react';
import './style.scss';

type Props = {
  text: string;
  author: string;
  color: string;
  getNewQuote: () => void;
  quoteItemRef?: RefObject<HTMLDivElement>;
};

const QuoteItem: React.FC<Props> = ({
  text,
  author,
  color,
  getNewQuote,
  quoteItemRef,
}) => {
  return (
    <>
      {console.log('', quoteItemRef)}
      <div className="quote__box">
        <div ref={quoteItemRef} className="quote__content">
          <div className="quote__content__text" style={{ color: color }}>
            {text}
          </div>
          <div className="quote__content__author">
            <div className="quote__author--align" style={{ color: color }}>
              {author}
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

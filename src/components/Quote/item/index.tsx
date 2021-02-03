import './style.scss';

type Props = {
  text: string;
  author: string;
  color: string;
  getNewQuote: () => void;
};

const QuoteItem: React.FC<Props> = ({ text, author, color, getNewQuote }) => {
  return (
    <>
      <div className="quote__box">
        <div className="quote__text" style={{ color: color }}>
          {text}
        </div>
        <div className="quote__author">
          <div className="quote__author--align" style={{ color: color }}>
            {author}
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

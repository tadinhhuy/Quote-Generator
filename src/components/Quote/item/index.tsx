import './style.scss';

type Props = {
  text: string;
  author: string;
};

const QuoteItem: React.FC<Props> = ({ text, author }) => {
  console.log("prop", text, author)
  return (
    <>
      <div className="quote__box">
        <div className="quote__text">{text}</div>
        <div className="quote__author">
          <div className="quote__author--align">
          - {author}
          </div>
        </div>
      </div>
    </>
  );
};
export default QuoteItem;

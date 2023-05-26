import NewsCardsItem from "./NewsCardsItem";

const NewsCards = () => {
  return (
    <div id="news-cards">
      <div className="news-cards container">
        <div className="news-cards-wrapper flex-row">
          <NewsCardsItem />
        </div>
      </div>
    </div>
  );
};

export default NewsCards;

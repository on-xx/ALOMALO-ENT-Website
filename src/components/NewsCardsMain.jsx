import NewsCardsItemMain from "./NewsCardsItemMain"

const NewsCardsMain = () => {
  return (
    <div id="news-cards">
      <div className="news-cards container">
        <div className="news-cards-wrapper flex-row">
          <NewsCardsItemMain />
        </div>
      </div>
    </div>
  )
}

export default NewsCardsMain
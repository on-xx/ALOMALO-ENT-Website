import React from 'react'
import newsData from "../data/newsData";

const NewsCardsItemMain = () => {
  const reversedNewsData = newsData.slice().reverse();

  return reversedNewsData.map((data) => {
    return (
      <a href={data.url} target="_blank">
        <div className="news-cards-item flex-column">
          <div className="news-cards-item-img">
            <img src={data.img} alt="" />
          </div>
          <div className="news-cards-item-title">
            <p>{data.title}</p>
          </div>
        </div>
      </a>
    );
  });
}

export default NewsCardsItemMain
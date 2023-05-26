import React, { useEffect, useState } from "react";
import newsData from "../data/newsData";

const NewsCardsItem = () => {
  const reversedNewsData = newsData.slice().reverse();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slicedNewsData = isMobile
    ? reversedNewsData.slice(0, 4)
    : reversedNewsData;

  return slicedNewsData.map((data) => {
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
};

export default NewsCardsItem;

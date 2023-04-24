import NewsCards from "../components/NewsCards"

const NewsPage = () => {
    return (
        <div id="news-page">
            <div className="news-page container">
                <div className="news-card-title-outside">
                    <h1>News & Updates</h1>
                </div>
                <NewsCards />
            </div>
        </div>
    )
}

export default NewsPage
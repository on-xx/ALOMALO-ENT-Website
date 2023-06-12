import NewsCardsMain from "../components/NewsCardsMain"
import Footer from "../components/Footer"

const NewsPage = () => {
    return (
        <>
            <div id="news-page">
                <div className="news-page container">
                    <div className="news-card-title-outside">
                        <h1>News & Updates</h1>
                    </div>
                    <NewsCardsMain />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NewsPage
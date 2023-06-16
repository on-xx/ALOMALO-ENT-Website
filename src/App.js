import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import CardSlider from "./components/CardSlider";

import ArtistPage from "./pages/ArtistPage";
import CompanyPage from "./pages/CompanyPage";
import NewsPage from "./pages/NewsPage";
import AuditionPage from "./pages/AuditionPage";
import ActorPage from "./pages/ActorPage";
import Footer from "./components/Footer";
import MultimediaPage from "./pages/MultimediaPage";

import NewsCards from "./components/NewsCards";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <MainBanner />
              <CardSlider />
              <div className="container-outside">
                <div className="news-card-title-outside">
                  <h1>News & Updates</h1>
                </div>
                <NewsCards />
              </div>

              <Footer />
            </>
          }
        ></Route>
        <Route path="/artist" element={<ArtistPage />} />
        <Route path="/actor" element={<ActorPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/audition" element={<AuditionPage />} />
        <Route path="/multimedia" element={<MultimediaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

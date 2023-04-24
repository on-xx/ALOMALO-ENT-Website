import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from "./components/Header";
import MainBanner from './components/MainBanner';
import ImageGrid from './components/ImageGrid';
import CardSlider from './components/CardSlider';

import ArtistPage from './pages/ArtistPage';
import CompanyPage from './pages/CompanyPage';
import NewsPage from './pages/NewsPage';
import AuditionPage from './pages/AuditionPage';
import Footer from './components/Footer';

import NewsCards from './components/NewsCards';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={
          <>
            <MainBanner />
            <div className="container-outside">
              <div className="news-card-title-outside">
                <h1>News & Updates</h1>
              </div>
              <NewsCards />
            </div>
            
            <CardSlider />
          </>
        }>
        </Route>
        <Route path='/artist' element={<ArtistPage />}/>
        <Route path='/company' element={<CompanyPage />}/>
        <Route path='/news' element={<NewsPage />}/>
        <Route path='/audition' element={<AuditionPage />}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

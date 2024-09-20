import './App.css';
import Testimonial from './components/Testimonial/Testimonial';
import MainHeader from './components/Header/MainHeader';
import HeroSection from './components/Hero/HeroSection';
import Portfolio from './components/Portfolio/Portfolio';
import ServicesWrapper from './components/Services/ServicesWrapper';
import SpecialSkills from './components/SpecialSkills/SpecialSkills';
import Statistics from './components/Statistics/Statistics';
import Companies from './components/Companies/Companies';
import Blog from './components/Blog/Blog';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import ClientInfos from './components/Info/ClientProjectInfo'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <MainHeader />
            <HeroSection />
            <ServicesWrapper />
            <SpecialSkills />
            <Statistics />
            <Portfolio />
            {/* <Testimonial />
            <Companies /> */}
            <Blog />
            <Subscribe />
            <Footer />
          </>
        } />
        <Route path='/clientProjectInfo' element={<ClientInfos />} />
      </Routes>

    </div>
  );
}

export default App;

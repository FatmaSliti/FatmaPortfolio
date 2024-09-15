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


function App() {
  return (
    <>
      <MainHeader />
      <HeroSection />
      <ServicesWrapper />
      <SpecialSkills />
      <Statistics />
      <Portfolio />
      <Testimonial />
      <Companies />
      <Blog />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;

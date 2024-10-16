// import './App.css';
// import Testimonial from './components/Testimonial/Testimonial';
// import MainHeader from './components/Header/MainHeader';
// import HeroSection from './components/Hero/HeroSection';
// import Portfolio from './components/Portfolio/Portfolio';
// import ServicesWrapper from './components/Services/ServicesWrapper';
// import SpecialSkills from './components/SpecialSkills/SpecialSkills';
// import Statistics from './components/Statistics/Statistics';
// import Companies from './components/Companies/Companies';
// import Blog from './components/Blog/Blog';
// import Subscribe from './components/Subscribe/Subscribe';
// import Footer from './components/Footer/Footer';
// import ClientInfos from './components/Info/ClientProjectInfo'
// import { Routes, Route } from 'react-router-dom'


// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path='/' element={
// <>
//   <MainHeader />
//   <HeroSection />
//   <ServicesWrapper />
//   <SpecialSkills />
//   <Statistics />
//   <Portfolio />
//   {/* <Testimonial />
//   <Companies /> */}
//   <Blog />
//   <Subscribe />
//   <Footer />
// </>
//         } />
//         <Route path='/clientProjectInfo' element={<ClientInfos />} />
//       </Routes>

//     </div>
//   );
// }

// export default App;


import './App.css';
import Testimonial from './components/Testimonial/Testimonial';
import MainHeader from './components/Header/MainHeader';
import HeroSection from './components/Hero/HeroSection';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/ServicesWrapper';
import SpecialSkills from './components/SpecialSkills/SpecialSkills';
import Statistics from './components/Statistics/Statistics';
import Companies from './components/Companies/Companies';
import Blog from './components/Blog/Blog';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import ClientInfos from './components/Info/ClientProjectInfo'
import { Routes, Route, RouterProvider, BrowserRouter, createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/RootLayout';
import ClientProjectInfo from './components/Info/ClientProjectInfo';
import HeadPage from './components/UI/HeadPage';
import ServiceDetails from './components/Services/ServiceDetails';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ServicesSecondVersion from './components/Services/ServicesSecondVersion';
import BlogSecondVersion from './components/Blog/BlogSecondVersion';
import PortfolioSecondVersion from './components/Portfolio/PortfolioSecondVersion';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/', element: <>
          <HeroSection />
          <Services />
          <SpecialSkills />
          <Portfolio />
          {/* <Blog /> */}
          {/* <Statistics /> */}
        </>
      },
      {
        path: '/services',
        children: [
          {
            index: true, element: <>
              <HeadPage label='Service' title='Services' samllTitle='Service List' />
              <ServicesSecondVersion />
            </>
          },
          { path: 'serviceDetails', element: <ServiceDetails /> }
        ]
      },
      {
        path: '/clientProjectInfo', element: <ClientInfos />
      },
      {
        path: '/blog', element: <>
          <HeadPage label='Blog' title='Blog List' samllTitle='Blog List' />
          <BlogSecondVersion />
        </>
      },
      {
        path: '/about', element: <>
          <HeadPage label='Home' title='About Us' samllTitle='About' />
          <About />
        </>
      },
      {
        path: '/project', element: <>
          <HeadPage label='Home' title='Projects' samllTitle='Projects List' />
          <PortfolioSecondVersion />
        </>
      },
      {
        path: '/contact', element: <>
          <HeadPage label='Home' title='Contact' samllTitle='Contact Me' />
          <Contact />
        </>
      }
    ]
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App;

import React from 'react'
import Navigation from "./components/Navigation"
import Baner from './components/Baner'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import background from "./assets/background.png";
import car1 from "./assets/slider-car1.png";
import car2 from "./assets/slider-car2.png";
import car3 from "./assets/slider-car3.png";
import truck1 from "./assets/truck1.webp";
import truck2 from "./assets/truck2.webp";
import truck3 from "./assets/truck3.webp";


const App: React.FC = (): JSX.Element => {
  const galleryImages = {
    passenger: [
      car3,
      car1,
      car2,
      car3,
      car1,
      car2,
      car3,
      car1,
    ],
    van: [
      truck1,
      truck2,
      truck3,
      truck1,
      truck2,
      truck3,
    ]
  };

  return (
    <div className='w-full bg-mainLight h-full bg-no-repeat bg-right-top font-RobotoFlex relative'>
      <img src={background} className='absolute right-0 top-0 2xl:w-7/12 xl:w-9/12 md:w-11/12 w-10/12 md:visible invisible' />
      <Navigation></Navigation>
      <Baner></Baner>
      <Gallery images={galleryImages}></Gallery>
      <Footer></Footer>
    </div>
  )
}

export default App

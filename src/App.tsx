import React from 'react'
import Navigation from "./components/Navigation"
import Baner from './components/Baner'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

const App: React.FC = (): JSX.Element => {
  const galleryImages = {
    passenger: [
      "./src/assets/slider-car1.png",
      "./src/assets/slider-car3.png",
      "./src/assets/slider-car2.png",
      "./src/assets/slider-car1.png",
      "./src/assets/slider-car3.png",
      "./src/assets/slider-car2.png",
      "./src/assets/slider-car1.png",
      "./src/assets/slider-car3.png",
      "./src/assets/slider-car2.png",
    ],
    van: [
      "./src/assets/truck1.webp",
      "./src/assets/truck2.webp",
      "./src/assets/truck3.webp",
      "./src/assets/truck1.webp",
      "./src/assets/truck2.webp",
      "./src/assets/truck3.webp",
    ]
  };

  return (
    <div className='w-full bg-mainLight h-full bg-no-repeat bg-right-top font-RobotoFlex relative'>
      <img src="./src/assets/background.png" className='absolute right-0 top-0 w-9/12 2xl:w-7/12' />
      <Navigation></Navigation>
      <Baner></Baner>
      <Gallery images={galleryImages}></Gallery>
      <Footer></Footer>
    </div>
  )
}

export default App

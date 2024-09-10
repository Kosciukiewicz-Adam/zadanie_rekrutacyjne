import React from 'react'
import Navigation from "./components/Navigation"
import Baner from './components/Baner'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

const App: React.FC = (): JSX.Element => {
  const galleryImages = [
    "./src/assets/slider-car1.png",
    "./src/assets/slider-car3.png",
    "./src/assets/slider-car2.png",
    "./src/assets/slider-car1.png",
    "./src/assets/slider-car3.png",
    "./src/assets/slider-car2.png",
    "./src/assets/slider-car1.png",
    "./src/assets/slider-car3.png",
    "./src/assets/slider-car2.png",
  ];

  return (
    <div className='w-full bg-mainLight h-full bg-[url("./src/assets/lines.png")] bg-no-repeat bg-right-top font-RobotoFlex'>
      <Navigation></Navigation>
      <Baner></Baner>
      <Gallery images={galleryImages}></Gallery>
      <Footer></Footer>
    </div>
  )
}

export default App

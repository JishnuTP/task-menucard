import React from 'react'

import BannerImageComponent from '../components/Banner'
// import BackgroundImageComponent from '../components/Background'
import CategoryButtons from '../components/SelectItems'
import DrinkCard from '../components/DrinkCard'
import BrunchCocktailCard from '../components/BrunchCocktail'
import HookahCard from '../components/Hookahcard'

import InfoSections from '../components/Info'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Header from '../components/Headers'

function LandingPage() {
  
  return (
    <div className='bg-black' 
    style={{
      backgroundImage: "url('https://i.ibb.co/R0wkpcG/black-background-mobile-wallpaper-with-fast-food-pattern.jpg')",
      backgroundSize: 'cover', // Ensures the image covers the container while preserving aspect ratio
      backgroundPosition: 'center', // Centers the image
      backgroundRepeat: 'no-repeat', // Prevents the image from repeating
      minHeight: '100vh', // Ensures the background covers the entire viewport height
      color: 'white', 
      opacity:"95%"// Sets text color to white for better contrast
    }}
>
   <Header/>
        <BannerImageComponent/>
        {/* <BackgroundImageComponent/> */}
        <CategoryButtons/>
        <DrinkCard/>
        <BrunchCocktailCard/>
        <HookahCard/>
     
        <InfoSections/>
        <ContactUs/>
        <Footer/>

    </div>
  )
}

export default LandingPage
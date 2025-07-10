
import './App.css'
import Header from './components/Header'
import HeroSection from './sections/HeroSection'
import FeatureSection from './sections/FeatureSection'
import AboutSection from './sections/AboutSection'
import FutureSection from './sections/futureSection'
import TestimonialSection from './sections/TestimonialSection'
import FAQsection from './sections/FAQsection'
import CTASection from './sections/CTAsections'
import FooterSection from './sections/FooterSection'
import BrandSection from './sections/BrandSection'


function App() {

  return (
    <>
      <div className='flex flex-col gap-10 justify-center items-center'>
        <Header />
        <HeroSection />
        <BrandSection />
        <FeatureSection />
        <AboutSection />
        <FutureSection />
        <TestimonialSection />
        <FAQsection />
        <CTASection />
        <FooterSection />
      </div>
    </>
  )
}

export default App

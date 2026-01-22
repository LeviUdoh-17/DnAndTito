import './App.css'
import MaskedVideoHero from './components/Hero'
import ClipDefs from './components/Clipdef1';
import ClipDefs1 from './components/Clipdef2';
import OurStorySection from './components/OurStory';
import GiftRegistrySection from './components/GiftRegistry';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className='w-full h-full relative'>
      <ParticleBackground />
      <Navbar />
      <div className='relative z-10'>
        <ClipDefs />
        <ClipDefs1 />
        <MaskedVideoHero />
        <ProposalVideoSection videoSrc='https://res.cloudinary.com/drnwxb8cm/video/upload/v1769119360/Por_1_wmtqtp.mp4' />
        <OurStorySection />
        <GiftRegistrySection />
      </div>
    </div>
  )
}

export default App

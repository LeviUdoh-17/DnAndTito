import './App.css'
import MaskedVideoHero from './components/Hero'
import ClipDefs from './components/Clipdef1';
import ClipDefs1 from './components/Clipdef2';
import OurStorySection from './components/OurStory';
import GiftRegistrySection from './components/GiftRegistry';

function App() {

  return (
    <div className='w-full h-full'>
      <ClipDefs />
      <ClipDefs1 />
      <MaskedVideoHero />
      <OurStorySection />
      <GiftRegistrySection />
    </div>
  )
}

export default App

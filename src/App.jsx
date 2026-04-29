import { useScrollReveal } from './hooks/useScrollReveal'
import { useFonts } from './hooks/useFonts'

import Navbar           from './components/Navbar'
import Hero             from './components/Hero'
import WhatIsKurtos     from './components/WhatIsKurtos'
import Menu             from './components/Menu'
import HowItWorks       from './components/HowItWorks'
import Location         from './components/Location'
import BrandExperience  from './components/BrandExperience'
import Expansion        from './components/Expansion'
import Footer           from './components/Footer'

export default function App() {
  // Register scroll-reveal observer for all [data-reveal] elements
  useScrollReveal()

  // Wait for fonts before rendering — prevents FOUT on hero serif
  const fontsReady = useFonts(['Cormorant Garamond', 'Jost'])
  if (!fontsReady) return null

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WhatIsKurtos />
        <Menu />
        <HowItWorks />
        <Location />
        <BrandExperience />
        <Expansion />
      </main>

      <Footer />
    </>
  )
}

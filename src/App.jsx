
import Container from './components/container'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'


const App = () => {
  return (
    <Container>
<main className='bg-black text-white'>
      <Navbar/>
      <HeroSection/>
    </main>
    </Container>
    

  )
}

export default App
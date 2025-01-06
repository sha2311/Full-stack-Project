import './App.css'
import Chillsbay from './Components/Chillsbay'
import Hero from './Components/Hero'
import MoodImg from './Components/MoodImg'
import Navbarmenu from './Components/Navbar'
import ToDoCatalog from './Components/ToDoCatalog'
import Gallary from './Components/Gallary'

function App() {
 

  return (
    <main className="font-Red-Hat">
     <Navbarmenu/>
     <Hero/>
     <MoodImg/>
     <ToDoCatalog/>
     <Chillsbay/>
     <Gallary/>
    </main>
  )
}

export default App

import './App.css'
import Navbarmenu from './Components/Navbar'
import Footer from './Components/Footer'
import Homepage from './Components/Home/Index'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DrinkPage from './Components/DrinkPage/DrinkPage';





function App() {
  return (
    <main className="font-Red-Hat">
       <Router>
        <Navbarmenu />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/drink" element={ <DrinkPage/> } />
        </Routes> 
        <Footer />
      </Router>
    
    </main>
  )
}

export default App

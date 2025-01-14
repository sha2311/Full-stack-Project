import Navbarmenu from './Components/Navbar'
import Footer from './Components/Footer'
import Homepage from './Components/Home/HomePage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DrinkPage from './Components/DrinkPage/DrinkPage';
import Payment from './Components/PaymentPage/Payment';





function App() {
  return (
    <main className="font-Red-Hat">
       <Router>
        <Navbarmenu />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/drink" element={ <DrinkPage/> } />
          <Route path="/cart" element={ <Payment/> } />
          
        </Routes> 
        <Footer />
      </Router>
    
    </main>
  )
}

export default App

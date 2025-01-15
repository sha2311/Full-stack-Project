import Homepage from './Components/Home/HomePage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DrinkPage from './Components/DrinkPage/DrinkPage';
import Payment from './Components/PaymentPage/Payment';
import Contacts from './Components/Contacts/Contacts';
import ClubPage from './Components/ClubPage/ClubPage';
import Warper from './Components/Common/warper';





function App() {
  return (
    <main className="font-Red-Hat">
       <Router>
        {/* <Navbarmenu /> */}
        <Routes>
          <Route path="/" element={
            <Warper>
                 <Homepage />
            </Warper>
           
            } />
          <Route path="/drink" element={ <Warper> <DrinkPage/></Warper> } />
          <Route path="/club" element={ <Warper isDark><ClubPage/></Warper>  } />
          <Route path="/cart" element={ <Warper><Payment/></Warper>  } />
          <Route path="/contact" element={ <Warper><Contacts/> </Warper> } />
          
        </Routes> 
        {/* <Footer /> */}
      </Router>
    
    </main>
  )
}

export default App

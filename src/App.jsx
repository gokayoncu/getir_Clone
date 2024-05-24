import './App.css'
import Navbar from './component/Navbar'
import Getir from './component/Getir.jsx'
import { Routes,Route } from 'react-router-dom'
import Getireat from './component/Getireat.jsx'
import Getirbig from './component/Getirbig.jsx'
import Getirwater from './component/Getirwater.jsx'
import Getirbazaar from './component/Getirbazaar.jsx'
function App() {

  return (
    <>
      <Navbar />
      <Routes>        
        <Route path='/' element={<Getir/>} />
        <Route path='/yemek' element={<Getireat/>} />
        <Route path='/buyuk' element={<Getirbig/>} />
        <Route path='/getirsu' element={<Getirwater/>} />
        <Route path='/getirçarşı' element={<Getirbazaar/>} />
      </Routes>
    </>
  )
}

export default App

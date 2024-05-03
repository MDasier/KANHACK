
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import NavBar from './components/NavBar.jsx'
import SideBar from './components/SideBar.jsx'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound.jsx'
import About from './components/About.jsx'
import ItemDetails from './components/ItemDetails.jsx'


function App() {
  

  return (
    <>
  
    <NavBar />
    <Footer />
    {/*<SideBar />  */}
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/listItem/:itemId' element={<ItemDetails/>}/>

    </Routes >
      
    </>
  )
}

export default App


import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import NavBar from './components/NavBar.jsx'
import SideBar from './components/SideBar.jsx'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'
import About from './pages/About.jsx'
import ItemDetails from './components/ItemDetails.jsx'
import CreateTask from './components/CreateTask.jsx'
import { useState } from 'react'
import listadoProyectos from './data/listacopia.json'
import Video from './pages/Video.jsx'

function App() {
  const [ lista , setLista ] = useState(listadoProyectos)//carga la lista inicial que es la que pasamos a los componentes
  const [searchValue,setSearchValue] = useState("")

  return (
    <>
    <SideBar />
    <NavBar searchValue={searchValue} setSearchValue={setSearchValue}/>
    
    
    <Routes >
      <Route path='/' 
      element={<Home searchValue={searchValue} setSearchValue={setSearchValue} lista={lista} setLista={setLista}/>} />      
      <Route path='/about' 
      element={<About />}/>
      <Route path='/listItem/:itemId' 
      element={<ItemDetails lista={lista} setLista={setLista}/>}/>
      <Route path='/form' 
      element={<CreateTask lista={lista} setLista={setLista}/>}/>
      <Route path='/patata-video'
      element={<Video/>} />

      <Route path='*' 
      element={<NotFound/>}/>

    </Routes >
    <Footer />
      
    </>
  )
}

export default App

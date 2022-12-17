import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import AllProjects from './Component/AllProjects/AllProjects'
import Social from './Component/Social/Social';
import ProjectDetail from './Component/ProjectDetail/ProjectDetail';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<AllProjects />} />
        <Route path='/contact' element={<Social />} />
        <Route path='/project/:id' element={<ProjectDetail />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
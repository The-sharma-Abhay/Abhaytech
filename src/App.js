import React, { useEffect, useState } from "react";
import '../node_modules//bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {Routes, Route,Navigate} from 'react-router-dom'
import Menu from "./Menu";
import './index.css'
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";
function App(){

return(
  <>
 <div className="wrapper">
 <Container>
  <Menu/>
<Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/service" element={<Service/>}/>
  <Route exact path="/contact" element={<Contact/>}/>
  <Route exact path="/About" element={<About/>}/>
  <Route exact path="*" element={<Home/>}/>
</Routes>
<Service/>
<Contact/>
<About/>
<Footer />
  </Container>
 </div>
  </>
)

}

export default App;
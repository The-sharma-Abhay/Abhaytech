import React from "react";
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import img1 from "../src/Image/img1.png"
import './index.css';
import '../node_modules//bootstrap/dist/css/bootstrap.min.css';
import Common from "./Common";


function Home() {

  return (
  <>
<Common 
name="Grow Your Business with "
visit="/service" 
img={img1}
btname="Get Started"
/>

  </>  
  )}

export default Home;
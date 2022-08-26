import React from "react";
import {Link} from "react-router-dom"
import img1 from "../src/Image/img1.png"
import './index.css';
import '../node_modules//bootstrap/dist/css/bootstrap.min.css';


function Common(props) {

  return (
  <>
  
<section id="header" className="">
<div className="container-fluid nav_bg">
    <div className="row">
        <div className="col-12 mx-auto">
        <div className="row">

        <div className="col-md-6 pt-5 pt-lg-5 order-2 order-lg-1" >
        <h1>{props.name}<strong className="brand-name">Abhay Tech</strong></h1>
        <h2 className="my-3">
            We are the team of talented developer making website 
        </h2>
        <div className="mt-3">
            <Link to={props.visit} className="btn-get-started">{props.btname}</Link>
        </div>
        </div>

        <div className="col-lg-6 order-1 order-lg-2 header_img ">
        <img  src={props.img} alt="home img" className="img-fluid animated"/>

        </div>
        </div>
        </div>

    </div>

</div>
</section>
  </>  
  )}

export default Common;
import React from "react";
import { Container } from "react-bootstrap";
import Scard from "./Scard";
import Sdata from "./Sdata";

function Service() {
  return (

  
  <>
  <div className="scard ">
    <Container>
      <div className="row">
        <div className="col-12 mx-auto">
          <div className="row gy-4">
            {
                Sdata.map((item,index)=>{
                return  <Scard 
                  Key={index}
                  simg={item.img}
                  title={item.title}
                  btname={item.btname}
                />
                })
            }
           </div>
        </div>
      </div>
    </Container>
  </div>

  </>  
  )}

export default Service;
import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./index.css";

function Contact() {
  const [data,setData]=useState({
    fname:"",
    age:"",
    email:"",
    phone:"",
  });
  const [output,setOutput]=useState([]);
  const [show,setShow]=useState(false);
  const inputEvent=(event)=>{
    const {name,value}=event.target;
    
      setData((pval)=>{
        return{
          ...pval,
          [name]:value,
        }
      })
  }
  const  removebox =()=>{
    setShow(!show);
  }
  return (
  
  <>
  <div className="cover">
  <Container>
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">

            <div className="cform">
              <h1>Contact Us</h1>
              <form onSubmit={(e)=>{
                  e.preventDefault();
                  setOutput((preval)=>{
                      return [...preval,data];
                    
                  })
                  setShow(!show);
              }}>
              
                <table>
                <tbody>
                <tr>
                  <td>
                  <label for="name">FullName</label>
                  </td>
                  <td>
                    
                <input type="text" id="name" placeholder="Enter Full Name" name="fname" value={data.fname}  onChange={inputEvent}/>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for="age">Age</label>
                  </td>
                  <td>
                <input type="text" id="age" placeholder="Enter Your Age" size="3" maxLength={2} name="age" value={data.age} onChange={inputEvent}/>
                  </td>
                </tr>
                <tr>
                  <td>
                <label for="email">Email Address</label>
                  </td>
                  <td>
                    
                <input type="email" id="email" placeholder="Enter Email Address" name="email" value={data.email} required onChange={inputEvent}/>
                  </td>
                </tr>
                <tr>
                  <td>
                  <label for="phone">Phone No</label>
                  </td>
                  <td>
                           <div className="input-box">
                            <span className="prefix"> +91</span>
                           <input type="tel" id="phone" placeholder="Enter Phone no" name="phone" value={data.phone} required maxLength={10} onChange={inputEvent}/>

                            </div>   
                  </td>
                </tr>
              
                  <tr>
                    <td>
                    <input type="submit"  value="Submit Form" className="submit"/>
                    </td>
                  </tr>
            
                </tbody>
                </table>
              </form>
            </div>
          </div>
          <div className="col-2"></div>
          <h1>
          {
              show == true ? 
              <div className="output">
                <button type="button" onClick={removebox}>✕</button>
                <h3>Your name is {data.fname}</h3>
              <h3>Your Age is {data.age}</h3>
      
              <h3>Your Email is {data.email}</h3>
              <h3>Your Phone No is {data.phone}</h3>
      
            </div>:null
          }
          </h1>
        </div>
      </div>
    </div>
  </Container>
  </div>
  </>  
  )}

export default Contact;
import React from "react";
import {Card } from "react-bootstrap";
import {NavLink} from 'react-router-dom'


function Scard(props) {
  return (
  
  <>
      <div className="col-4 mx auto">
      <Card style={{ width: '100%'}}>
      <Card.Img variant="top" src={props.simg}  className="simg" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <NavLink variant="primary" to="/" className="btn-get-started">{props.btname}</NavLink>
      </Card.Body>
    </Card>
</div>
  </>  
  )}

export default Scard;
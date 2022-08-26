
import React,{Component} from "react"
// import ReactDOM from 'react-dom';


export function test(){
    return(
        <>
        <li>types of component</li>
        <li>Function component</li>
        <li>Class component</li>
        <li>Pure component</li>
        <li>Root component</li>
        </>
    )
}



export class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
        name:"Abhay",
        age:24,
        address:"Noida"
      };
      
    };
    Update() {
          this.setState({name:"Aman"});
      }
    render() {
      return (
        <div>
          <h1>My name is {this.state.name}</h1>
          <h1>My age is {this.state.age}</h1>
          <h1>My address is {this.state.address}</h1>
          <button onClick ={()=>this.sUpdate()}>Update name</button>
          <button onClick={props.data}>Print data</button>
          
        </div>
      );
    }
  }

  


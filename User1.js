import React, { Component } from 'react';
import reactDom from 'react-dom';

 export class Condition extends Component {
      constructor(props){
          super(props)
      }
      
     state={age:19}
    render() {
        let output=null;
        let x=57;
        if(this.state.age>=100){
            output=(
                <h1>You should rest</h1>
            );
        } else if(this.state.age>=18 && this.state.age<=100){
            output=(
                <h1>You are eligible for voting</h1>
            );
        }else{
            output=(
                <h1>You are not eligible for voting</h1>
            );
        }
        
        return (
            <>
                { x>=18?<h1>you are eligible for voting </h1>:x>=100?<h1>You should rest now</h1>: <h2>you are not eligible for voting</h2>} 
                { 
                    this.state.age>=18? <h1>You are eligible for voting</h1>:<h1>You are not eligible for voting</h1>
                }
                {output}
                
            </>
        );
    }
}

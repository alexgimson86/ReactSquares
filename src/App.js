import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rectangle from 'react-rectangle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['#B22222','#FFFF00','#32CD32','#00CED1','#0000CD','#FF00FF','#C71585', '#8B4513']
    };
  }
  componentDidMount(){
    this.interval = setInterval(()=>{
      var tempArr =this.state.colors.slice(0);
       var tempHex =  tempArr.shift();
       tempArr.push(tempHex)
       this.setState({
         colors: tempArr
       })
    },1000);
  }
 
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
    <Rectangle className="Rectangle">
      <div style={{ background: this.state.colors[0] , width: '80%', height: '80%' , border: '5px solid ' + this.state.colors[1]}} />
    </Rectangle>
    <Rectangle className="Rectangle">
      <div style={{ background: this.state.colors[2], width: '80%', height: '80%' , border: '5px solid ' + this.state.colors[3]}} />
    </Rectangle>
    <Rectangle className="Rectangle">
      <div style={{ background: this.state.colors[4], width: '80%', height: '80%' , border: '5px solid ' + this.state.colors[5]}} />
    </Rectangle>
    <Rectangle className="Rectangle">
      <div style={{ background: this.state.colors[6], width: '80%', height: '80%' , border: '5px solid ' +this.state.colors[7]}} />
    </Rectangle>
    </div>
    );
  }
}

export default App;

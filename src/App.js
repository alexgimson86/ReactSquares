import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rectangle from 'react-rectangle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['#B22222','#FFFF00','#32CD32','#00CED1','#0000CD','#FF00FF','#C71585', '#8B4513'],
      sizes:['40%','90%', '60%', '20%', '10%', '30%','80%','15%','100%'],
      padding:['300px','80px','100px', '75px']

    };
  }
  componentDidMount(){
    this.interval = setInterval(()=>{
      var tempArr =this.state.colors.slice(0);
      var tempSizeArray = this.state.sizes.slice(0);
      var paddArr = this.state.padding.slice(0);
      var tempHex =  tempArr.shift();
      paddArr.push(paddArr.shift());
      var tempSize = tempSizeArray.shift();
      tempArr.push(tempHex)
      tempSizeArray.push(tempSize)

       this.setState({
         colors: tempArr,
         sizes: tempSizeArray,
         padding: paddArr
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
      <div style={{ background: this.state.colors[0] , margin:this.state.padding[0], width: this.state.sizes[0], height: this.state.sizes[0] , border: '5px solid ' + this.state.colors[1]}} />
    </Rectangle>
    <Rectangle className="Rectangle">
      <div style={{ background: this.state.colors[2],  margin:this.state.padding[1], width: this.state.sizes[1], height: this.state.sizes[1] , border: '5px solid ' + this.state.colors[3]}} />
    </Rectangle>
    <Rectangle className="Rectangle">
      <div style={{ background: this.state.colors[4],  mnargin:this.state.padding[2], width: this.state.sizes[2], height: this.state.sizes[2] , border: '5px solid ' + this.state.colors[5]}} />
    </Rectangle>
    <Rectangle className="Rectangle">
      <div style={{ background: this.state.colors[6],  margin:this.state.padding[3], width: this.state.sizes[3], height: this.state.sizes[3] , border: '5px solid ' +this.state.colors[7]}} />
    </Rectangle>
    </div>
    );
  }
}

export default App;

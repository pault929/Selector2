import React, {Component} from 'react';
import Shape from'./shape';

class Selector extends Component{
  constructor(){
    super();
    this.state = {
      selectedShape: 'square',
    }
  }
// our methods live here
selectShape =(shapeName) =>{
  this.setState({
    selectedShape: shapeName,
  })
}
  render(){
    return(
      <div className="container">
        <div className="navbar">
        <div>Selected: <span>{this.state.selectedShape}</span></div>
        </div>
    <div className="shape-list">
    <table>
    <Shape shape="square" selectShape={this.selectShape}/>
    <Shape shape="triangle" selectShape={this.selectShape}/>
    <Shape shape="circle" selectShape={this.selectShape}/>
    <Shape shape="oval" selectShape={this.selectShape}/>
    <Shape shape="trapezium" selectShape={this.selectShape}/>
    <Shape shape="star" selectShape={this.selectShape}/>
    </table>
    </div>
</div>
  )
  }
}
export default Selector;

import React from 'react';
import Game from './components/Game'
import Settings from './components/Settings'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      background: 2,
    }
  }
  changeColor(i){
    this.setState({background: i})
  }
  render() {
    return (
      <div className={'App bg-' + this.state.background} >
        <Game />
        <Settings activeColor={this.state.background} changeColor={this.changeColor.bind(this)}/>
      </div>  
    )}

}


export default App;
